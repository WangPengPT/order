const { Dish } = require('../model/dish');
const { Order } = require('../model/order');

/**
 * 用例目的（中文说明）：
 * - 覆盖菜品与订单模型：数值解析、总价计算、序列化/反序列化
 */
describe('菜品与订单模型', () => {
  test('Dish 数值解析与序列化', () => {
    const d = new Dish({ dishid: '1', name: 'A', price: '12.34', deliveryPrice: '13.5', quantity: '2', notes: 'x', orderIds: 'y' });
    expect(d.price).toBe(12.34);
    expect(d.deliveryPrice).toBe(13.5);
    expect(d.quantity).toBe(2);
    const j = d.toJSON();
    expect(j.name).toBe('A');
  });

  test('Order 计算总价与序列化', () => {
    const o = new Order({ id: 'o1', people: 2, table: 'T1', items: [{ dishid: '1', name: 'A', price: 5, quantity: 2 }] });
    expect(o.getTotal()).toBe(10);
    o.addDish({ dishid: '2', name: 'B', price: 3, quantity: 1 });
    expect(o.getTotal()).toBe(13);
    const j = o.toJSON();
    expect(j.items.length).toBe(2);
    const o2 = Order.fromJSON(j);
    expect(o2.items.length).toBe(2);
  });
});

