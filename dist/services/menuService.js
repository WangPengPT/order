const db = require('../filedb');
const CustomDishRepository = require('../repositories/customDishRepository.js');
const { appState } = require('../state.js');
const { syncCustomDishes, syncLocalWithMenuAndCustom, syncTabsWhitoutCustom } = require('../utils/mergeFilteredExact.js');
const MenuRepository = require('../repositories/menuRepository.js');
const DB = require('../db.js');
const MenuOrderingRepository = require('../repositories/menuOrderingRepository.js');
const centerSocket = require('../socket/centerSocket.js');
const { logger } = require('../utils/logger.js');

class MenuService {
  constructor(menuRespository = new MenuRepository(), menuOrderingRepository = new MenuOrderingRepository(), customeDishRepository = new CustomDishRepository()) {
    this.menuRespository = menuRespository
    this.menuOrderingRepository = menuOrderingRepository
    this.customeDishRepository = customeDishRepository
  }

  // 载入菜单数据
  async loadMenu() {
    try {

      let tabs = await this.menuOrderingRepository.get()
      if (!tabs || tabs == null) {
        console.log("初始化 菜品顺序")
        const mm = await this.buildMenuOrdering()
        await this.saveMenuOrdering(mm)
        await this.reorganizeMenuTab_custom()
      }

      return await DB.withTransaction(async (session) => {
        const menu = await this.menuRespository.getMenu(session);
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

        const localTabs = await this.getMenuOrdering(session)
        appState.orderMenuTab = localTabs.map(it => it.name)

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
        tabs = await this.menuOrderingRepository.get(session)
        // 每次load 都查看local 来判断自定义添加到哪里
        appState.orderMenuTab = tabs.map(it => it.name)
      })


    } catch (error) {
      console.warn("Error: ", error)
    }

  }

  async initMenuOrdering() {
    await DB.withTransaction(async (session) => {
      //all
      const allTabs = await this.menuOrderingRepository.get(session)
      if (allTabs == null) {
        this.reorganizeMenuTab_custom(session)
      }
      const dineInTabs = await this.menuOrderingRepository.getDineIn(session)
      if (dineInTabs == null) {
        const customDish = (await this.customeDishRepository.getAllEnableTemplates(session)).map(it => it.name)
        const dineInMenu = await this.menuRespository.getDineInMenu(session) || []
        const menuDish = await this.buildMenuOrdering(session, dineInMenu)
        const tabs = syncCustomDishes([], customDish, menuDish)
        await this.menuOrderingRepository.saveDineIn(tabs, session)
      }

      const takeawayTabs = await this.menuOrderingRepository.getTakeaway(session)
      if (takeawayTabs == null) {
        const takeawayMenu = await this.menuRespository.getTakeaway(session) || []
        const menuDish = await this.buildMenuOrdering(session, takeawayMenu)
        await this.menuOrderingRepository.saveTakeaway(menuDish, session)
      }
    })
  }

  async updateDineInOrdering(session = null) {
    const dineInTabs = await this.menuOrderingRepository.getDineIn(session)
    const customDish = (await this.customeDishRepository.getAllEnableTemplates(session)).map(it => it.name)
    const dineInMenu = await this.menuRespository.getDineInMenu(session) || []
    const menuDish = await this.buildMenuOrdering(session, dineInMenu)
    const tabs = syncCustomDishes(dineInTabs, customDish, menuDish)
    await this.menuOrderingRepository.saveDineIn(tabs, session)
  }

  async updateTakeawayOrdering(session = null) {
    const takeawayTabs = await this.menuOrderingRepository.getTakeaway(session)
    const takeawayMenu = await this.menuRespository.getTakeaway(session) || []
    const menuDish = await this.buildMenuOrdering(session, takeawayMenu)
    const tabs = syncTabsWhitoutCustom(takeawayTabs, menuDish)
    await this.menuOrderingRepository.saveTakeaway(tabs, session)
  }

