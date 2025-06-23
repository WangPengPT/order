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

    //console.log("dis tags: ", dishTags);
    //console.log("dis category: ",dishCategory);


    appState.orderMenuTab = db.loadData('orderMenuTab', []);
  } catch (error) {
    console.warn("Error: ", error)
  }
  
}

function getDishCategory(id)
{
  if ((!id) || (id == 0)) return  "Caixa Aleatória";

  //console.log(appState.dishTags[id], id);
  //console.log(appState.dishCategory[id], id);

  if (appState.dishTags[id]) return appState.dishTags[id];
  return appState.dishCategory[id];
}

// 获取菜单
function getMenu() {
  return appState.menu;
}

function saveMenu(data)
{
  try {
    appState.menu = data;
  db.saveData('menu', data);

  const types = [];

  for (let i = 0; i < data.length; i++) {
    const value = data[i];
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
  saveMenu,
  getOrderMenuTab,
  saveOrderMenuTab,
  findDish,
  getDishCategory,
};
