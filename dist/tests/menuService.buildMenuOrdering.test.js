const { MenuService } = require('../services/menuService');

/**
 * 用例目的（中文说明）：
 * - 验证 buildMenuOrdering 能够把“主菜 + 子菜”按分类(category)重组为 tabs 结构
 * - 要点：
 *   1) 同一 handle 下的主菜与子菜会在一个分组里
 *   2) 如果该 handle 存在子菜，subDishes 需要在最后补上主菜自身的 id
 *   3) 过滤掉分类为 "Undefined" 的条目
 */
describe('MenuService.buildMenuOrdering', () => {
  test('按分类聚合 + 子菜包含主菜ID（当存在子菜时）', async () => {
    const service = new MenuService();
    const menu = [
      // CatA: 一个主菜 + 两个子菜（同 handle）
      { id: 'm1', handle: 'h1', category: 'CatA', name: 'Main1' },
      { id: 's1', handle: 'h1', subname: 'Var1' },
      { id: 's2', handle: 'h1', subname: 'Var2' },
      // CatB: 只有主菜
      { id: 'm2', handle: 'h2', category: 'CatB', name: 'Main2' },
      // Undefined: 应当被过滤
      { id: 'm3', handle: 'h3', category: 'Undefined', name: 'IgnoreMe' },
    ];

    const tabs = await service.buildMenuOrdering(null, menu);

    // 为了对比方便，按名称排序
    const byName = (a, b) => a.name.localeCompare(b.name);
    const sorted = [...tabs].sort(byName);

    expect(sorted).toHaveLength(2);
    expect(sorted[0].name).toBe('CatA');
    expect(sorted[1].name).toBe('CatB');

    // CatA 分组
    expect(sorted[0].dishes).toHaveLength(1);
    expect(sorted[0].dishes[0]).toEqual({
      id: 'm1',
      subDishes: ['s1', 's2', 'm1'], // 有子菜时，最后会把主菜ID也追加进去
    });

    // CatB 分组
    expect(sorted[1].dishes).toHaveLength(1);
    expect(sorted[1].dishes[0]).toEqual({
      id: 'm2',
      subDishes: [], // 没有子菜时，不会追加主菜ID
    });
  });
});

