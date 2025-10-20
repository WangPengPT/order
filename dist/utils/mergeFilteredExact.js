function mergeTabs(currentTab, customDishes, menuTab) {
    const safeClone = v => JSON.parse(JSON.stringify(v || []));
    let result = safeClone(currentTab);

    function ensureMainInSubDishes(dish, menuDish) {
        if (!Array.isArray(dish.subDishes)) dish.subDishes = [];

        // 融合 menu 的子菜，保持 current 子菜顺序
        if (menuDish && Array.isArray(menuDish.subDishes)) {
            for (const subId of menuDish.subDishes) {
                if (!dish.subDishes.includes(subId)) {
                    dish.subDishes.push(subId); // 补充 menu 的新子菜
                }
            }
        }

        // 确保主菜 id 在 subDishes 中
        if (!dish.subDishes.includes(dish.id)) {
            dish.subDishes.push(dish.id);
        }

        // 清理：如果 subDishes 仅包含主菜自己 → 清空
        if (dish.subDishes.length === 1 && dish.subDishes[0] === dish.id) {
            dish.subDishes = [];
        }

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

            // 保留 current 菜，只保留 menu 中存在的菜
            currentCategory.dishes = (currentCategory.dishes || []).filter(d =>
                (menuCategory.dishes || []).some(md => md.id === d.id)
            );

            for (const menuDish of menuCategory.dishes || []) {
                let localDish = currentCategory.dishes.find(d => d.id === menuDish.id);
                if (!localDish) {
                    // 当前没有 → 直接新增整个菜单菜
                    currentCategory.dishes.push(safeClone(menuDish));
                } else {
                    ensureMainInSubDishes(localDish, menuDish); // 确保主菜 id 存在
                }
            }

            merged.push(currentCategory);
        }

        // menuTab 有而 currentTab 没有的分类 → 追加
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
            if (customSet.has(currentCategory.name)) {
                merged.push(currentCategory);
            }
            continue;
        }

        currentCategory.dishes = (currentCategory.dishes || []).filter(d =>
            (menuCategory.dishes || []).some(md => md.id === d.id)
        );

        for (const menuDish of menuCategory.dishes || []) {
            let localDish = currentCategory.dishes.find(d => d.id === menuDish.id);
            if (!localDish) {
                // 当前没有 → 直接新增整个菜单菜
                currentCategory.dishes.push(safeClone(menuDish));
            } else {
                ensureMainInSubDishes(localDish, menuDish); // 确保主菜 id 存在
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
