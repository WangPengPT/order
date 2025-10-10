function mergeTabs(currentTab, customDishes, menuTab) {
  const safeClone = v => JSON.parse(JSON.stringify(v || []));
  let result = safeClone(currentTab);

  // 🧩 helper: 保证主菜在自己的子项中出现
function ensureMainInSubDishes(dish) {
  if (!Array.isArray(dish.subDishes)) dish.subDishes = [];

  // 过滤掉重复的主菜 id，只保留其他子菜
  const otherSubs = dish.subDishes.filter(id => id !== dish.id);

  if (otherSubs.length === 0) {
    // 如果没有其他子菜，subDishes 保持原样（空或只有主菜本身）
    return dish;
  }

  // 如果有其他子菜，先添加主菜 id，再添加其他子菜
  dish.subDishes = [dish.id, ...otherSubs];

  return dish;
}


  // === 情况 1：currentTab 不存在 → customDishes + menuTab ===
  if (!currentTab || currentTab.length === 0) {
    return [
      ...(menuTab || []).map(c => ({
        name: c.name,
        dishes: (c.dishes || []).map(d => ensureMainInSubDishes(safeClone(d)))
      })),
      ...(customDishes || []).map(name => ({ name, dishes: [] }))
    ];
  }

  // === 情况 2：customDishes 不存在 → currentTab + menuTab ===
  if (!customDishes || customDishes.length === 0) {
    const merged = [];

    for (const currentCategory of result) {
      const menuCategory = (menuTab || []).find(m => m.name === currentCategory.name);
      if (!menuCategory) continue;

      // 保留 currentTab 的菜品排序，同时同步 menuTab 菜品
      currentCategory.dishes = currentCategory.dishes.filter(d =>
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

    // menuTab 有 currentTab 没有的分类 → 追加
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

  // === 情况 3：menuTab 不存在 → 返回 customDishes ===
  if (!menuTab || menuTab.length === 0) {
    return (customDishes || []).map(name => ({ name, dishes: [] }));
  }

  // === 情况 4：都有 → currentTab + menuTab + customDishes ===
  const merged = [];

  // 以 currentTab 顺序为主
  for (const currentCategory of result) {
    const menuCategory = menuTab.find(m => m.name === currentCategory.name);

    if (!menuCategory) {
      // menuTab 没有 → 保留 currentCategory
      merged.push(currentCategory);
      continue;
    }

    // 保留 currentTab 的菜品，同时同步 menuTab 菜品
    currentCategory.dishes = currentCategory.dishes.filter(d =>
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

  // menuTab 有 currentTab 没有的分类 → 追加
  for (const menuCategory of menuTab) {
    if (!merged.find(c => c.name === menuCategory.name)) {
      merged.push({
        name: menuCategory.name,
        dishes: (menuCategory.dishes || []).map(d => ensureMainInSubDishes(safeClone(d)))
      });
    }
  }

  // 最后追加 customDishes
  for (const customName of customDishes || []) {
    if (!merged.find(c => c.name === customName)) {
      merged.push({ name: customName, dishes: [] });
    }
  }

  return merged;
}

module.exports = { mergeTabs };
