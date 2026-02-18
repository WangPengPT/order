jest.mock('../services/orderService.js', () => ({
  deleteOrderAndTableDishes: jest.fn(() => ({ success: true, data: [] })),
  updateOrderStatus: jest.fn(() => ({ success: true, data: { id: 'o1' } })),
  getOrders: jest.fn(() => ({ success: true, data: [] })),
}));
jest.mock('../services/tableService.js', () => ({
  getTableById: jest.fn(() => ({ success: true, data: { id: 'T1' } })),
}));
jest.mock('../state.js', () => ({
  appState: { getOrders: jest.fn(() => ({ success: true, data: [] })) },
}));

const orderService = require('../services/orderService.js');
const tableService = require('../services/tableService.js');
const { appState } = require('../state.js');

const { OrderSocket } = require('../socket/orderSocket');

/**
 * 用例目的（中文说明）：
 * - 覆盖 OrderSocket：删除订单回调与广播、获取与更新状态回调
 */
describe('socket/OrderSocket', () => {
  const io = { emit: jest.fn() };
  const socket = new OrderSocket(io);

  test('deleteOrderAndTableDishes 成功回调 200 并广播', () => {
    const cb = jest.fn();
    socket.deleteOrderAndTableDishes({ tableId: 'T1', orders: [] }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200, success: true }));
    expect(io.emit).toHaveBeenCalled();
  });

  test('deleteOrderAndTableDishes 失败回调 400', () => {
    orderService.deleteOrderAndTableDishes.mockReturnValueOnce({ success: false, data: 'e' });
    const cb = jest.fn();
    socket.deleteOrderAndTableDishes({ tableId: 'T1', orders: [] }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 400, success: false }));
  });

  test('updateOrderStatus 成功回调 200', () => {
    const cb = jest.fn();
    socket.updateOrderStatus({ id: 'o1', status: 'done' }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
  });

  test('updateOrderStatus 失败回调 400', () => {
    orderService.updateOrderStatus.mockReturnValueOnce({ success: false, data: 'e' });
    const cb = jest.fn();
    socket.updateOrderStatus({ id: 'o1', status: 'done' }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 400, success: false }));
  });

  test('getOrders 直接读取 appState', () => {
    const res = socket.getOrders();
    expect(appState.getOrders).toHaveBeenCalled();
    expect(res).toEqual({ success: true, data: [] });
  });

  test('registerHandlers manager_get_order_signal 成功与失败', () => {
    const handlers = {};
    const fakeSocket = { on: (e, fn) => { handlers[e] = fn; }, emit: jest.fn() };
    socket.registerHandlers(fakeSocket);

    const cbOk = jest.fn();
    handlers['manager_get_order_signal']('T1', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200, success: true }));

    orderService.getOrders.mockReturnValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    handlers['manager_get_order_signal']('T1', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 404, success: false }));
  });
});
