const db = require('../filedb');
const CustomDishRepository = require('../repositories/customDishRepository.js');
const {appState} = require('../state.js');
const {mergeTabs} = require('../utils/mergeFilteredExact.js');
const MenuRepository = require('../repositories/menuRepository.js');
const DB = require('../db.js');
const MenuOrderingRepository = require('../repositories/menuOrderingRepository.js');
const centerSocket = require('../socket/centerSocket.js');
const {logger} = require('../utils/logger.js');

/**
 * 菜单服务模块
 * 负责菜单数据的加载、分类管理、排序维护以及自定义菜品与普通菜品的融合逻辑
 */
class MenuService {
    constructor(menuRespository = new MenuRepository(), menuOrderingRepository = new MenuOrderingRepository(), customeDishRepository = new CustomDishRepository()) {
        this.menuRespository = menuRespository
        this.menuOrderingRepository = menuOrderingRepository
        this.customeDishRepository = customeDishRepository
    }

    /**
     * 载入菜单及分类排序数据
     * 初始化分类标签、映射关系，并将数据同步到 appState
     */
    async loadMenu() {
        try {
            let tabs = await this.menuOrderingRepository.get()
            if (!tabs || tabs == null) {
                logger.info("初始化菜品顺序")
                const mm = await this.buildMenuOrdering()
                await this.saveMenuOrdering(mm)
                await this.reorganizeAndSaveMenuTab_menu()
            }

            return await DB.withTransaction(async (session) => {
                const menu = await this.menuRespository.getMenu(session);
                
                // 构建分类和标签映射
                const category = {};
                const tags = {};
                menu.forEach(value => {
                    if (value.category && value.category !== "" && !category[value.handle]) {
                        category[value.handle] = value.category;
                    }
                    if (value.tags && value.tags !== "" && !tags[value.handle]) {
                        tags[value.handle] = value.tags;
                    }
                });

                let dishCategory = {}
                let dishTags = {}
                menu.forEach(value => {
                    if (category[value.handle]) dishCategory[value.id] = category[value.handle];
                    if (tags[value.handle]) dishTags[value.id] = tags[value.handle];
                });

                appState.dishCategory = dishCategory
                appState.dishTags = dishTags;
                appState.menu = menu;

                const localTabs = await this.getMenuOrdering(session)
                appState.orderMenuTab = localTabs.map(it => it.name)

                // 重新获取并确认最终分类排序
                tabs = await this.menuOrderingRepository.get(session)
                appState.orderMenuTab = tabs.map(it => it.name)
            })
        } catch (error) {
            console.warn("载入菜单数据失败: ", error)
        }
    }

    /**
     * 通用封装函数 - 根据类型重建分类 Tab 并保存
     * @param {'ALL' | 'DINEIN' | 'TAKEAWAY'} type 业务类型
     * @param {Object} session 数据库会话
     */
    async _rebuildTabsAndSave(type = 'ALL', session = null) {
        let localTabs, menu, menuDish, customDish;

        switch (type) {
            case 'DINEIN':
                localTabs = await this.menuOrderingRepository.getDineIn(session);
                menu = await this.menuRespository.getDineInMenu(session);
                menuDish = await this.buildMenuOrdering(session, menu);
                customDish = (await this.customeDishRepository.getDineEnableTemplates(session)).map(it => it.name);
                break;

            case 'TAKEAWAY':
                localTabs = await this.menuOrderingRepository.getTakeaway(session);
                menu = await this.menuRespository.getTakeaway(session);
                menuDish = await this.buildMenuOrdering(session, menu);
                customDish = (await this.customeDishRepository.getTakeEnableTemplates(session)).map(it => it.name);
                break;

            default:
                localTabs = await this.menuOrderingRepository.get(session);
                customDish = (await this.customeDishRepository.getAllEnableTemplates(session)).map(it => it.name);
                menuDish = await this.buildMenuOrdering(session);
                break;
        }

        // 调用 mergeTabs 统一融合逻辑（合并现有排序、自定义菜品模板和普通菜单分类）
        const tabs = mergeTabs(localTabs, customDish, menuDish);

        // 保存不同类型的排序结果
        switch (type) {
            case 'DINEIN':
                await this.menuOrderingRepository.saveDineIn(tabs, session);
                break;
            case 'TAKEAWAY':
                await this.menuOrderingRepository.saveTakeaway(tabs, session);
                break;
            default:
                await this.menuOrderingRepository.save(tabs, session)
                break;
        }

        return tabs;
    }

