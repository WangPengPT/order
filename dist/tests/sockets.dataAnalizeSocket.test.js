jest.mock('../services/dataAnalizeService', () => ({
  DataAnalizeService: function(){
    return {
      getDishesQuantityByDate: jest.fn(async () => ({ success: true, data: [] })),
      getMonthRate: jest.fn(async () => ({ success: true, data: [] })),
    }
  }
}));

const { DataAnalizeSocket } = require('../socket/dataAnalizeSocket');

/**
 * 用例目的（中文说明）：
 * - 覆盖 DataAnalizeSocket：销量排行与评价排行
 */
describe('socket/DataAnalizeSocket', () => {
  const io = { emit: jest.fn() };
  const s = new DataAnalizeSocket(io);

  test('getTopDishes 回调 200', async () => {
    const cb = jest.fn();
    await s.getTopDishes({ startDate: '2025-01-01', endDate: '2025-01-31' }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
  });

  test('getTopDishesRante 回调 200', async () => {
    const cb = jest.fn();
    await s.getTopDishesRante({ startDate: '2025-01-01', endDate: '2025-01-31' }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
  });

  test('getTopDishes 与 getTopDishesRante 失败返回 400', async () => {
    s.dataAnalizeService.getDishesQuantityByDate.mockResolvedValueOnce({ success: false, data: 'e' });
    const cb1 = jest.fn();
    await s.getTopDishes({ startDate: '2025-01-01', endDate: '2025-01-31' }, cb1);
    expect(cb1).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));

    s.dataAnalizeService.getMonthRate.mockResolvedValueOnce({ success: false, data: 'e' });
    const cb2 = jest.fn();
    await s.getTopDishesRante({ startDate: '2025-01-01', endDate: '2025-01-31' }, cb2);
    expect(cb2).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });
});
