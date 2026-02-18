const CustomDish = require('../model/customDish');
const CustomDishType = require('../model/customDishType');
const CustomDishTemplate = require('../model/customDishTemplate');
const CustomDishCenter = require('../model/cutomDishCenter');

/**
 * 用例目的（中文说明）：
 * - 覆盖自定义菜相关模型：CustomDish / CustomDishType / CustomDishTemplate / CustomDishCenter
 * - 验证：ID 递增、增删改、序列化/反序列化、点赞计数、SellType 枚举等
 */
describe('自定义菜模型 - CustomDish 系列', () => {
  test('CustomDish 基本序列化/反序列化', () => {
    const d = new CustomDish(1, 'N', '名', 'Name', 'Nome', 12.5, 13.5, 'DINEIN', 0, 0, true);
    const j = d.toJSON();
    expect(j.name_en).toBe('Name');
    expect(j.price).toBe(12.5);
    const d2 = CustomDish.fromJSON(j);
    expect(d2.name_pt).toBe('Nome');
  });

  test('CustomDishType 增加子项与序列化', () => {
    const type = new CustomDishType(1, 'base', '底部', 'Base', 'Base', [], 3, 0, true);
    const id1 = type.addDish(new CustomDish(null, 'A', 'A', 'A', 'A'));
    const id2 = type.addDish(new CustomDish(null, 'B', 'B', 'B', 'B'));
    expect(id2).toBe(id1 + 1);
    const json = type.toJSON();
    expect(Array.isArray(json.dishes)).toBe(true);
    const parsed = CustomDishType.fromJSON(json);
    expect(parsed.dishes.length).toBe(2);
  });

  test('CustomDishTemplate 点赞与 SellType', () => {
    const t = new CustomDishTemplate(10, [], 'Box', 10, 12, 'BoxCat', 0, 0, [], { quantity: true }, true, 0, CustomDishTemplate.SellType.ALL);
    t.likeDish();
    expect(t.like).toBe(1);
    expect(t.rate).toBe(1);
    t.unlikeDish();
    expect(t.rate).toBe(2);
    expect(CustomDishTemplate.SellType.values()).toContain('DINEIN');
    expect(CustomDishTemplate.SellType.values()).toContain('TAKEAWAY');
    expect(CustomDishTemplate.SellType.values()).toContain('DINEIN&TAKEAWAY');
  });

  test('CustomDishTemplate types 增删改', () => {
    const type = new CustomDishType(1, 'base', '底部', 'Base', 'Base', []);
    const t = new CustomDishTemplate(1, [type], 'N', 0, 0, 'Cat');
    expect(t.getType('base')).toBe(type);
    t.removeType('base');
    expect(t.getType('base')).toBeUndefined();
    const t2 = new CustomDishType(2, 'sauce', '酱', 'Sauce', 'Molho', []);
    t.addType(t2);
    expect(t.getType('sauce')).toBeTruthy();
  });

  test('CustomDishTemplate 序列化/反序列化保留结构', () => {
    const type = new CustomDishType(1, 'base', '底部', 'Base', 'Base', [new CustomDish(1, 'A', 'A', 'A', 'A')]);
    const tpl = new CustomDishTemplate(1, [type], 'Box');
    const json = tpl.toJSON();
    const parsed = CustomDishTemplate.fromJSON(json);
    expect(parsed.types[0].dishes[0].name).toBe('A');
  });

  test('CustomDishCenter 模板增删改', () => {
    const center = new CustomDishCenter([]);
    const t1 = new CustomDishTemplate(null, [], 'T1');
    const t2 = new CustomDishTemplate(null, [], 'T2');
    const id1 = center.addTemplate(t1);
    const id2 = center.addTemplate(t2);
    expect(id2).toBe(id1 + 1);
    expect(center.getTemplate(0).name).toBe('T1');
    center.updateTemplate(0, new CustomDishTemplate(99, [], 'TT'));
    expect(center.getTemplate(0).name).toBe('TT');
    center.removeTemplate(1);
    expect(center.templates.length).toBe(1);
    const json = center.toJSON();
    const parsed = CustomDishCenter.fromJSON(json);
    expect(parsed.templates.length).toBe(1);
  });
});

