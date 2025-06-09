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
  findDish
};
