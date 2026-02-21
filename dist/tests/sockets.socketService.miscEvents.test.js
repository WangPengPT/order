jest.mock('../filedb.js', () => ({
  saveAppStateData: jest.fn(),
  loadDataForce: jest.fn(() => ({ password: '0000' })),
  pageDir: '/pages',
}));

jest.mock('../services/orderService.js', () => ({
  deleteSushiBoxInTable: jest.fn(() => ({ success: true, data: {} })),
  sendOrder: jest.fn(),
}));

jest.mock('../services/tableService.js', () => ({
  getTableById: jest.fn(() => ({ success: true, data: { id: 'T1' } })),
  updateTablePassword: jest.fn(),
  refreshTablePassword: jest.fn(),
}));

jest.mock('../utils/printOrder.js', () => {
  const printers = {};
  return {
    print_order: jest.fn(),
    print_takeaway_order: jest.fn(),
    printers,
  };
});

jest.mock('../socket/centerSocket.js', () => ({
  get_menu_data: jest.fn(() => null),
  getRestaurant: jest.fn(() => ({ name: 'R' })),
}));

jest.mock('../state.js', () => {
  const tables = {
    getTableById: jest.fn(() => ({ id: 'T1', lastOrderTime: 0, users: [], toJSON: () => ({ id: 'T1' }) })),
    toJSON: jest.fn(() => []),
  };
  const appState = {
    settings: { checkIP: false, useAuth: false },
    shopInfo: { tableCoolingTime: 0, latitudeAndLongitude: [0, 0] },
    shopType: 'DINE',
    tables,
    printModel: { order: {}, takeaway: {} },
    addBlacklistIP: jest.fn(function (socket) { this.blacklistIps.push(socket.handshake?.address || '0.0.0.0'); }),
    removeBlacklistIP: jest.fn(function (ip) { this.blacklistIps = this.blacklistIps.filter(i => i !== ip); }),
    blacklistIps: [],
    addLocalIP: jest.fn(),
    checkBlacklistIP: jest.fn(() => false),
    checkLocalIP: jest.fn(() => true),
    socket_io: { emit: jest.fn() },
    getPriceData: jest.fn(() => ({})),
    getPickupData: jest.fn(() => ({})),
    getHomeDeliveryData: jest.fn(() => ({})),
    getReserverData: jest.fn(() => ({})),
    getPermissionsControl: jest.fn(() => ({})),
    customDishesControl: {},
  };
  return { appState };
});

const { printers } = require('../utils/printOrder.js');
const orderService = require('../services/orderService.js');
const tableService = require('../services/tableService.js');
const centerSocket = require('../socket/centerSocket.js');
const db = require('../filedb.js');
const { appState } = require('../state.js');
const { SocketServices } = require('../socket/socketService');

