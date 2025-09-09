const {menuService} = require('../services/menuService');

async function loadMenu() {
  await menuService.loadMenu();
};

function getMenu() {
  return menuService.getMenu();
};

module.exports = {
  loadMenu,
  getMenu,
};
