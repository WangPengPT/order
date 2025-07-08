const db = require('../filedb');
const { appState } = require('../state.js');

// 载入菜单数据
function loadMenu() {
  try {
    const menu = db.loadData('menu', []);

    const category = {};
    for (let i = 0; i < menu.length; i++) {
      const value = menu[i];
      if (value.category && (value.category != "") && (!category[value.handle]))
      {
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
    appState.dishCategory = dishCategory;


    const tags = {};
    for (let i = 0; i < menu.length; i++) {
      const value = menu[i];
      if (value.tags && (value.tags != "") && (!tags[value.handle]))
      {
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


    appState.orderMenuTab = db.loadData('orderMenuTab', []);

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

    appState.orderMenuTab = orderTabs;

  } catch (error) {
    console.warn("Error: ", error)
  }

}

function getDishCategory(id)
{
  if (!id) return  "Caixa Aleatória";

  if (id == 2) return "My BOX";
  if (id == 1) return "Pato assado";

  let tag = appState.dishTags[id];
  if (tag && tag != "") return tag;

  return appState.dishCategory[id];
}

// 获取菜单
function getMenu() {
  return appState.menu;
}

function updateMenu(data, update_all)
{
  console.log("updateMenu update_all:",update_all);

  try {
    //console.log(appState.menu);

    if (update_all && update_all != "false") {
      console.log("updateMenu update_all");
      appState.menu = data;
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
            oldData.name =  orgData.name;
            oldData.subname =  orgData.subname;
            oldData.note =  orgData.note;
            oldData.category =  orgData.category;
            oldData.image =  orgData.image;
            oldData.price =  orgData.price;

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

    db.saveData('menu', appState.menu);

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

    saveOrderMenuTab(orderTabs);
  } catch (error) {
    console.warn("Error: ", error)
  }
}

function getOrderMenuTab() {
  return appState.orderMenuTab;
}

function saveOrderMenuTab(data) {
  try {
    appState.orderMenuTab = data;
    db.saveData('orderMenuTab', data);
  } catch (error) {
    console.warn("Error: ", error)
  }

}


function findDish(id)
{
  var menu = appState.menu;
  for (let i = 0; i < menu.length; i++) {
    const dish = menu[i];
    if (dish.id == id) return dish;
  }

  return undefined;
}

// 导出函数和状态
module.exports = {
  loadMenu,
  getMenu,
  updateMenu,
  getOrderMenuTab,
  saveOrderMenuTab,
  findDish,
  getDishCategory,
};
