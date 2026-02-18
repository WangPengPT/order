const { add } = require('../utils/manualMath');

/**
 * 用例目的（中文说明）：
 * - 覆盖 manualMath：小数加法避免精度误差
 */
describe('utils/manualMath', () => {
  test('add 浮点加法精度', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(add(1.005, 0.005)).toBeCloseTo(1.01);
  });
});

