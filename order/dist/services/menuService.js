const db = require('../filedb');
const { appState } = require('../state.js');

// 载入菜单数据
function loadMenu() {
  appState.menu = db.loadData('menu', []);
  appState.orderMenuTab = db.loadData('orderMenuTab', []);
}

// 获取菜单
function getMenu() {
  return appState.menu;
}

function saveMenu(data)
{
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
}

function getOrderMenuTab() {
  return appState.orderMenuTab;
}

function saveOrderMenuTab(data) {
  appState.orderMenuTab = data;
  db.saveData('orderMenuTab', data);
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
  findDish
};
