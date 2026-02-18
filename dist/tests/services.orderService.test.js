jest.mock('../state.js', () => {
  const tablesMap = new Map();
  return {
    appState: {
      settings: { useAuth: false },
      orders: new Map(),
      addOrderTable: jest.fn((orderData) => {
        const id = `o-${Math.random().toString(36).slice(2, 8)}`;
        const order = {
          id,
          table: orderData.table,
          toJSON: () => ({ id, table: orderData.table }),
        };
        const mapOrder = { id, timestamp: Date.now(), items: [] };
        const map = new Map();
        map.set(id, mapOrder);
        return order;
      }),
      getOrdersByTableID: jest.fn(() => new Map()),
      getTableById: jest.fn((id) => ({ id, users: [], status: { value: '用餐中' }, deleteDishByName: jest.fn().mockReturnValue(true), deteleDishesByIdAndName: jest.fn() })),
      tables: {
        getTableById: jest.fn((id) => ({ id, users: [], status: { value: '用餐中' }, deleteDishByName: jest.fn().mockReturnValue(true), deteleDishesByIdAndName: jest.fn() })),
        toJSON: jest.fn(() => []),
      },
    },
  };
});

const orderService = require('../services/orderService');

/**
 * 用例目的（中文说明）：
 * - 覆盖 orderService：addOrder 正常/缺字段/未授权，sendOrder 发射，getOrders，deleteSushiBoxInTable，deleteOrderAndTableDishes，updateOrderStatus，hasUniCode
 */
describe('orderService 基本行为', () => {
  test('addOrder 成功返回订单 JSON', () => {
    const res = orderService.addOrder({ table: 'T1' });
    expect(res.success).toBe(true);
    expect(res.data.table).toBe('T1');
  });

  test('addOrder 缺少 table 报错', () => {
    const res = orderService.addOrder({ });
    expect(res.success).toBe(false);
    expect(res.data).toMatch(/No table id/);
  });

  test('addOrder 开启认证未授权被拦截', () => {
    const state = require('../state.js').appState;
    state.settings.useAuth = true;
    state.tables.getTableById.mockReturnValueOnce({ id: 'T1', status: { value: '用餐中' }, users: [{ id: 'U1', authorized: false }] });
    const res = orderService.addOrder({ table: 'T1', userId: 'U1' });
    expect(res.success).toBe(false);
    expect(res.data).toBe('WAIT_FOR_AUTH');
    state.settings.useAuth = false;
  });

  test('sendOrder 调用 socket.emit 返回订单列表', () => {
    const socket = { emit: jest.fn() };
    orderService.sendOrder(socket);
    expect(socket.emit).toHaveBeenCalledWith('manager_order_data', expect.objectContaining({ success: true }));
  });

  test('getOrders 正常返回数组', () => {
    const res = orderService.getOrders('T1');
    expect(res.success).toBe(true);
    expect(Array.isArray(res.data)).toBe(true);
  });

  test('deleteSushiBoxInTable 非目标名称报错', () => {
    const res = orderService.deleteSushiBoxInTable('Other', 'T1');
    expect(res.success).toBe(false);
  });

  test('deleteSushiBoxInTable 正常删除返回 tables json', () => {
    const state = require('../state.js').appState;
    state.getTableById = jest.fn(() => ({ deleteDishByName: () => true }));
    const res = orderService.deleteSushiBoxInTable('Sushi Aleatória?®', 'T1');
    expect(res.success).toBe(true);
  });

  test('deleteOrderAndTableDishes 缺 table 报错', () => {
    const res = orderService.deleteOrderAndTableDishes('X', []);
    expect(res.success).toBe(false);
  });

  test('updateOrderStatus 找不到 id 报错', () => {
    const res = orderService.updateOrderStatus({ id: 'bad', status: 'done' });
    expect(res.success).toBe(false);
  });

  test('hasUniCode 去重逻辑', () => {
    const state = require('../state.js').appState;
    const table = {};
    state.getTableById = jest.fn(() => table);
    expect(orderService.hasUniCode('T1', 'abc')).toBe(false);
    expect(orderService.hasUniCode('T1', 'abc')).toBe(true);
  });
});

