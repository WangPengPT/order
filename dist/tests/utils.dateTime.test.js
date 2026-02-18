const dt = require('../utils/dateTime');

/**
 * 用例目的（中文说明）：
 * - 覆盖 dateTime：格式化与日期字符串输出
 */
describe('utils/dateTime', () => {
  test('format_portugal_datetime 返回格式化字符串', () => {
    const t = Date.now();
    const s = dt.format_portugal_datetime(t);
    expect(typeof s).toBe('string');
    expect(s.length).toBeGreaterThan(10);
  });

  test('get_portugal_date 返回 YYYY-MM-DD', () => {
    const s = dt.get_portugal_date();
    expect(/^\d{4}-\d{2}-\d{2}$/.test(s)).toBe(true);
  });
});

