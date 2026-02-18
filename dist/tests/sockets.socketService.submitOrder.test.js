jest.mock('../filedb.js', () => ({
  saveAppStateData: jest.fn(),
  loadDataForce: jest.fn(() => ({ password: '0000' })),
}));

jest.mock('../services/orderService.js', () => ({
  hasUniCode: jest.fn(() => false),
  addOrder: jest.fn(() => ({ success: true, data: { id: 'o1', table: 'T1' } })),
  deleteSushiBoxInTable: jest.fn(() => ({ success: true, data: {} })),
}));

jest.mock('../services/tableService.js', () => ({
  getTableById: jest.fn(() => ({ success: true, data: { id: 'T1' } })),
  updateTablePassword: jest.fn(),
  refreshTablePassword: jest.fn(),
}));

jest.mock('../services/menuService.js', () => {
  return {
    MenuService: function () {
      return {
        saveOrderMenuTab: jest.fn(),
        updateMenu: jest.fn(),
        getMenu: jest.fn(async () => []),
        getMenuOrdering: jest.fn(async () => []),
        getDineInMenuAndTabs: jest.fn(async () => ({ menu: [], tabs: [] })),
        getTakeawayMenuAndTabs: jest.fn(async () => ({ menu: [], tabs: [] })),
        updatedMenuById: jest.fn(async () => {}),
        save: jest.fn(),
        loadMenu: jest.fn(),
        initMenuOrdering: jest.fn(),
        updateDineOrTakeMenuSorted: jest.fn(async () => ({ success: true })),
        getMenuAndTab: jest.fn(async () => ({ success: true })),
      };
    },
  };
});

jest.mock('../utils/printOrder.js', () => ({
  print_order: jest.fn(),
  print_takeaway_order: jest.fn(),
  printers: {},
}));

jest.mock('../utils/logger.js', () => ({
  logger: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  },
  formatOrderLog: jest.fn(() => 'log'),
}));

jest.mock('../services/vipUserManager.js', () => ({
  initSocket: jest.fn(),
}));

jest.mock('../socket/centerSocket.js', () => ({
  get_menu_data: jest.fn(() => null),
  saveDishRating: jest.fn(async () => ({ success: true, data: { id: '1', likes: 1, rates: 1 } })),
  update_menu_data: jest.fn(async () => {}),
  getRestaurant: jest.fn(() => ({})),
}));

jest.mock('../state.js', () => {
  const tables = {
    getTableById: jest.fn(() => ({ id: 'T1', lastOrderTime: 0, users: [], toJSON: () => ({ id: 'T1' }) })),
    toJSON: jest.fn(() => []),
  };
  const appState = {
    settings: { checkIP: false, useAuth: false },
    shopInfo: { tableCoolingTime: 0 },
    tables,
    printModel: { order: {}, takeaway: {} },
    addBlacklistIP: jest.fn(),
    removeBlacklistIP: jest.fn(),
    blacklistIps: [],
    addLocalIP: jest.fn(),
    checkBlacklistIP: jest.fn(() => false),
    checkLocalIP: jest.fn(() => true),
    socket_io: { emit: jest.fn() },
    getOrders: jest.fn(() => ({ success: true, data: [] })),
  };
  return { appState };
});

const orderService = require('../services/orderService.js');
const { appState } = require('../state.js');
const db = require('../filedb.js');
const { SocketServices } = require('../socket/socketService');

/**
 * 用例目的（中文说明）：
 * - 覆盖 SocketServices.submit_order：黑名单、IP 校验、认证失败、重复 uniCode、冷却时间限制、正常下单与业务失败
 */
