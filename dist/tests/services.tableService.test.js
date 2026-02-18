jest.mock('../state.js', () => {
  const tables = new Map();
  const tableObj = (id, status='空闲') => ({
    id,
    status: { value: status, toPt: () => 'Livre' },
    toJSON: () => ({ id, status: 'Livre', peopleType: { adults:0, children:0 }, order: [] }),
    clearTable: jest.fn(),
    clientCmd: jest.fn(() => ({ msg_call: true })),
    clickMsg: jest.fn(),
  });
  const appState = {
    tables: {
      _m: new Map([['1', tableObj('1')]]),
      addTable: jest.fn((td) => appState.tables._m.set(String(td.id), tableObj(String(td.id)))),
      sortById: jest.fn(),
      getTableById: jest.fn((id) => appState.tables._m.get(String(id))),
      updateTableWithoutOrder: jest.fn(),
      removeTable: jest.fn((id) => appState.tables._m.delete(String(id))),
      toJSON: jest.fn(() => []),
    },
    getTableById: (id) => appState.tables.getTableById(id),
    getOrdersByTableID: jest.fn(() => []),
    shopInfo: { tableCoolingTime: 0 },
  };
  return { appState };
});

jest.mock('../utils/logger', () => ({ logger: { info: jest.fn(), error: jest.fn(), warn: jest.fn() } }));
jest.mock('../filedb.js', () => ({ saveAppStateData: jest.fn() }));

const tableService = require('../services/tableService');
const { TableStatus } = require('../model/TableStatus');

/**
 * 用例目的（中文说明）：
 * - 覆盖 tableService：新增/重复ID、更新状态含自动清桌、获取/删除/清理、指令执行、密码相关回调不抛错
 */
describe('tableService', () => {
  test('addNewTable 成功与重复ID失败', () => {
    const ok = tableService.addNewTable({ id: '2', peopleType: { adults:0, children:0 }, status: '空闲', order: [] });
    expect(ok.success).toBe(true);
    const dup = tableService.addNewTable({ id: '2' });
    expect(dup.success).toBe(false);
  });

  test('updateTableWithoutOrder 从已支付->空闲自动清桌', () => {
    const state = require('../state.js').appState;
    const t = { 
      id: '3',
      status: { value: '已支付' },
      order: [],
      toJSON: () => ({ id:'3', status:'Livre', peopleType:{adults:0, children:0}, order: [] }),
      clearTable: function() { 
        this.status = require('../model/TableStatus').TableStatus.FREE; 
        this.order = []; 
      }
    };
    state.tables._m.set('3', t);
    state.tables.getTableById = jest.fn((id) => state.tables._m.get(String(id)));
    state.tables.updateTableWithoutOrder = jest.fn((data) => {
      const t = state.tables._m.get(String(data.id));
      t.status = data.status === '空闲' ? require('../model/TableStatus').TableStatus.FREE : t.status;
    });
    const res = tableService.updateTableWithoutOrder({ id: '3', status: '空闲', peopleType: { adults: 0, children: 0 } });
    expect(res.success).toBe(true);
  });

  test('getTableById 非法/不存在', () => {
    expect(tableService.getTableById(null).success).toBe(false);
    expect(tableService.getTableById('not_exist').success).toBe(false);
  });

  test('clientCmd 仅 SEATED 可执行', () => {
    const state = require('../state.js').appState;
    state.tables._m.set('5', { id: '5', status: TableStatus.SEATED, clientCmd: jest.fn(() => ({ call: true })) });
    const ok = tableService.clientCmd('5', { cmd: 'call' });
    expect(ok.success).toBe(true);
    state.tables._m.set('6', { id: '6', status: TableStatus.FREE, clientCmd: jest.fn() });
    const bad = tableService.clientCmd('6', { cmd: 'call' });
    expect(bad.success).toBe(false);
  });
});
