const { mergeTabs } = require('../utils/mergeFilteredExact');

/**
 * 用例目的（中文说明）：
 * - 覆盖 mergeTabs：全空/仅 menu/仅 custom/全部存在；确保主菜 id 在 subDishes 中且仅自身时清空
 */
describe('utils/mergeFilteredExact.mergeTabs', () => {
  const menu = [
    { name: 'A', dishes: [{ id: 'a', subDishes: [] }, { id: 'b', subDishes: ['b','a'] }] },
  ];

  test('current 为空：合并 menu 与 custom', () => {
    const res = mergeTabs([], ['X'], menu);
    expect(res.find(c => c.name === 'A')).toBeTruthy();
    expect(res.find(c => c.name === 'X')).toBeTruthy();
  });

  test('仅 custom：无 menu 时返回空分类', () => {
    const res = mergeTabs([], ['X'], []);
    expect(res).toEqual([{ name: 'X', dishes: [] }]);
  });

  test('仅 menu：保持菜并确保 subDishes 包含主菜或清空', () => {
    const res = mergeTabs([], [], menu);
    const adish = res.find(c => c.name === 'A').dishes.find(d => d.id === 'a');
    const bdish = res.find(c => c.name === 'A').dishes.find(d => d.id === 'b');
    expect(Array.isArray(adish.subDishes)).toBe(true);
    expect(bdish.subDishes.includes('b')).toBe(true);
  });

  test('三者都有：过滤不存在菜，追加缺失分类', () => {
    const current = [{ name: 'A', dishes: [{ id: 'a', subDishes: [] }] }];
    const res = mergeTabs(current, ['C'], menu);
    expect(res.find(c => c.name === 'C')).toBeTruthy();
  });
});

