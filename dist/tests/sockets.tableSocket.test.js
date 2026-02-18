jest.mock('../services/tableService.js', () => ({
  addNewTable: jest.fn(() => ({ success: true, data: { id: '1' } })),
  removeTable: jest.fn(() => ({ success: true })),
  cleanTable: jest.fn(() => ({ success: true, data: { id: '1' } })),
  updateTableWithoutOrder: jest.fn(() => ({ success: true, data: { id: '1' } })),
  getTableById: jest.fn(() => ({ success: true, data: { id: '1' } })),
  clientCmd: jest.fn(() => ({ success: true, data: { call: true } })),
  clickMsg: jest.fn(),
}));

jest.mock('../filedb.js', () => ({
  saveAppStateData: jest.fn(),
}));

jest.mock('../state.js', () => {
  const table = {
    id: '10',
    users: [],
    toJSON: () => ({ id: '10', users: [] }),
  };
  return {
    appState: {
      tables: {
        getTableById: jest.fn(() => table),
        toJSON: jest.fn(() => [table.toJSON()]),
      },
    },
  };
});

const tableService = require('../services/tableService.js');
const db = require('../filedb.js');
const { appState } = require('../state.js');
const { TableSocket } = require('../socket/tableSocket');

/**
 * 用例目的（中文说明）：
 * - 覆盖 TableSocket：增删改查桌子、清桌、客户端指令、密码相关回调及认证相关接口的主要成功/失败分支
 */
