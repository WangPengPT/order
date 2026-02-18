const { MenuService } = require('../services/menuService');

/**
 * 用例目的（中文说明）：
 * - 覆盖菜单 Tab 结构校验（menuTabCheck / hardValidateMenuTabStructure）
 * - 验证：合法结构返回 true；常见非法结构返回 false
 */
describe('MenuService.menuTabCheck / hardValidateMenuTabStructure', () => {
  const service = new MenuService();

  test('合法结构应返回 true', async () => {
    const valid = [
      {
        name: 'CatA',
        dishes: [
          { id: 'm1', subDishes: ['s1', 's2'] },
          { id: 'm2', subDishes: [] },
        ],
      },
      {
        name: 'CatB',
        dishes: [{ id: 'x', subDishes: [] }],
      },
    ];
    expect(service.menuTabCheck(valid)).toBe(true);
  });

  test('顶层不是数组，应返回 false', async () => {
    expect(service.menuTabCheck({})).toBe(false);
  });

  test('缺少 name 或 dishes，应返回 false', async () => {
    const invalid = [{ dishes: [] }, { name: 'NoDishes' }];
    invalid.forEach((it) => expect(service.menuTabCheck([it])).toBe(false));
  });

  test('dishes 不是数组，应返回 false', async () => {
    const invalid = [{ name: 'Cat', dishes: {} }];
    expect(service.menuTabCheck(invalid)).toBe(false);
  });

  test('dish 项缺少 id 或 subDishes，应返回 false', async () => {
    const cases = [
      [{ name: 'Cat', dishes: [{ subDishes: [] }] }],
      [{ name: 'Cat', dishes: [{ id: 'x' }] }],
    ];
    cases.forEach((it) => expect(service.menuTabCheck(it)).toBe(false));
  });

  test('subDishes 不是字符串数组，应返回 false', async () => {
    const invalid = [{ name: 'Cat', dishes: [{ id: 'x', subDishes: [1, 2] }] }];
    expect(service.menuTabCheck(invalid)).toBe(false);
  });
});

