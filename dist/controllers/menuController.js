const menuService = require('../services/menuService');

exports.loadMenu = () => {
  menuService.loadMenu();
};

exports.getMenu = () => {
  return menuService.getMenu();
};