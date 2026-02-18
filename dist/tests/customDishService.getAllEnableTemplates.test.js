/**
 * 用例目的（中文说明）：
 * - 验证 getAllEnableTemplates 会在“午市菜单（Menu Almoço）存在性与 ordering 不一致”时触发堂食 tabs 重建
 * - 场景1：结果里包含午市模板，但 ordering 没有相关 Tab => 需要调用 reorganizeDineMenuTab_custom
 * - 场景2：结果里没有午市模板，但 ordering 有 Tab => 也需要调用重建
 */
const DB = require('../db.js');
DB.withTransaction = async (fn) => await fn(null);

const { CustomDishService } = require('../services/customDishService');
const { ids } = require('../utils/customDishTemplateData.js');

function makeTemplate(id) {
  return { id, enable: true, types: [], toJSON: () => ({ id, enable: true, types: [] }) };
}

describe('CustomDishService.getAllEnableTemplates - 午市菜单一致性', () => {
  test('有午市模板，但 ordering 没有 Tab => 触发重建', async () => {
    const fakeRepo = {
      getDineEnableTemplates: jest.fn(async () => [makeTemplate(ids.xiaoxiong_menu_lunch)]),
      getTakeEnableTemplates: jest.fn(async () => []),
      getAllEnableTemplates: jest.fn(async () => [makeTemplate(ids.xiaoxiong_menu_lunch)]),
    };
    const fakeOrderingRepo = {
      getDineIn: jest.fn(async () => [{ name: 'CatA' }]), // 没有 "Menu Almoço"
    };
    const fakeMenuService = {
      reorganizeDineMenuTab_custom: jest.fn(async () => []),
    };

    const service = new CustomDishService(fakeRepo, fakeMenuService, fakeOrderingRepo);
    const ret = await service.getAllEnableTemplates('DINEIN');
    expect(ret.success).toBe(true);
    expect(fakeMenuService.reorganizeDineMenuTab_custom).toHaveBeenCalledTimes(1);
  });

  test('没有午市模板，但 ordering 有午市 Tab => 触发重建', async () => {
    const fakeRepo = {
      getDineEnableTemplates: jest.fn(async () => []), // 没有午市模板
      getTakeEnableTemplates: jest.fn(async () => []),
      getAllEnableTemplates: jest.fn(async () => []),
    };
    const fakeOrderingRepo = {
      getDineIn: jest.fn(async () => [{ name: 'Menu Almoço' }]), // 已有午市 Tab
    };
    const fakeMenuService = {
      reorganizeDineMenuTab_custom: jest.fn(async () => []),
    };

    const service = new CustomDishService(fakeRepo, fakeMenuService, fakeOrderingRepo);
    const ret = await service.getAllEnableTemplates('DINEIN');
    expect(ret.success).toBe(true);
    expect(fakeMenuService.reorganizeDineMenuTab_custom).toHaveBeenCalledTimes(1);
  });
});