describe('socket/SocketServices 其它事件', () => {
  let io;
  let svc;
  let connectionHandler;
  let socket;

  beforeEach(async () => {
    jest.clearAllMocks();
    io = {
      emit: jest.fn(),
      on: (event, fn) => {
        if (event === 'connection') connectionHandler = fn;
      },
    };

    const mockMenuService = {
      saveOrderMenuTab: jest.fn(),
      updateMenu: jest.fn(),
      getMenu: jest.fn(async () => []),
      getMenuOrdering: jest.fn(async () => []),
      getDineInMenuAndTabs: jest.fn(async () => ({ menu: [], tabs: ['A'] })),
      getTakeawayMenuAndTabs: jest.fn(async () => ({ menu: [], tabs: ['B'] })),
      updatedMenuById: jest.fn(async () => {}),
      save: jest.fn(),
      loadMenu: jest.fn(),
      initMenuOrdering: jest.fn(),
      updateDineOrTakeMenuSorted: jest.fn(async () => ({ success: true })),
      getMenuAndTab: jest.fn(async () => ({ success: true })),
      saveDishRating: jest.fn(async () => ({ success: true, data: { id: '1', likes: 1, rates: 1 } })),
    };

    svc = new SocketServices(io, mockMenuService);
    svc.appStateSocket.appStateService = {
      getTableTotalAmout: jest.fn(() => ({ success: true, data: 100 })),
      appStateRepository: { appState },
      saveAppState: jest.fn(),
      loadAppState: jest.fn(),
      getMonthRatesWithDate: jest.fn(() => ({ success: true, data: [] })),
      getOrderQuantityWithDate: jest.fn(async () => ({ success: true, data: [] })),
      getCurrentPrice: jest.fn(() => 10),
    };
    
    svc.orderSocket.registerHandlers = jest.fn(() => {});
    svc.tableSocket.registerHandlers = jest.fn(() => {});
    svc.webPageDesignSocket.registerHandlers = jest.fn(async () => {});
    svc.customDish.registerHandlers = jest.fn(async () => {});
    svc.dataAnalizeSocket.registerHandlers = jest.fn(() => {});
    svc.dictinarySocket.registerHandlers = jest.fn(async () => {});

    printers['p1'] = { data: { id: 'p1', curPrinter: null, menu: [], print_takeaway: false, every_one: false, fontSize: 1 }, socket: { emit: jest.fn() } };
    printers['p2'] = { data: { id: 'p2', curPrinter: null, menu: [], print_takeaway: false, every_one: false, fontSize: 1 }, socket: { emit: jest.fn() } };

    svc.initSocket();

    const handlers = {};
    socket = {
      id: 's1',
      handshake: { address: '1.1.1.1' },
      on: (event, fn) => {
        handlers[event] = fn;
      },
      emit: jest.fn(),
    };
    await connectionHandler(socket);
    socket.handlers = handlers;
  });

  test('manager_get_menu 成功与异常', async () => {
    const cbOk = jest.fn();
    await socket.handlers['manager_get_menu'](null, cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200, success: true }));

    const old = svc.menuService.getDineInMenuAndTabs;
    svc.menuService.getDineInMenuAndTabs = jest.fn(() => { throw new Error('e'); });
    const cbBad = jest.fn();
    await socket.handlers['manager_get_menu'](null, cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 500, success: false }));
    svc.menuService.getDineInMenuAndTabs = old;
  });

  test('get_takeaway_menu_data 缓存与回源', async () => {
    centerSocket.get_menu_data.mockReturnValueOnce({ menu: [1], menuOrdering: [2] });
    await socket.handlers['get_takeaway_menu_data']();
    expect(socket.emit).toHaveBeenCalledWith('takeaway_menu_data', [1], [2]);

    centerSocket.get_menu_data.mockReturnValueOnce(null);
    await socket.handlers['get_takeaway_menu_data']();
    expect(socket.emit).toHaveBeenCalledWith('takeaway_menu_data', [], ['B']);
  });

  test('manager_delete_order 成功与失败', () => {
    const cbOk = jest.fn();
    socket.handlers['manager_delete_order']({ order: 'o', tableId: 'T1' }, cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200, success: true }));
    expect(io.emit).toHaveBeenCalledWith('client_tableT1', expect.anything());

    orderService.deleteSushiBoxInTable.mockReturnValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    socket.handlers['manager_delete_order']({ order: 'o', tableId: 'T1' }, cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400, success: false }));
  });

  test('manager_update_checkIP 更新', () => {
    socket.handlers['manager_update_checkIP'](true, jest.fn());
    expect(appState.settings.checkIP).toBe(true);
  });

  test('黑名单增删查', () => {
    const cbAdd = jest.fn();
    socket.handlers['manager_add_blacklist_ip']('9.9.9.9', cbAdd);
    expect(cbAdd).toHaveBeenCalledWith({ code: 200, success: true, data: expect.any(Array) });

    const cbList = jest.fn();
    socket.handlers['manager_get_blacklist_ips'](cbList);
    expect(cbList).toHaveBeenCalledWith({ code: 200, success: true, data: expect.any(Array) });

    const cbRemove = jest.fn();
    socket.handlers['manager_remove_blacklist_ip']('9.9.9.9', cbRemove);
    expect(cbRemove).toHaveBeenCalledWith({ code: 200, success: true, data: expect.any(Array) });
  });

  test('get_table_id 发送桌子与当前价格', () => {
    socket.handlers['get_table_id']('T1');
    expect(io.emit).toHaveBeenCalledWith('client_tableT1', expect.anything());
    expect(socket.emit).toHaveBeenCalledWith('table_id', 'T1');
    expect(socket.emit).toHaveBeenCalledWith('client_currentPrice', 10);
  });

  test('admin 登录', () => {
    const cbOk = jest.fn();
    socket.handlers['admin']('0000', cbOk);
    expect(orderService.sendOrder).toHaveBeenCalled();
    expect(cbOk).toHaveBeenCalledWith(true);

    const cbBad = jest.fn();
    db.loadDataForce.mockReturnValueOnce({ password: '1111' });
    socket.handlers['admin']('0000', cbBad);
    expect(cbBad).toHaveBeenCalledWith(false);
  });

  test('get_printers/select_printer/print_test', () => {
    const cb = jest.fn();
    socket.handlers['get_printers'](cb);
    expect(cb).toHaveBeenCalledWith(expect.any(Array));

    socket.handlers['select_printer']({ id: 'p1', printer: 'X', menu: [1], print_takeaway: true, every_one: true, fontSize: 2 });
    expect(printers['p1'].socket.emit).toHaveBeenCalledWith('select_printer', 'X', [1].toString(), true, 2, true);

    socket.handlers['print_test']('p1');
    expect(printers['p1'].socket.emit).toHaveBeenCalledWith('print_test');
  });

  test('manager_updateMenuIndex 成功与失败', async () => {
    const cbOk = jest.fn();
    await socket.handlers['manager_updateMenuIndex']([{ id: 1 }], 'DINE', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200, success: true }));

    svc.menuService.updateDineOrTakeMenuSorted.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await socket.handlers['manager_updateMenuIndex']([{ id: 1 }], 'DINE', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400, success: false }));
  });
});
