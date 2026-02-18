const { AppStateSocket } = require('../socket/AppStateSocket');

/**
 * 用例目的（中文说明）：
 * - 覆盖 AppStateSocket：设置/店铺/日期/价格更新、managerGetData 与 managerUpdateData 多分支
 */
describe('socket/AppStateSocket', () => {
  const io = { emit: jest.fn() };

  function createAppStateService() {
    return {
      updateSettings: jest.fn((k, v) => ({ success: k !== 'bad', data: v })),
      updateShopInfo: jest.fn(() => ({ success: true })),
      updatePickupDate: jest.fn(() => ({ success: true, data: 1 })),
      updateHomeDeliveryDate: jest.fn(() => ({ success: true, data: 2 })),
      updateReserverDate: jest.fn(() => ({ success: true, data: 3 })),
      updataChildrenPricePercentage: jest.fn(() => ({ success: true, data: 50 })),
      updateWeekPrice: jest.fn(() => ({ success: true, data: {} })),
      updatePrintModel: jest.fn(() => ({ success: true, data: {} })),
      appStateRepository: {
        appState: {
          getWeekPrice: () => ({ success: true, data: {} }),
          getChildrenWeekPrice: () => ({ success: true, data: {} }),
          getChildrenPricePercentage: () => ({ success: true, data: 50 }),
          getPeopleCurrentPriceData: () => ({ success: true, data: {} }),
          getPickupData: () => ({}),
          getHomeDeliveryData: () => ({}),
          getReserverData: () => ({}),
          getPriceData: () => ({}),
          printModel: {},
          getPermissionsControl: () => ({}),
          customDishesControl: {},
        },
      },
    };
  }

  function createMenuService() {
    return {
      reorganizeAndSaveMenuTab_menu: jest.fn(),
      reorganizeDineMenuTab_custom: jest.fn(),
      reorganizeTakeMenuTab_custom: jest.fn(),
      getMenuAndTab: jest.fn(async () => ({ success: true, data: {} })),
    };
  }

  test('updateSettings 成功广播', () => {
    const s = new AppStateSocket(io, createAppStateService(), createMenuService());
    const cb = jest.fn();
    s.updateSettings({ key: 'checkIP', value: true }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
    expect(io.emit).toHaveBeenCalledWith("client_send_settings", { key: 'checkIP', value: true });
  });

  test('updateSettings 失败回调 400', () => {
    const s = new AppStateSocket(io, createAppStateService(), createMenuService());
    const cb = jest.fn();
    s.updateSettings({ key: 'bad', value: 1 }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('updateShopInfo/日期/打印模板更新成功', () => {
    const svc = createAppStateService();
    const s = new AppStateSocket(io, svc, createMenuService());
    const cb1 = jest.fn();
    s.updateShopInfo({ key: 'name', value: 'x' }, cb1);
    expect(cb1).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb2 = jest.fn();
    s.updatePickupDate({ key: 'd', value: 1 }, cb2);
    expect(cb2).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb3 = jest.fn();
    s.updateHomeDeliveryDate({ key: 'd', value: 1 }, cb3);
    expect(cb3).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb4 = jest.fn();
    s.updateReserverDate({ key: 'd', value: 1 }, cb4);
    expect(cb4).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb5 = jest.fn();
    s.updatePrintModel({ key: 'p', value: {} }, cb5);
    expect(cb5).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
  });

  test('updatePriceData childrenPricePercentage 与 weekPrice 分支', () => {
    const svc = createAppStateService();
    const s = new AppStateSocket(io, svc, createMenuService());
    const cb1 = jest.fn();
    s.updatePriceData('childrenPricePercentage', 50, cb1);
    expect(svc.updataChildrenPricePercentage).toHaveBeenCalled();
    expect(cb1).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb2 = jest.fn();
    s.updatePriceData('weekPrice', {}, cb2);
    expect(svc.updateWeekPrice).toHaveBeenCalled();
    expect(cb2).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
  });

  test('managerGetData 覆盖多个 key 与默认分支', async () => {
    const svc = createAppStateService();
    const menuSvc = createMenuService();
    const s = new AppStateSocket(io, svc, menuSvc);
    const cbMenu = jest.fn();
    await s.managerGetData('menu', null, cbMenu);
    expect(cbMenu).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const keys = ['weekPrice', 'childrenWeekPrice', 'childrenPricePercentage', 'people_data', 'delivery', 'homeDelivery', 'reserver'];
    for (const k of keys) {
      const cb = jest.fn();
      await s.managerGetData(k, { tableId: '1' }, cb);
      expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
    }

    const cbBad = jest.fn();
    await s.managerGetData('not_found_key', null, cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 404, success: false }));
  });

  test('managerGetData 捕获异常返回 500', async () => {
    const svc = createAppStateService();
    const menuSvc = createMenuService();
    menuSvc.getMenuAndTab.mockImplementationOnce(() => { throw new Error('boom'); });
    const s = new AppStateSocket(io, svc, menuSvc);
    const cb = jest.fn();
    await s.managerGetData('menu', null, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 500, success: false }));
  });

  test('managerUpdateData 覆盖所有 key 与默认分支', () => {
    const svc = createAppStateService();
    const menuSvc = createMenuService();
    const s = new AppStateSocket(io, svc, menuSvc);

    const cb1 = jest.fn();
    s.managerUpdateData('settings', { key: 'k', value: 1 }, cb1);
    expect(cb1).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb2 = jest.fn();
    s.managerUpdateData('shop_info', { key: 'k', value: 1 }, cb2);
    expect(cb2).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb3 = jest.fn();
    s.managerUpdateData('childrenPricePercentage', 50, cb3);
    expect(cb3).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb4 = jest.fn();
    s.managerUpdateData('weekPrice', {}, cb4);
    expect(cb4).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb5 = jest.fn();
    s.managerUpdateData('childrenWeekPrice', {}, cb5);
    expect(cb5).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb6 = jest.fn();
    s.managerUpdateData('pickup_data', {}, cb6);
    expect(cb6).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb7 = jest.fn();
    s.managerUpdateData('homeDelivery_data', {}, cb7);
    expect(cb7).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb8 = jest.fn();
    s.managerUpdateData('reserver_data', {}, cb8);
    expect(cb8).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cb9 = jest.fn();
    s.managerUpdateData('updatePrintModel', {}, cb9);
    expect(cb9).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    const cbBad = jest.fn();
    s.managerUpdateData('unknown', {}, cbBad);
    expect(cbBad).toHaveBeenCalledWith({ code: 404, success: false, data: 'Not Found Update Key' });
  });
});
