/**
 * 用例目的（中文说明）：
 * - 验证 updateEnbale 只在状态变更时更新，并返回最新模板 JSON
 * - 通过伪造仓库，检查 get/update 调用次数与返回值
 */
const DB = require('../db.js');
DB.withTransaction = async (fn) => await fn(null);

const { CustomDishService } = require('../services/customDishService');

describe('CustomDishService.updateEnbale', () => {
  test('当 enable 状态发生变化时进行更新', async () => {
    const tpl = {
      id: 7,
      enable: false,
      toJSON: () => ({ id: 7, enable: true }),
    };
    const fakeRepo = {
      get: jest.fn(async () => ({ ...tpl })), // 初次读取
      update: jest.fn(async () => {}),
    };
    // 第二次 get（校验）返回 enable: true
    fakeRepo.get.mockImplementationOnce(async () => ({ ...tpl })) // 第一次
      .mockImplementationOnce(async () => ({ ...tpl, enable: true })); // 第二次

    const service = new CustomDishService(fakeRepo, { });
    const res = await service.updateEnbale({ id: 7, enable: true });
    expect(res.success).toBe(true);
    expect(fakeRepo.get).toHaveBeenCalledTimes(2);
    expect(fakeRepo.update).toHaveBeenCalledTimes(1);
    expect(res.data).toEqual({ id: 7, enable: true });
  });

  test('当状态相同不更新', async () => {
    const tpl = {
      id: 8,
      enable: true,
      toJSON: () => ({ id: 8, enable: true }),
    };
    const fakeRepo = {
      get: jest.fn(async () => ({ ...tpl })),
      update: jest.fn(async () => {}),
    };

    const service = new CustomDishService(fakeRepo, {});
    const res = await service.updateEnbale({ id: 8, enable: true });
    expect(res.success).toBe(true);
    expect(fakeRepo.update).toHaveBeenCalledTimes(0); // 没有调用 update
  });
});

