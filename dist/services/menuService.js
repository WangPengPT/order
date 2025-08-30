const db = require('../filedb');
const CustomDishRepository = require('../repositories/customDishRepository.js');
const { appState } = require('../state.js');
const { mergeFilteredExact } = require('../utils/mergeFilteredExact.js');
const MenuRepository = require('../repositories/menuRepository.js');

class MenuService {
  constructor(menuRespository = new MenuRepository(), customeDishRepository = new CustomDishRepository()) {
    this.menuRespository = menuRespository
    this.customeDishRepository = customeDishRepository
  }

  // 载入菜单数据
  async loadMenu(inMenu) {
    try {
      let menu;
      if (!inMenu) {
        menu = await this.menuRespository.getMenu();
      } else {
        await this.menuRespository.saveMenu(inMenu);
        menu = inMenu // 额外操作
      }

      const category = {};
      for (let i = 0; i < menu.length; i++) {
        const value = menu[i];
        if (value.category && (value.category != "") && (!category[value.handle])) {
          category[value.handle] = value.category;
        }
      }
      let dishCategory = {}
      for (let i = 0; i < menu.length; i++) {
        const value = menu[i];
        if (category[value.handle]) {
          dishCategory[value.id] = category[value.handle];
        }
      }

      appState.dishCategory = dishCategory


      const tags = {};
      for (let i = 0; i < menu.length; i++) {
        const value = menu[i];
        if (value.tags && (value.tags != "") && (!tags[value.handle])) {
          tags[value.handle] = value.tags;
        }
      }
      let dishTags = {}
      for (let i = 0; i < menu.length; i++) {
        const value = menu[i];
        if (tags[value.handle]) {
          dishTags[value.id] = tags[value.handle];
        }
      }
      appState.dishTags = dishTags;

      appState.menu = menu;

      const localTabs = db.loadData('orderMenuTab', []);
      appState.orderMenuTab = localTabs

      const types = [];

      for (let i = 0; i < appState.menu.length; i++) {
        const value = appState.menu[i];
        if (!types.includes(value.category)) {
          if (value.category != "") types.push(value.category);
        }
      }

      const orderTabs = [];

      for (let i = 0; i < appState.orderMenuTab.length; i++) {
        const tab = appState.orderMenuTab[i];
        if (types.includes(tab)) {
          orderTabs.push(tab);
        }
      }

      for (let i = 0; i < types.length; i++) {
        const tab = types[i];
        if (!orderTabs.includes(tab)) {
          orderTabs.push(tab);
        }
      }

      const customDish = await this.customeDishRepository.getAllEnableTemplates()
      const names = customDish.map(it => it.name)
      const tabs = mergeFilteredExact(names, types, localTabs);
      this.saveOrderMenuTab(tabs)
    } catch (error) {
      console.warn("Error: ", error)
    }

  }

  getDishCategory(item) {
    if (item.category) return item.category;

    const id = item.dishid;

    let tag = appState.dishTags[id];
    if (tag && tag != "") return tag;

    let ret = appState.dishCategory[id];
    if (ret) return ret;

    const data = appState.menu.find(data => data.id == id);
    if (data) {
      if (data.tags && data.tags != "") {
        return data.tags
      } else {
        return data.category;
      }
    }

    return "";
  }

  // 获取菜单
  async getMenu() {
    const menu = await this.menuRespository.getMenu()
    appState.menu = menu;
    return menu
  }

  async updateMenu(data, update_all) {

    try {
      //console.log(appState.menu);

      if (update_all && update_all != "false") {
        console.log("updateMenu update_all");
        appState.menu = data;
        await this.menuRespository.updateMenuReforce(appState.menu)
      }
      else {
        console.log("updateMenu...");
        let mapUpdate = {

        };

        for (let i = 0; i < data.length; i++) {
          const orgData = data[i];
          let oldData = undefined;
          for (let j = 0; j < appState.menu.length; j++) {
            oldData = appState.menu[j];
            if (oldData.id == orgData.id && oldData.handle == orgData.handle) {
              //appState.menu[j] = {...oldData, ...orgData};
              oldData.name = orgData.name;
              oldData.subname = orgData.subname;
              oldData.note = orgData.note;
              oldData.category = orgData.category;
              oldData.image = orgData.image;
              oldData.price = orgData.price;

              if (!mapUpdate[orgData.handle]) mapUpdate[orgData.handle] = [];
              mapUpdate[orgData.handle].push(orgData.id);

              //console.log("update..." , appState.menu[j].id);
              break;
            } else {
              oldData = undefined;
            }
          }

          if (!oldData) {
            appState.menu.push(orgData);

            if (!mapUpdate[orgData.handle]) mapUpdate[orgData.handle] = [];
            mapUpdate[orgData.handle].push(orgData.id);
            //console.log("add..." , orgData.id);
          }
        }

        appState.menu = appState.menu.filter(data => {
          if (mapUpdate[data.handle]) {
            return mapUpdate[data.handle].includes(data.id)
          }
          return true;
        });

      }

      await this.menuRespository.saveMenu(appState.menu)

      const types = [];

      for (let i = 0; i < appState.menu.length; i++) {
        const value = appState.menu[i];
        if (!types.includes(value.category)) {
          if (value.category != "") types.push(value.category);
        }
      }

      const orderTabs = [];

      for (let i = 0; i < appState.orderMenuTab.length; i++) {
        const tab = appState.orderMenuTab[i];
        if (types.includes(tab)) {
          orderTabs.push(tab);
        }
      }

      for (let i = 0; i < types.length; i++) {
        const tab = types[i];
        if (!orderTabs.includes(tab)) {
          orderTabs.push(tab);
        }
      }

      this.saveOrderMenuTab(orderTabs);
    } catch (error) {
      console.warn("Error: ", error)
    }
  }

