
function ensureMainInSubDishes(dish) {
  // 保证 subDishes 是数组
  if (!Array.isArray(dish.subDishes)) {
    dish.subDishes = [];
  }
  // 如果有真正子项，并且 subDishes 没有主菜 id，则补上
  if (dish.subDishes.length > 0 && !dish.subDishes.includes(dish.id)) {
    dish.subDishes.unshift(dish.id);
  }

  return dish;
}

function syncTabsWhitoutCustom(currentTab, menuTab) {
  const result = JSON.parse(JSON.stringify(currentTab || []));

  for (const menuCategory of menuTab) {
    let localCategory = result.find(c => c.name === menuCategory.name);

    if (!localCategory) {
      // 当前没有该分类，直接添加整个分类
      result.push({
        name: menuCategory.name,
        dishes: menuCategory.dishes.map(d =>
          ensureMainInSubDishes({
            ...d,
            subDishes: Array.isArray(d.subDishes)
              ? JSON.parse(JSON.stringify(d.subDishes))
              : []
          })
        )
      });
      continue;
    }

    // 当前已有该分类 → 对比菜品
    // 1️⃣ 移除 local 中不存在于 menu 的菜
    localCategory.dishes = localCategory.dishes.filter(d =>
      menuCategory.dishes.some(md => md.id === d.id)
    );

    // 2️⃣ 遍历 menu 菜，补齐缺的或更新 subDishes
    for (const menuDish of menuCategory.dishes) {
      let localDish = localCategory.dishes.find(d => d.id === menuDish.id);

      if (!localDish) {
        // 新菜，直接添加
        localCategory.dishes.push(
          ensureMainInSubDishes({
            ...menuDish,
            subDishes: Array.isArray(menuDish.subDishes)
              ? JSON.parse(JSON.stringify(menuDish.subDishes))
              : []
          })
        );
      } else {
        // 已存在，更新 subDishes
        localDish.subDishes = (localDish.subDishes || []).filter(sd =>
          (menuDish.subDishes || []).includes(sd)
        );

        // 补齐缺失 subDish
        for (const menuSub of menuDish.subDishes || []) {
          if (!localDish.subDishes.includes(menuSub)) {
            localDish.subDishes.push(menuSub);
          }
        }

        ensureMainInSubDishes(localDish);
      }
    }
  }

  // 3️⃣ 移除 local 中不存在于 menu 的分类
  const finalResult = result.filter(r =>
    menuTab.some(m => m.name === r.name)
  );

  return finalResult;
}

function syncLocalWithMenuAndCustom(local, menuDishes, customDishes) {
  let result = JSON.parse(JSON.stringify(local));

  // 移除多余分类
  result = result.filter(category =>
    menuDishes.some(mc => mc.name === category.name) ||
    customDishes.includes(category.name)
  );

  for (const menuCategory of menuDishes) {
    let localCategory = result.find(c => c.name === menuCategory.name);

    if (!localCategory) {
      // local 缺少分类 → 添加整个分类
      result.push({
        name: menuCategory.name,
        dishes: menuCategory.dishes.map(d =>
          ensureMainInSubDishes({
            ...d,
            subDishes: Array.isArray(d.subDishes) ? JSON.parse(JSON.stringify(d.subDishes)) : []
          })
        )
      });
      continue;
    }

    if (menuCategory.name === "qwe") {
      console.log("aasdaddsad", menuCategory.dishes)
    }

    if (customDishes.includes(menuCategory.name)) continue;

    // 移除 local 中多余主菜
    localCategory.dishes = localCategory.dishes.filter(d =>
      menuCategory.dishes.some(md => md.id === d.id)
    );

    // 补齐缺失主菜
    for (const menuDish of menuCategory.dishes) {
      let localDish = localCategory.dishes.find(d => d.id === menuDish.id);

      if (!localDish) {
        // 新主菜，无论 subDishes 是否为空都添加
        localCategory.dishes.push(
          ensureMainInSubDishes({
            ...menuDish,
            subDishes: Array.isArray(menuDish.subDishes) ? JSON.parse(JSON.stringify(menuDish.subDishes)) : []
          })
        );
      } else {
        // 删除多余 subDish
        localDish.subDishes = (localDish.subDishes || []).filter(sd =>
          (menuDish.subDishes || []).includes(sd)
        );

        // 补齐缺失 subDish
        for (const menuSub of menuDish.subDishes || []) {
          if (!localDish.subDishes.includes(menuSub)) {
            localDish.subDishes.push(menuSub);
          }
        }

        ensureMainInSubDishes(localDish);
      }
    }
  }

  // 补齐 customDishes
  for (const customName of customDishes) {
    if (!result.find(c => c.name === customName)) {
      result.push({ name: customName, dishes: [] });
    }
  }

  return result;
}

function syncCustomDishes(currentTab, customDishes, menuTab) {
  // 深拷贝，避免修改原数组
  let result = JSON.parse(JSON.stringify(currentTab));

  // ✅ 如果 currentTab 为空，则用 menuTab 加上 customDishes
  if (!result || result.length === 0) {
    const merged = [
      ...menuTab.map(c => ({ name: c.name, dishes: c.dishes || [] })),
      ...customDishes.map(name => ({ name, dishes: [] }))
    ];
    return merged;
  }

  // 移除多余 customDishes
  result = result.filter(category =>
    menuTab.some(c => c.name === category.name) ||
    customDishes.includes(category.name)
  );

  // 补齐缺失 customDishes
  for (const customName of customDishes) {
    let category = result.find(c => c.name === customName);
    if (!category) {
      result.push({ name: customName, dishes: [] });
    } else {
      category.dishes = category.dishes.map(d =>
        ensureMainInSubDishes({
          id: d.id,
          subDishes: Array.isArray(d.subDishes) ? d.subDishes : []
        })
      );
    }
  }

  return result;
}


module.exports = {
  syncLocalWithMenuAndCustom,
  syncCustomDishes,
  syncTabsWhitoutCustom
};
