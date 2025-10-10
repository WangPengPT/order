
function mergeTabs(currentTab, customDishes, menuTab) {
  // 深拷贝防止引用污染
  const safeClone = v => JSON.parse(JSON.stringify(v || []));
  let result = safeClone(currentTab);

  // 🧩 helper: 保证主菜在自己的子项中出现
  function ensureMainInSubDishes(dish) {
    if (!Array.isArray(dish.subDishes)) dish.subDishes = [];
    if (!dish.subDishes.includes(dish.id)) dish.subDishes.unshift(dish.id);
    return dish;
  }

  // === 情况 1：currentTab 不存在 → customDishes + menuTab ===
  if (!currentTab || currentTab.length === 0) {
    const merged = [
      // menuTab 部分
      ...(menuTab || []).map(c => ({
        name: c.name,
        dishes: (c.dishes || []).map(d =>
          ensureMainInSubDishes(safeClone(d))
        )
      })),
      // customDishes 部分（追加在最后）
      ...(customDishes || []).map(name => ({
        name,
        dishes: []
      }))
    ];
    return merged;
  }

  // === 情况 2：customDishes 不存在 → currentTab + menuTab ===
  if (!customDishes || customDishes.length === 0) {
    const res = [];

    // 先同步 menuTab
    for (const menuCategory of menuTab || []) {
      const existing = result.find(c => c.name === menuCategory.name);

      if (!existing) {
        // currentTab 没有 → 添加
        res.push({
          name: menuCategory.name,
          dishes: (menuCategory.dishes || []).map(d =>
            ensureMainInSubDishes(safeClone(d))
          )
        });
      } else {
        // currentTab 有 → 保留 currentTab 的内容，但同步子项
        existing.dishes = existing.dishes.filter(d =>
          (menuCategory.dishes || []).some(md => md.id === d.id)
        );

        for (const menuDish of menuCategory.dishes || []) {
          let localDish = existing.dishes.find(d => d.id === menuDish.id);
          if (!localDish) {
            existing.dishes.push(
              ensureMainInSubDishes(safeClone(menuDish))
            );
          } else {
            // 同步子项
            localDish.subDishes = (localDish.subDishes || []).filter(sd =>
              (menuDish.subDishes || []).includes(sd)
            );
            for (const menuSub of menuDish.subDishes || []) {
              if (!localDish.subDishes.includes(menuSub)) {
                localDish.subDishes.push(menuSub);
              }
            }
            ensureMainInSubDishes(localDish);
          }
        }

        res.push(existing);
      }
    }

    // 移除 menuTab 不存在的分类
    const finalRes = res.filter(c =>
      (menuTab || []).some(m => m.name === c.name)
    );

    return finalRes;
  }

  // === 情况 3：menuTab 不存在 → 返回 customDishes ===
  if (!menuTab || menuTab.length === 0) {
    return (customDishes || []).map(name => ({
      name,
      dishes: []
    }));
  }

  // === 情况 4：都有 → currentTab + menuTab + customDishes ===
  const merged = [];

  // 先同步 currentTab 和 menuTab（保留 currentTab 优先）
  for (const menuCategory of menuTab) {
    const existing = result.find(c => c.name === menuCategory.name);

    if (!existing) {
      // 不存在 → 添加 menuCategory
      merged.push({
        name: menuCategory.name,
        dishes: (menuCategory.dishes || []).map(d =>
          ensureMainInSubDishes(safeClone(d))
        )
      });
    } else {
      // 存在 → 基于 currentTab 更新
      existing.dishes = existing.dishes.filter(d =>
        (menuCategory.dishes || []).some(md => md.id === d.id)
      );

      for (const menuDish of menuCategory.dishes || []) {
        let localDish = existing.dishes.find(d => d.id === menuDish.id);
        if (!localDish) {
          existing.dishes.push(
            ensureMainInSubDishes(safeClone(menuDish))
          );
        } else {
          // 同步 subDishes
          localDish.subDishes = (localDish.subDishes || []).filter(sd =>
            (menuDish.subDishes || []).includes(sd)
          );
          for (const menuSub of menuDish.subDishes || []) {
            if (!localDish.subDishes.includes(menuSub)) {
              localDish.subDishes.push(menuSub);
            }
          }
          ensureMainInSubDishes(localDish);
        }
      }

      merged.push(existing);
    }
  }

  // 移除 menuTab 没有的多余分类
  const filtered = merged.filter(c =>
    menuTab.some(m => m.name === c.name)
  );

  // 最后追加 customDishes 分类（保持最后顺序）
  for (const customName of customDishes) {
    if (!filtered.find(c => c.name === customName)) {
      filtered.push({ name: customName, dishes: [] });
    }
  }

  return filtered;
}



module.exports = {
  mergeTabs
};