describe('socket/SocketServices submit_order', () => {
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
      getDineInMenuAndTabs: jest.fn(async () => ({ menu: [], tabs: [] })),
      getTakeawayMenuAndTabs: jest.fn(async () => ({ menu: [], tabs: [] })),
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

    svc.appStateSocket.registerHandlers = jest.fn(async () => {});
    svc.orderSocket.registerHandlers = jest.fn(() => {});
    svc.tableSocket.registerHandlers = jest.fn(() => {});
    svc.webPageDesignSocket.registerHandlers = jest.fn(async () => {});
    svc.customDish.registerHandlers = jest.fn(async () => {});
    svc.dataAnalizeSocket.registerHandlers = jest.fn(() => {});
    svc.dictinarySocket.registerHandlers = jest.fn(async () => {});

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

  test('黑名单 IP 被拒绝', () => {
    appState.checkBlacklistIP.mockReturnValueOnce(true);
    const cb = jest.fn();
    socket.handlers['submit_order']({ table: 'T1' }, cb);
    expect(cb).toHaveBeenCalledWith(
      expect.objectContaining({ code: 403, success: false }),
    );
    expect(socket.emit).toHaveBeenCalledWith('error', expect.any(String));
  });

  test('IP 校验失败', () => {
    appState.checkBlacklistIP.mockReturnValueOnce(false);
    appState.settings.checkIP = true;
    appState.checkLocalIP.mockReturnValueOnce(false);
    const cb = jest.fn();
    socket.handlers['submit_order']({ table: 'T1' }, cb);
    expect(cb).toHaveBeenCalledWith(
      expect.objectContaining({ code: 403, success: false }),
    );
    appState.settings.checkIP = false;
  });

  test('认证开启但用户未授权', () => {
    appState.checkBlacklistIP.mockReturnValueOnce(false);
    appState.settings.useAuth = true;
    appState.tables.getTableById.mockReturnValueOnce({
      id: 'T1',
      users: [],
    });
    const cb = jest.fn();
    socket.handlers['submit_order']({ table: 'T1', userId: 'U1' }, cb);
    expect(cb).toHaveBeenCalledWith(
      expect.objectContaining({ code: 401, success: false }),
    );
    appState.settings.useAuth = false;
  });

  test('重复 uniCode 直接返回 200', () => {
    appState.checkBlacklistIP.mockReturnValueOnce(false);
    orderService.hasUniCode.mockReturnValueOnce(true);
    const cb = jest.fn();
    socket.handlers['submit_order']({ table: 'T1', uniCode: 'X' }, cb);
    expect(cb).toHaveBeenCalledWith(
      expect.objectContaining({ code: 200, success: true }),
    );
  });

  test('冷却时间未到返回 429', () => {
    appState.checkBlacklistIP.mockReturnValueOnce(false);
    appState.shopInfo.tableCoolingTime = 100;
    const now = Date.now();
    appState.tables.getTableById.mockReturnValueOnce({
      id: 'T1',
      lastOrderTime: now,
    });
    const cb = jest.fn();
    socket.handlers['submit_order']({ table: 'T1' }, cb);
    expect(cb).toHaveBeenCalledWith(
      expect.objectContaining({ code: 429, success: false }),
    );
    appState.shopInfo.tableCoolingTime = 0;
  });

  test('正常下单成功', () => {
    appState.checkBlacklistIP.mockReturnValueOnce(false);
    orderService.hasUniCode.mockReturnValueOnce(false);
    const cb = jest.fn();
    socket.handlers['submit_order']({ table: 'T1' }, cb);
    expect(cb).toHaveBeenCalledWith(
      expect.objectContaining({ code: 200, success: true }),
    );
    expect(db.saveAppStateData).toHaveBeenCalled();
    expect(socket.emit).toHaveBeenCalledWith('order_confirmed', 'o1');
    expect(io.emit).toHaveBeenCalledWith('new_order', expect.objectContaining({ id: 'o1' }));
  });

  test('业务失败返回 400', () => {
    appState.checkBlacklistIP.mockReturnValueOnce(false);
    orderService.hasUniCode.mockReturnValueOnce(false);
    orderService.addOrder.mockReturnValueOnce({ success: false, data: 'e' });
    const cb = jest.fn();
    socket.handlers['submit_order']({ table: 'T1' }, cb);
    expect(cb).toHaveBeenCalledWith(
      expect.objectContaining({ code: 400, success: false }),
    );
    expect(socket.emit).toHaveBeenCalledWith('error', 'e');
  });
});
