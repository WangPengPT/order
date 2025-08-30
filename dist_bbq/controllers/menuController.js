const {menuService} = require('../services/menuService');

function loadMenu() {
  menuService.loadMenu();
};

function getMenu() {
  return menuService.getMenu();
};

module.exports = {
  loadMenu,
  getMenu,
};
