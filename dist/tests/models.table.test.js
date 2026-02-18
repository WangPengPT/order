const { TableStatus } = require('../model/TableStatus');
const { PeopleType } = require('../model/people');
const { Table } = require('../model/table');
const { TableManager } = require('../model/tableManager');

/**
 * 用例目的（中文说明）：
 * - 覆盖桌位相关模型：TableStatus / PeopleType / Table / TableManager
 * - 验证：状态中葡语/中文互转、人数计算与价格、点单与合并、清桌、序列化/反序列化
 */
describe('桌位与人数模型', () => {
  test('TableStatus 中文/葡语互转', () => {
    expect(TableStatus.fromString('空闲')).toBe(TableStatus.FREE);
    expect(TableStatus.fromString('Livre')).toBe(TableStatus.FREE);
    expect(TableStatus.FREE.toPt()).toBe('Livre');
  });

  test('PeopleType 解析、数量与价格计算', () => {
    const p = new PeopleType({ adults: '2', children: '1' });
    expect(p.getCount()).toBe(3);
    p.clean();
    expect(p.getCount()).toBe(0);
    const p2 = new PeopleType({ adults: 2, children: 1 });
    expect(p2.getPriceCount('adults', 10)).toBe(20);
  });

  test('Table 点单合并与总价、清桌', () => {
    const t = new Table({ id: 'A1', peopleType: { adults: 1, children: 1 }, status: 'Livre', order: [] });
    t.addOrderItem({ dishid: 'd1', name: 'X', price: 5, quantity: 1 }, 'o1');
    t.addOrderItem({ dishid: 'd1', name: 'X', price: 5, quantity: 2 }, 'o2');
    expect(t.order[0].quantity).toBe(3);
    expect(t.getTableOrdersTotalAmount()).toBe('15.00');
    t.clearTable();
    expect(t.order.length).toBe(0);
    expect(t.status).toBe(TableStatus.FREE);
  });

  test('Table toJSON / fromJSON 保留结构（含葡语状态转换）', () => {
    const t = new Table({ id: 'T1', peopleType: { adults: 2, children: 1 }, status: '用餐中', order: [] });
    const j = t.toJSON();
    expect(j.status).toBe('Ocupado'); // toPt
    const t2 = Table.fromJSON({ ...j, status: 'Reservado', peopleType: j.peopleType, order: [] });
    expect(t2.status).toBe(TableStatus.RESERVED);
  });

  test('TableManager 增删改查与序列化', () => {
    const m = new TableManager([{ id: 1, status: '空闲', peopleType: { adults: 0, children: 0 }, order: [] }]);
    m.addTable({ id: 2, status: '已预订', peopleType: { adults: 2, children: 0 }, order: [] });
    expect(m.getTableById(2).status).toBe(TableStatus.RESERVED);
    m.updateTableWithoutOrder({ id: 2, status: 'Ocupado', peopleType: { adults: 2, children: 1 } }); // 葡语输入
    expect(m.getTableById(2).status).toBe(TableStatus.SEATED);
    m.sortById();
    const json = m.toJSON();
    expect(Array.isArray(json)).toBe(true);
  });
});

