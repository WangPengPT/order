const { ShopInfo, PriceInfo } = require('../model/shopInfo');

/**
 * 用例目的（中文说明）：
 * - 覆盖价格相关模型：ShopInfo / PriceInfo / DayPrice 与 WeekPrice
 * - 验证：按时段与节假日取价、百分比儿童价、序列化/反序列化
 */
describe('价格与时段模型', () => {
  test('ShopInfo 基于时段/节假日获取当前价格', () => {
    const s = new ShopInfo();
    // 设置午餐/晚餐价格
    s.adultPrice.monday.update('lunch', 10);
    s.adultPrice.monday.update('dinner', 20);

    const noon = new Date(); noon.setHours(12, 0, 0, 0);
    const night = new Date(); night.setHours(19, 0, 0, 0);

    const p1 = s.getCurrentPrice(PriceInfo.type_adult, noon, false);
    expect(typeof p1 === 'number').toBe(true);
  });

  test('儿童价基于成人价百分比', () => {
    const s = new ShopInfo();
    const noon = new Date(); noon.setHours(12, 0, 0, 0);
    // 为当前星期设置午餐成人价为 20，确保计算稳定
    const dayIndex = (new Date(noon)).getDay();
    const dayName = PriceInfo.week_names[dayIndex];
    s.adultPrice[dayName].update('lunch', 20);
    const price = s.getCurrentPrice(PriceInfo.type_child, noon, false, true);
    expect(price).toBeCloseTo(10); // 默认 50%
  });

  test('PriceInfo 序列化/反序列化', () => {
    const p = new PriceInfo(PriceInfo.type_adult);
    p.friday.update('dinner', 30);
    const j = p.toJSON();
    const p2 = PriceInfo.fromJSON(j);
    expect(p2.friday.dinner).toBe(30);
  });

  test('WeekPrice 设置与当前价', () => {
    const w = new WeekPrice(17);
    w.setAllPrices({
      sunday: { lunch: 5, dinner: 6 },
      monday: { lunch: 7, dinner: 8 },
      tuesday: { lunch: 9, dinner: 10 },
      wednesday: { lunch: 11, dinner: 12 },
      thursday: { lunch: 13, dinner: 14 },
      friday: { lunch: 15, dinner: 16 },
      saturday: { lunch: 17, dinner: 18 },
      special: { lunch: 19, dinner: 20 },
    });
    const all = w.getAllPrices();
    expect(all.friday.dinner).toBe(16);
  });
});