  getOrderMenuTab() {
    return appState.orderMenuTab;
  }

  saveOrderMenuTab(data) {
    try {
      appState.orderMenuTab = data;
      db.saveData('orderMenuTab', data);
    } catch (error) {
      console.warn("Error: ", error)
    }

  }


  findDish(id) {
    var menu = appState.menu;
    for (let i = 0; i < menu.length; i++) {
      const dish = menu[i];
      if (dish.id == id) return dish;
    }

    return undefined;
  }

  saveDishRating(id, like, rate) {
    try {
      const item = appState.menu.find(m => m.id === id);

      if (!item) throw new Error("invalid item id: ", id);

      if (![-1, 0, 1].includes(like)) throw new Error("invalid like value: ", like);

      if (![-1, 0, 1].includes(rate)) throw new Error("invalid rate value: ", rate);

      if (!item.rates) {
        item.likes = 0;
        item.rates = 0;
      }
      item.likes += like;
      item.rates += rate;

      // 数据写入每月评分
      //saveMonthRates(item)

      return {
        success: true,
        data: {
          id: id,
          likes: item.likes,
          rates: item.rates
        }
      }
    } catch (error) {
      return {
        success: false,
        data: error.message
      }
    }
  }

  incrementOrder(orderData) {
    try {
      if (!orderData.table) throw new Error("No table id")
      const orders = appState.incrementOrder(orderData)
      return {
        success: true,
        data: orders
      }
    } catch (error) {
      console.warn("Error: ", error)
      return {
        success: false,
        data: error.message
      }
    }
  }

  async save() {
    await this.menuRespository.saveMenu(appState.menu)
    db.saveData('orderMenuTab', appState.orderMenuTab);
  }

  async deleteItem(id) {
    try {
      const index = appState.menu.findIndex(item => item.id == id);

      if (index === -1) throw new Error("No item id")

      const count = appState.menu.filter(item => item.category === appState.menu[index].category).length
      if (count === 1) {
        appState.orderMenuTab = appState.orderMenuTab.filter(tab => tab !== appState.menu[index].category)
      }

      appState.menu.splice(index, 1);

      await this.menuRespository.deleteDish(id)

      return {
        success: true,
        data: id
      }
    } catch (error) {
      console.warn("Error: ", error)
      return {
        success: false,
        data: error.message
      }
    }
  }

  async updateMenuSorted(newMenSorted) {
    try {
          const menu = appState.menu;
    const newTab = [];
    const mmenu = [];

    Array.from(newMenSorted).forEach(category => {
      newTab.push(category.name);

      const currentDishSort = category.subitem || [];
      // 找出数据库中该分类的所有菜品
      const localDishSort = menu.filter(dish => dish.category === category.name);

      // 比较 id 顺序是否不同
      const currentIds = currentDishSort.map(d => d.id);
      const localIds = localDishSort.map(d => d.id);

      const isDifferent = currentIds.join(',') !== localIds.join(',');
      if (localDishSort.length && isDifferent) {
        currentDishSort.forEach(item => {
          // 找到对应的菜品
          const dishIndex = menu.findIndex(d => d.id === item.id);
          if (dishIndex !== -1) {
            const mainDish = menu[dishIndex]
            const dishRange = this.joinSubitems(mainDish, menu)
            const removed = menu.splice(dishIndex, dishRange.length); // 从原menu删除
            //添加条件 是同一个分类下的 最后添加
            mmenu.push(...removed); // 按新顺序加入
          }
        });
      }
    });

    // 把重新排序后的菜品加回menu
    appState.menu.push(...mmenu);
    await this.menuRespository.updateMenuReforce(appState.menu)

    // 更新 tab
    appState.orderMenuTab = newTab;
    db.saveData('orderMenuTab', newTab);
    return {
      success: true
    }
    } catch (error) {
      console.log("error: ", error.message)
      return {
        success: false
      }
    }

  }
    async getMenuAndTab() {
        return { success: true, data: { menu: await this.menuRespository.getMenu(), menuTab: appState.orderMenuTab } };
    }

  joinSubitems(mainDish, menu) {
    if (mainDish.subname == "Default Title" || !mainDish.subname) return [mainDish]
    const dishes = menu.filter((it) => it.handle === mainDish.handle)
    return dishes
  }

  async updatedMenuById(dish) {
    console.log("service dish: ", dish)
    if (!dish.id) return null
    await this.menuRespository.update(dish)
  }

}

const menuService = new MenuService()



// 导出函数和状态
module.exports = {
  menuService,
  MenuService
};
