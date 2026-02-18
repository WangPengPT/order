const tp = require('../utils/timePrice');

/**
 * 用例目的（中文说明）：
 * - 覆盖 timePrice：按时段/周末与节假日选择价格
 */
describe('utils/timePrice', () => {
  const RealDate = Date;
  function mockDate(day, hour) {
    // day: 0(Sun)..6(Sat)
    global.Date = class extends RealDate {
      constructor(...args) { 
        if (args.length) return new RealDate(...args);
        const d = new RealDate('2025-01-0' + (day + 1) + `T${String(hour).padStart(2,'0')}:00:00Z`);
        return d;
      }
      static now() { return new RealDate('2025-01-0' + (day + 1) + `T${String(hour).padStart(2,'0')}:00:00Z`).getTime(); }
    };
  }
  afterEach(() => { global.Date = RealDate; });

  test('节假日优先使用 dinner 价', () => {
    const res = tp.getCurentPeoplePrice(10, 20, true);
    expect(res.adult).toBe(20);
    expect(res.children).toBe(10);
  });

  test('工作日午餐使用 lunch 价', () => {
    mockDate(2, 12); // Tue 12:00
    const res = tp.getCurentPeoplePrice(10, 20, false);
    expect(res.adult).toBe(10);
  });

  test('晚餐使用 dinner 价', () => {
    mockDate(3, 19); // Wed 19:00
    const res = tp.getCurentPeoplePrice(10, 20, false);
    expect(res.adult).toBe(20);
  });
});

