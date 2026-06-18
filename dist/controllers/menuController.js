const {menuService} = require('../services/menuService');
const {logger} = require('../utils/logger.js');

async function loadMenu() {
  await menuService.loadMenu();
};

function getMenu() {
  return menuService.getMenu();
};

async function getTakeawayMenu(req, res) {
  try {
    const data = await menuService.getTakeawayMenuAndTabs();
    res.json({success: true, data});
  } catch (err) {
    logger.error('获取外卖菜单失败', err);
    res.status(500).json({success: false, msg: err.message});
  }
};

async function getDiscountMenu(req, res) {
  try {
    const data = await menuService.getDiscountMenuItems();
    res.json({success: true, data});
  } catch (err) {
    logger.error('获取折扣菜单失败', err);
    res.status(500).json({success: false, msg: err.message});
  }
};

module.exports = {
  loadMenu,
  getMenu,
  getTakeawayMenu,
  getDiscountMenu,
};
