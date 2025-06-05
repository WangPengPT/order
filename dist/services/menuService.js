const db = require('../filedb');
const { appState } = require('../state.js');

// 载入菜单数据
function loadMenu() {
  appState.menu = db.loadData('menu', []);
}

// 获取菜单
function getMenu() {
  return appState.menu;
}

// 导出函数和状态
module.exports = {
  loadMenu,
  getMenu,
};
