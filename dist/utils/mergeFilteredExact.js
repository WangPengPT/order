function mergeTabs(currentTab, customDishes, menuTab) {
  const safeClone = v => JSON.parse(JSON.stringify(v || []));
  let result = safeClone(currentTab);

  function ensureMainInSubDishes(dish) {
    if (!Array.isArray(dish.subDishes)) dish.subDishes = [];

    const otherSubs = dish.subDishes.filter(id => id !== dish.id);
    if (otherSubs.length === 0) return dish; // 没有子菜，不添加主菜id

    dish.subDishes = [dish.id, ...otherSubs];
    return dish;
  }

  // === 情况 1：currentTab 不存在 ===
  if (!currentTab || currentTab.length === 0) {
    return [
      ...(menuTab || []).map(c => ({
        name: c.name,
        dishes: (c.dishes || []).map(d => ensureMainInSubDishes(safeClone(d)))
      })),
      ...(customDishes || []).map(name => ({ name, dishes: [] }))
    ];
  }

  // === 情况 2：customDishes 不存在 ===
  if (!customDishes || customDishes.length === 0) {
    const merged = [];

    for (const currentCategory of result) {
      const menuCategory = (menuTab || []).find(m => m.name === currentCategory.name);
      if (!menuCategory) continue;

      currentCategory.dishes = (currentCategory.dishes || []).filter(d =>
        (menuCategory.dishes || []).some(md => md.id === d.id)
      );

      for (const menuDish of menuCategory.dishes || []) {
        let localDish = currentCategory.dishes.find(d => d.id === menuDish.id);
        if (!localDish) {
          currentCategory.dishes.push(ensureMainInSubDishes(safeClone(menuDish)));
        } else {
          localDish.subDishes = (localDish.subDishes || []).filter(sd =>
            (menuDish.subDishes || []).includes(sd)
          );
          for (const menuSub of menuDish.subDishes || []) {
            if (!localDish.subDishes.includes(menuSub)) localDish.subDishes.push(menuSub);
          }
          ensureMainInSubDishes(localDish);
        }
      }

      merged.push(currentCategory);
    }

    for (const menuCategory of menuTab || []) {
      if (!merged.find(c => c.name === menuCategory.name)) {
        merged.push({
          name: menuCategory.name,
          dishes: (menuCategory.dishes || []).map(d => ensureMainInSubDishes(safeClone(d)))
        });
      }
    }

    return merged;
  }

  // === 情况 3：menuTab 不存在 ===
  if (!menuTab || menuTab.length === 0) {
    return (customDishes || []).map(name => ({ name, dishes: [] }));
  }

  // === 情况 4：都有 ===
  const merged = [];
  const customSet = new Set(customDishes || []);
  const menuMap = new Map((menuTab || []).map(c => [c.name, c]));

  // 遍历 currentTab（保持顺序）
  for (const currentCategory of result) {
    const menuCategory = menuMap.get(currentCategory.name);

    if (!menuCategory) {
      // 当前分类在 menuTab 中不存在：如果不是 customDishes → 清理（不保留）
      if (customSet.has(currentCategory.name)) {
        merged.push(currentCategory);
      }
      continue; // 非 custom 的旧分类清除
    }

    // 分类存在于 menuTab：合并菜品
    currentCategory.dishes = (currentCategory.dishes || []).filter(d =>
      (menuCategory.dishes || []).some(md => md.id === d.id)
    );

    for (const menuDish of menuCategory.dishes || []) {
      let localDish = currentCategory.dishes.find(d => d.id === menuDish.id);
      if (!localDish) {
        currentCategory.dishes.push(ensureMainInSubDishes(safeClone(menuDish)));
      } else {
        localDish.subDishes = (localDish.subDishes || []).filter(sd =>
          (menuDish.subDishes || []).includes(sd)
        );
        for (const menuSub of menuDish.subDishes || []) {
          if (!localDish.subDishes.includes(menuSub)) localDish.subDishes.push(menuSub);
        }
        ensureMainInSubDishes(localDish);
      }
    }

    merged.push(currentCategory);
  }

  // menuTab 有而 currentTab 没有的分类 → 追加
  for (const menuCategory of menuTab) {
    if (!merged.find(c => c.name === menuCategory.name)) {
      merged.push({
        name: menuCategory.name,
        dishes: (menuCategory.dishes || []).map(d => ensureMainInSubDishes(safeClone(d)))
      });
    }
  }

  // customDishes 中还不存在的分类 → 追加空分类
  for (const customName of customDishes || []) {
    if (!merged.find(c => c.name === customName)) {
      merged.push({ name: customName, dishes: [] });
    }
  }

  return merged;
}

module.exports = { mergeTabs };