  /**
   * 本地和自定义菜
   * @param {db session} session 
   */
  async reorganizeAndSaveMenuTab_menu(session = null) {
    console.log("reorganizeAndSaveMenuTab_menu")
    const customDish = (await this.customeDishRepository.getAllEnableTemplates(session)).map(it => it.name)
    const localTabs = await this.menuOrderingRepository.get(session)
    const menuDish = await this.buildMenuOrdering(session)
    const tabs = await syncLocalWithMenuAndCustom(localTabs, menuDish, customDish)
    await this.saveMenuOrdering(tabs, session)
    console.log("reorganizeAndSaveMenuTab_menu finish")
  }

  /**
   * 菜单和特殊菜融合
   * @param {db session} session 
   */
  async reorganizeMenuTab_custom(session = null) {
    const customDish = (await this.customeDishRepository.getAllEnableTemplates(session)).map(it => it.name)
    const localTabs = await this.menuOrderingRepository.get(session)
    const menuDish = await this.buildMenuOrdering(session)
    const tabs = syncCustomDishes(localTabs, customDish, menuDish)
    await this.saveMenuOrdering(tabs, session)
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

  /**
   * 基于菜单创建分类排序
   * @param {db session} session 
   * @param {Array} menu 
   * @returns 
   */
  async buildMenuOrdering(session = null, menu) {

    if (!menu) {
      menu = (await this.menuRespository.getMenu(session))
    }

    // 两个 map：handle -> main / handle -> sub
    const handleToMain = {}  // { handle: mainDish }
    const handleToSubs = {}  // { handle: [subDish, ...] }

    for (const item of menu) {
      if (!item.handle) continue
      if (item.category && item.category !== "") {
        handleToMain[item.handle] = item
        handleToSubs[item.handle] ??= []  // 确保有数组
      } else {
        handleToSubs[item.handle] ??= []
        handleToSubs[item.handle].push(item)
      }
    }

    // 按 category 分组
    const categoryMap = {}  // { category: [{id, subDishes}] }

    for (const [handle, main] of Object.entries(handleToMain)) {
      if (handleToSubs[handle].length >= 1) {
        handleToSubs[handle].push({ id: main.id })
      }
      const subs = handleToSubs[handle] || []
      const category = main.category
      categoryMap[category] ??= []
      categoryMap[category].push({
        id: main.id,
        subDishes: subs.map(it => it.id)
      })
    }

    // 转换成数组形式
    const menuOrdering = Object.entries(categoryMap)
      .filter(([category]) => category !== "Undefined")
      .map(([category, dishes]) => ({
        name: category,
        dishes
      }))
    return menuOrdering
  }



  async saveMenuOrdering(data, session = null) {
    await this.menuOrderingRepository.save(data, session)
  }

  async getMenuOrdering(session = null) {
    //await this.saveMenuOrdering(await this.buildMenuOrdering())
    return await this.menuOrderingRepository.get(session)
  }

  // 获取菜单
  async getMenu() {
    logger.info("获取菜单")
    const menu = await this.menuRespository.getMenu()
    appState.menu = menu;
    return menu
  }

  getDiscount(price, base_price) {

    let ret = 1 - price / base_price;

    ret = Math.round(ret * 100);

    return ret;
  }

  async getDineInMenuAndTabs() {
    const menu = await this.menuRespository.getDineInMenu()
    const tabs = await this.menuOrderingRepository.getDineIn()
    return {
      menu: menu,
      tabs: tabs
    }
  }

  filterMenuByDiscount(menu) {
    let ret = menu.filter((item) => {
      return item.discount && item.discount > 0;
    });
    return ret;
  }

  makeTab(menu, name) {
    const handleToMain = {}  // { handle: mainDish }
    const handleToSubs = {}  // { handle: [subDish, ...] }

    for (const item of menu) {
      if (!item.handle) continue
      if (item.category && item.category !== "") {
        handleToMain[item.handle] = item
        handleToSubs[item.handle] ??= []  // 确保有数组
      } else {
        handleToSubs[item.handle] ??= []
        handleToSubs[item.handle].push(item)
      }
    }

    // 按 category 分组
    const ret = {
      name: name,
      dishes: [],
    }

    for (const [handle, main] of Object.entries(handleToMain)) {
      if (handleToSubs[handle].length >= 1) {
        handleToSubs[handle].push({ id: main.id })
      }
      const subs = handleToSubs[handle] || []

      ret.dishes.push({
        id: main.id,
        subDishes: subs.map(it => it.id)
      })
    }

    return ret;
  }

  async getTakeawayMenuAndTabs() {
    const menu = await this.menuRespository.getTakeaway()
    const tabs = await this.menuOrderingRepository.getTakeaway()

    let discountTab = undefined
    const discountMenu = this.filterMenuByDiscount(menu)
    if (discountMenu.length > 0) {
      discountTab = this.makeTab(discountMenu, "Descontos")
    }

    let newTabs = tabs

    if (discountTab) {
      newTabs = [discountTab, ...tabs]
    }

    return {
      menu: menu,
      tabs: newTabs
    }
  }


  async updateMenu(data, update_all, takeaway) {

    if (typeof (takeaway) == 'string') {
      takeaway = (takeaway === 'true')
    }

    try {

      for (let i = 0; i < data.length; i++) {
        const orgData = data[i];

        //console.log(takeaway)
        if (takeaway) {
          console.log("is takeway")
          orgData.orderType = "TAKEAWAY"
          //orgData.deliveryPrice = orgData.price

          const base_price = orgData.base_price
          console.log(base_price)
          if (base_price && base_price != "") {

            orgData.dis_price = orgData.price
            orgData.price = orgData.base_price

            orgData.discount = this.getDiscount(orgData.dis_price, base_price)

            orgData.deliveryPrice = orgData.price
            orgData.deliveryDiscount = orgData.discount

            console.log(orgData)
          }
        }
      }

      //console.log(appState.menu);
      // get current menu
      appState.menu = await this.menuRespository.getMenu()

      if (update_all && update_all != "false") {
        console.log("updateMenu update_all");
        appState.menu = data;
        await this.menuRespository.updateMenuReforce(appState.menu)
        const tt = await this.buildMenuOrdering()
        this.saveMenuOrdering(tt)
        await this.reorganizeMenuTab_custom()
        await this.updateDineInOrdering()
        await this.updateTakeawayOrdering()
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
        await this.menuRespository.saveMenu(appState.menu)

        await centerSocket.update_menu_data()
      }
      await this.reorganizeAndSaveMenuTab_menu()
      await this.updateDineInOrdering()
      await this.updateTakeawayOrdering()
    } catch (error) {
      console.warn("Error: ", error)
    }
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

  async saveDishRating(id, like, rate) {
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

      await this.menuRespository.update(item, id)

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

      return await DB.withTransaction(async (session) => {
        const dish = await this.menuRespository.get(id, session)
        console.log("dish::::", dish, "id:  _:", id, "handle:_;", dish.handle)
        let result;
        //MainDish
        if (!dish) throw new Error("Not found the dish")
        if (dish.category !== '') {
          result = await this.menuRespository.deleteMenuDishByHandle(dish.handle, session)
        } else {
          result = await this.menuRespository.deleteDish(dish.id)
        }

        if (result.acknowledged && result.deletedCount > 0) {
          await this.reorganizeAndSaveMenuTab_menu(session)
          await this.updateDineInOrdering(session)
          await this.updateTakeawayOrdering(session)
          console.log("✅ 删除成功");
          return {
            success: true,
            data: id
          }
        } else if (result.acknowledged && result.deletedCount === 0) {
          console.log("⚠️ 删除请求执行了，但没找到对应数据");
          throw new Error("Unexpected error")
        } else {
          console.error("❌ 删除请求未被确认");
          throw new Error("Unexpected error")
        }
      })
    } catch (error) {
      console.warn("Error: ", error)
      return {
        success: false,
        data: error.message
      }
    }
  }

  softMenuTabVerify(newMenuSorted) {

  }

  hardValidateMenuTabStructure(newMenuSorted) {
    if (!Array.isArray(newMenuSorted)) return false; // 顶层必须是数组

    return newMenuSorted.every(category => {
      // category 必须是对象
      if (!category || typeof category !== 'object') return false;

      // 必须有 name 且是字符串
      if (typeof category.name !== 'string') return false;

      // 必须有 dishes 且是数组
      if (!Array.isArray(category.dishes)) return false;

      // 验证每个 dish
      const dishesValid = category.dishes.every(dish => {
        if (!dish || typeof dish !== 'object') return false;

        // 必须有 id 且是字符串
        if (typeof dish.id !== 'string') return false;

        // 必须有 subDishes 且是数组
        if (!Array.isArray(dish.subDishes)) return false;

        // subDishes 数组每一项必须是字符串
        return dish.subDishes.every(subId => typeof subId === 'string');
      });

      return dishesValid;
    });
  }

  menuTabCheck(newMenuSorted) {
    return this.hardValidateMenuTabStructure(newMenuSorted)
  }

  async updateMenuSorted(newMenuSorted) {
    try {
      return await DB.withTransaction(async (session) => {
        if (this.menuTabCheck(newMenuSorted)) {
          await this.menuOrderingRepository.save(newMenuSorted, session)
          const res = await this.menuOrderingRepository.get(session)
          appState.orderMenuTab = res.map(it => it.name);
          return {
            success: true
          }
        } else {
          throw new Error("Invalid Menu tab structure")
        }
      })

    } catch (error) {
      console.log("error: ", error.message)
      return {
        success: false
      }
    }

  }

  async updateDineOrTakeMenuSorted(newMenuSorted, type) {
    try {
      return await DB.withTransaction(async (session) => {
        if (this.menuTabCheck(newMenuSorted)) {
          const types = ["DINEIN", "TAKEAWAY"]
          if (!types.includes(type)) throw new Error("Invalid type input")
          if (type === "DINEIN") {
            await this.menuOrderingRepository.saveDineIn(newMenuSorted, session)
            const res = await this.menuOrderingRepository.getDineIn(session)
            appState.orderMenuTab = res.map(it => it.name);
            return {
              success: true
            }
          } else {
            await this.menuOrderingRepository.saveTakeaway(newMenuSorted, session)
            const res = await this.menuOrderingRepository.getTakeaway(session)
            return {
              success: true
            }
          }
        } else {
          throw new Error("Invalid Menu tab structure")
        }
      })

    } catch (error) {
      console.log("error: ", error.message)
      return {
        success: false
      }
    }

  }

  async getMenuAndTab() {
    return { success: true, data: { menu: await this.menuRespository.getMenu(), menuTab: await this.menuOrderingRepository.get() } };
  }

  joinSubitems(mainDish, menu) {
    if (mainDish.subname == "Default Title" || !mainDish.subname) return [mainDish]
    const dishes = menu.filter((it) => it.handle === mainDish.handle)
    return dishes
  }

  async updatedMenuById(dish, id) {
    try {
      return await DB.withTransaction(async (session) => {
        if (!id) return null
        await this.menuRespository.update(dish, id, session)
        await this.reorganizeAndSaveMenuTab_menu(session)
        await this.updateDineInOrdering(session)
        await this.updateTakeawayOrdering(session)
      })
    } catch (error) {
      console.log("error: ", error.message)
      return {
        success: false
      }
    }

  }

}

const menuService = new MenuService()



// 导出函数和状态
module.exports = {
  menuService,
  MenuService
};