describe('socket/TableSocket', () => {
  const io = { emit: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();
    appState.tables.getTableById.mockReturnValue({
      id: '10',
      users: [],
      toJSON: () => ({ id: '10', users: [] }),
    });
  });

  test('managerAddTable 成功与失败', () => {
    const s = new TableSocket(io);
    const cbOk = jest.fn();
    s.managerAddTable({ id: '1', peopleType: { adults: 0, children: 0 }, status: '空闲', order: [] }, cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
    expect(db.saveAppStateData).toHaveBeenCalled();

    tableService.addNewTable.mockReturnValueOnce({ success: false, message: 'e' });
    const cbBad = jest.fn();
    s.managerAddTable({ id: '2' }, cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('deleteTable 成功与失败', () => {
    const s = new TableSocket(io);
    const cbOk = jest.fn();
    s.deleteTable('1', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    tableService.removeTable.mockReturnValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    s.deleteTable('1', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('cleanTable 成功与失败', () => {
    const s = new TableSocket(io);
    const cbOk = jest.fn();
    s.cleanTable('1', cbOk);
    expect(io.emit).toHaveBeenCalledWith('client_table1', expect.anything());
    expect(db.saveAppStateData).toHaveBeenCalled();
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    tableService.cleanTable.mockReturnValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    s.cleanTable('1', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('updateTable 成功与失败', () => {
    const s = new TableSocket(io);
    const cbOk = jest.fn();
    s.updateTable({ id: '1', peopleType: { adults: 0, children: 0 }, status: '空闲' }, cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
    expect(io.emit).toHaveBeenCalledWith('client_table1', expect.anything());

    tableService.updateTableWithoutOrder.mockReturnValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    s.updateTable({ id: '1', peopleType: { adults: 0, children: 0 }, status: '空闲' }, cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('clientGetTableById 返回 200/404', () => {
    const s = new TableSocket(io);
    const cbOk = jest.fn();
    s.clientGetTableById({ emit: jest.fn() }, '1', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    tableService.getTableById.mockReturnValueOnce({ success: false, data: 'e' });
    const cb404 = jest.fn();
    s.clientGetTableById({ emit: jest.fn() }, 'x', cb404);
    expect(cb404).toHaveBeenCalledWith(expect.objectContaining({ code: 404 }));
  });

  test('clientCallCMD 成功与失败', () => {
    const s = new TableSocket(io);
    const cbOk = jest.fn();
    s.clientCallCMD('1', { cmd: 'call' }, cbOk);
    expect(io.emit).toHaveBeenCalledWith('client_cmd', '1', expect.anything());
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    tableService.clientCmd.mockReturnValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    s.clientCallCMD('1', { cmd: 'call' }, cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('managerClickCMD 调用 clickMsg 与保存', () => {
    const s = new TableSocket(io);
    s.managerClickCMD('1', { cmd: 'call' });
    expect(tableService.clickMsg).toHaveBeenCalledWith('1', { cmd: 'call' });
    expect(db.saveAppStateData).toHaveBeenCalled();
  });

  test('clientJoinTable 桌子不存在/新增用户', () => {
    const s = new TableSocket(io);
    appState.tables.getTableById.mockReturnValueOnce(null);
    const cb404 = jest.fn();
    s.clientJoinTable({ emit: jest.fn() }, { tableId: 'x', user: { id: 'u', username: 'U' } }, cb404);
    expect(cb404).toHaveBeenCalledWith(expect.objectContaining({ code: 404, success: false }));

    const table = {
      id: '10',
      users: [],
      toJSON: () => ({ id: '10', users: [] }),
    };
    appState.tables.getTableById.mockReturnValueOnce(table);
    const cbOk = jest.fn();
    const socket = { emit: jest.fn() };
    s.clientJoinTable(socket, { tableId: '10', user: { id: 'u1', username: 'U1' } }, cbOk);
    expect(table.users.length).toBe(1);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200, success: true }));
  });

  test('managerUpdateUserAuth 成功与失败', () => {
    const s = new TableSocket(io);
    const table = {
      id: '10',
      users: [{ id: 'u1', username: 'U1', authorized: false }],
      toJSON: () => ({ id: '10', users: [{ id: 'u1', authorized: true }] }),
    };
    appState.tables.getTableById.mockReturnValueOnce(table);
    const cbOk = jest.fn();
    s.managerUpdateUserAuth('10', 'u1', true, cbOk);
    expect(cbOk).toHaveBeenCalledWith({ code: 200, success: true });

    appState.tables.getTableById.mockReturnValueOnce(null);
    const cbNoTable = jest.fn();
    s.managerUpdateUserAuth('x', 'u1', true, cbNoTable);
    expect(cbNoTable).toHaveBeenCalledWith(expect.objectContaining({ code: 404 }));

    appState.tables.getTableById.mockReturnValueOnce({
      id: '10',
      users: [],
      toJSON: () => ({ id: '10', users: [] }),
    });
    const cbNoUser = jest.fn();
    s.managerUpdateUserAuth('10', 'u2', true, cbNoUser);
    expect(cbNoUser).toHaveBeenCalledWith(expect.objectContaining({ code: 404 }));
  });

  test('clientUpdateGuestName 成功与失败', () => {
    const s = new TableSocket(io);
    const table = {
      id: '10',
      users: [{ id: 'u1', username: 'old' }],
      toJSON: () => ({ id: '10', users: [{ id: 'u1', username: 'new' }] }),
    };
    appState.tables.getTableById.mockReturnValueOnce(table);
    const cbOk = jest.fn();
    s.clientUpdateGuestName({ tableId: '10', userId: 'u1', newName: 'new' }, cbOk);
    expect(cbOk).toHaveBeenCalledWith({ code: 200, success: true });

    appState.tables.getTableById.mockReturnValueOnce(null);
    const cbNoTable = jest.fn();
    s.clientUpdateGuestName({ tableId: 'x', userId: 'u1', newName: 'n' }, cbNoTable);
    expect(cbNoTable).toHaveBeenCalledWith(expect.objectContaining({ code: 404 }));

    appState.tables.getTableById.mockReturnValueOnce({
      id: '10',
      users: [],
      toJSON: () => ({ id: '10', users: [] }),
    });
    const cbNoUser = jest.fn();
    s.clientUpdateGuestName({ tableId: '10', userId: 'u2', newName: 'n' }, cbNoUser);
    expect(cbNoUser).toHaveBeenCalledWith(expect.objectContaining({ code: 404 }));
  });

  test('clientLeaveTable 桌子不存在与成功移除', () => {
    const s = new TableSocket(io);
    appState.tables.getTableById.mockReturnValueOnce(null);
    s.clientLeaveTable({ tableId: 'x', userId: 'u1' }); // 不抛错即可

    const table = {
      id: '10',
      users: [{ id: 'u1' }],
      toJSON: () => ({ id: '10', users: [] }),
    };
    appState.tables.getTableById.mockReturnValueOnce(table);
    s.clientLeaveTable({ tableId: '10', userId: 'u1' });
    expect(table.users.length).toBe(0);
    expect(db.saveAppStateData).toHaveBeenCalled();
  });
});

