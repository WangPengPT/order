/**
 * 用例目的（中文说明）：
 * - 验证 updateTemplateSellType 成功后，会调用菜单重建逻辑（ALL / DINEIN / TAKEAWAY）
 * - 通过注入假的仓库与服务，避免真实数据库依赖，保证单测稳定
 */
const path = require('path');
const DB = require('../db.js');

// 将事务包装替换为直接执行（不依赖 Mongo 会话）
DB.withTransaction = async (fn) => await fn(null);

const { CustomDishService } = require('../services/customDishService');

describe('CustomDishService.updateTemplateSellType', () => {
  test('更新出售类型后触发菜单 tabs 重建（ALL/DINEIN/TAKEAWAY）', async () => {
    // 假仓库：以可变状态模拟两次 get 前后值不同
    const state = { id: 123, sellType: 'DINEIN' };
    const fakeRepo = {
      get: jest.fn(async (id) => ({
        id,
        sellType: state.sellType,
        toJSON: () => ({ id, sellType: state.sellType }),
      })),
      update: jest.fn(async (template) => {
        // 仿真：仓库更新后，后续 get 能读到最新的 sellType
        state.sellType = template.sellType;
      }),
    };

    // 假菜单服务：三种重建方法
    const fakeMenuService = {
      reorganizeAndSaveMenuTab_menu: jest.fn(async () => []),
      reorganizeDineMenuTab_custom: jest.fn(async () => []),
      reorganizeTakeMenuTab_custom: jest.fn(async () => []),
    };

    const service = new CustomDishService(fakeRepo, fakeMenuService);
    const res = await service.updateTemplateSellType(123, 'TAKEAWAY');
    expect(res.success).toBe(true);

    // 断言：仓库被调用
    expect(fakeRepo.get).toHaveBeenCalledTimes(2); // 读取两次（更新前 + 校验后）
    expect(fakeRepo.update).toHaveBeenCalledTimes(1);

    // 断言：三种重建都被调用
    expect(fakeMenuService.reorganizeAndSaveMenuTab_menu).toHaveBeenCalledTimes(1);
    expect(fakeMenuService.reorganizeDineMenuTab_custom).toHaveBeenCalledTimes(1);
    expect(fakeMenuService.reorganizeTakeMenuTab_custom).toHaveBeenCalledTimes(1);
  });
});
