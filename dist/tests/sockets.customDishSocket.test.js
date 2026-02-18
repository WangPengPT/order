const { CustomDishSocket } = require('../socket/customDishSocket');

/**
 * 用例目的（中文说明）：
 * - 覆盖 CustomDishSocket：点赞、获取、启用开关、模板类型/数据更新、恢复初始化等所有接口的成功与失败分支
 */
describe('socket/CustomDishSocket', () => {
  const io = { emit: jest.fn() };

  function createSvc() {
    return {
      updateLike: jest.fn(async () => ({ success: true })),
      getSimplyAllTemplate: jest.fn(async () => ({ success: true, data: [] })),
      updateEnbale: jest.fn(async () => ({ success: true })),
      updateTemplateSellType: jest.fn(async () => ({ success: true })),
      restoreCustomDishData: jest.fn(async () => ({ success: true })),
      updateTemplateData: jest.fn(async () => ({ success: true })),
      getAllEnableTemplates: jest.fn(async () => ({ success: true, data: [] })),
      getAllTemplates: jest.fn(async () => ({ success: true, data: [] })),
    };
  }

  function createMenuSvc() {
    return {
      reorganizeDineMenuTab_custom: jest.fn(async () => {}),
      reorganizeAndSaveMenuTab_menu: jest.fn(async () => {}),
      getDineInMenuAndTabs: jest.fn(async () => ({ menu: [], tabs: [] })),
    };
  }

  test('updateLike 成功与失败', async () => {
    const customDishService = createSvc();
    const menuService = createMenuSvc();
    const s = new CustomDishSocket(io, customDishService, menuService);

    const cbOk = jest.fn();
    await s.updateLike(1, cbOk, true);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    customDishService.updateLike.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.updateLike(1, cbBad, false);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('getSimplyCustomDish 返回 code', async () => {
    const customDishService = createSvc();
    const menuService = createMenuSvc();
    const s = new CustomDishSocket(io, customDishService, menuService);

    const resOk = await s.getSimplyCustomDish();
    expect(resOk.code).toBe(200);

    customDishService.getSimplyAllTemplate.mockResolvedValueOnce({ success: false, data: 'e' });
    const resBad = await s.getSimplyCustomDish();
    expect(resBad.code).toBe(400);
  });

  test('updateEnable 成功刷新菜单并广播，失败返回 400', async () => {
    const customDishService = createSvc();
    const menuService = createMenuSvc();
    const s = new CustomDishSocket(io, customDishService, menuService);

    const cbOk = jest.fn();
    await s.updateEnable({ id: 1, enable: true }, cbOk);
    expect(menuService.reorganizeDineMenuTab_custom).toHaveBeenCalled();
    expect(io.emit).toHaveBeenCalledWith("dinner_menu_data", [], []);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    customDishService.updateEnbale.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.updateEnable({ id: 1, enable: false }, cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('updateTemplateSellType 成功与失败', async () => {
    const customDishService = createSvc();
    const menuService = createMenuSvc();
    const s = new CustomDishSocket(io, customDishService, menuService);

    const cbOk = jest.fn();
    await s.updateTemplateSellType(1, 'ALL', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    customDishService.updateTemplateSellType.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.updateTemplateSellType(1, 'ALL', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('restoreCustomDishData 成功与失败', async () => {
    const customDishService = createSvc();
    const menuService = createMenuSvc();
    const s = new CustomDishSocket(io, customDishService, menuService);

    const cbOk = jest.fn();
    await s.restoreCustomDishData(cbOk);
    expect(menuService.reorganizeAndSaveMenuTab_menu).toHaveBeenCalled();
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    customDishService.restoreCustomDishData.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.restoreCustomDishData(cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('updateTemplateDishData 成功与失败', async () => {
    const customDishService = createSvc();
    const menuService = createMenuSvc();
    const s = new CustomDishSocket(io, customDishService, menuService);

    const cbOk = jest.fn();
    await s.updateTemplateDishData({ id: 1 }, cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    customDishService.updateTemplateData.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.updateTemplateDishData({ id: 1 }, cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('getCustomDishTake 成功与失败', async () => {
    const customDishService = createSvc();
    const menuService = createMenuSvc();
    const s = new CustomDishSocket(io, customDishService, menuService);

    const cbOk = jest.fn();
    await s.getCustomDishTake('DINEIN', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    customDishService.getAllEnableTemplates.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.getCustomDishTake('DINEIN', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('registerHandlers 绑定所有事件', async () => {
    const customDishService = createSvc();
    const menuService = createMenuSvc();
    const s = new CustomDishSocket(io, customDishService, menuService);

    const handlers = {};
    const fakeSocket = {
      on: (event, fn) => { handlers[event] = fn; },
      emit: jest.fn()
    };

    customDishService.getAllTemplates.mockResolvedValueOnce({ success: true, data: [] });
    await s.registerHandlers(fakeSocket);

    expect(typeof handlers['client_get_customDish']).toBe('function');
    expect(typeof handlers['manager_update_custom_dish_enable']).toBe('function');
    expect(typeof handlers['custom_dish_like']).toBe('function');
    expect(typeof handlers['custom_dish_unlike']).toBe('function');
    expect(typeof handlers['manager_restore_custom_dish_data']).toBe('function');
    expect(typeof handlers['managerUpdate_customDishType']).toBe('function');
    expect(typeof handlers['managerUpdate_customDishData']).toBe('function');
  });
});