    /**
     * 重组并保存外卖分类排序
     */
    async reorganizeTakeMenuTab_custom(session = null) {
        return await this._rebuildTabsAndSave('TAKEAWAY', session);
    }

    /**
     * 重组并保存全部菜单分类排序
     */
    async reorganizeAndSaveMenuTab_menu(session = null) {
        return await this._rebuildTabsAndSave('ALL', session);
    }

    /**
     * 重组并保存堂食分类排序
     */
    async reorganizeDineMenuTab_custom(session = null) {
        return await this._rebuildTabsAndSave('DINEIN', session);
    }

    /**
     * 初始化菜单排序数据（如果数据库为空则执行首次重组）
     */
    async initMenuOrdering() {
        await DB.withTransaction(async (session) => {
            const allTabs = await this.menuOrderingRepository.get(session)
            if (allTabs == null) {
                await this.reorganizeAndSaveMenuTab_menu(session)
            }
            const dineInTabs = await this.menuOrderingRepository.getDineIn(session)
            if (dineInTabs == null) {
                await this.reorganizeDineMenuTab_custom(session)
            }
            const takeawayTabs = await this.menuOrderingRepository.getTakeaway(session)
            if (takeawayTabs == null) {
                await this.reorganizeTakeMenuTab_custom(session)
            }
        })
    }

    /**
     * 获取菜品所属分类
     */
    getDishCategory(item) {
        if (item.category) return item.category;
        const id = item.dishid;
        let tag = appState.dishTags[id];
        if (tag && tag != "") return tag;
        return appState.dishCategory[id];
    }

    /**
     * 更新菜单数据并同步到全局状态
     * @param {Array} data 新的菜单列表
     * @param {boolean} update_all 是否强制全量更新
     */
    async updateMenu(data, update_all) {
        try {
            await this.menuRespository.saveMenu(data, update_all);
            await this.loadMenu()
            return { success: true }
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    /**
     * 保存菜单分类标签数据
     */
    saveOrderMenuTab(data) {
        appState.orderMenuTab = data;
        this.saveMenuOrdering(data);
    }

    /**
     * 构建菜单分类及其下属菜品的映射结构
     */
    async buildMenuOrdering(session = null, menu = appState.menu) {
        const types = [];
        menu.forEach(value => {
            if (value.category && value.category !== "" && !types.includes(value.category)) {
                types.push(value.category);
            }
        });

        const menuDish = [];
        types.forEach(type => {
            const dishes = menu
                .filter(dish => dish.category === type)
                .map(dish => ({ id: dish.id }));
            menuDish.push({ name: type, dishes: dishes });
        });

        return menuDish;
    }

    /**
     * 获取当前的菜单排序映射列表
     */
    async getMenuOrdering(session = null) {
        return await this.menuOrderingRepository.get(session) || [];
    }

    /**
     * 保存菜单排序映射列表
     */
    async saveMenuOrdering(data, session = null) {
        return await this.menuOrderingRepository.save(data, session);
    }

    /**
     * 获取堂食专用菜单排序及分类
     */
    async getDineInMenuAndTabs(session = null) {
        const tabs = await this.menuOrderingRepository.getDineIn(session);
        const menu = await this.menuRespository.getDineInMenu(session);
        return { tabs, menu };
    }

    /**
     * 获取外卖专用菜单排序及分类
     */
    async getTakeawayMenuAndTabs(session = null) {
        const tabs = await this.menuOrderingRepository.getTakeaway(session);
        const menu = await this.menuRespository.getTakeaway(session);
        return { tabs, menu };
    }

    /**
     * 获取完整菜单及分类排序信息（用于管理端）
     */
    async getMenuAndTab(session = null) {
        const menu = await this.menuRespository.getMenu(session);
        const tabs = await this.menuOrderingRepository.get(session);
        return { success: true, data: { menu, tabs } };
    }

    /**
     * 持久化菜单数据
     */
    save() {
        db.saveData("menu", appState.menu);
    }

    /**
     * 获取原始菜单列表
     */
    async getMenu(session = null) {
        return await this.menuRespository.getMenu(session);
    }
}

module.exports = { MenuService };
