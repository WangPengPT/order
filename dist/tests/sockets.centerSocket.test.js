jest.mock('../db.js', () => ({
  set: jest.fn(async () => {}),
  get: jest.fn(async () => null),
}));

const CenterSocket = require('../socket/centerSocket');
const DB = require('../db.js');

/**
 * 用例目的（中文说明）：
 * - 覆盖 CenterSocket.saveDishRating：正常累加与各类非法参数分支
 */
describe('socket/CenterSocket.saveDishRating', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    CenterSocket.__setMenuDataForTest({
      menu: [{ id: '1', likes: 0, rates: 0 }],
    });
  });

  test('正常累加评分并写入 DB', async () => {
    const res = await CenterSocket.saveDishRating('1', 1, 1);
    expect(res.success).toBe(true);
    expect(res.data.likes).toBe(1);
    expect(res.data.rates).toBe(1);
    expect(DB.set).toHaveBeenCalledWith('TakeawayDishRating', {
      id: '1',
      likes: 1,
      rates: 1,
    });
  });

  test('非法菜品 id 返回失败', async () => {
    const res = await CenterSocket.saveDishRating('x', 1, 1);
    expect(res.success).toBe(false);
  });

  test('非法 like 值返回失败', async () => {
    const res = await CenterSocket.saveDishRating('1', 2, 1);
    expect(res.success).toBe(false);
  });

  test('非法 rate 值返回失败', async () => {
    const res = await CenterSocket.saveDishRating('1', 1, 2);
    expect(res.success).toBe(false);
  });
});

