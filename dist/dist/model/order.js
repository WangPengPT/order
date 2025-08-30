const { Dish } = require('./dish.js') // 确保导入 Dish 类
const dataTime = require('../utils/dateTime.js')

class Order {
  constructor({ id, people, table, items = [], key, status, timestamp, name, note }) {
    this.id = id
    this.people = people || 1
    this.table = table
    this.items = items.map(item => new Dish({ ...item, orderId: this.id }))
    this.key = key || table?.replace('#', '') || ''
    this.status = status || "new"
    this.timestamp = timestamp || dataTime.get_portugal_timestemp()
    this.name = name;
    this.note = note;
  }
  addDish(dishData) {
    const newDish = new Dish({ ...dishData, orderId: this.id })
    this.items.push(newDish)
  }

  getTotal() {
    return this.items.reduce((sum, dish) => sum + dish.price * dish.quantity, 0)
  }

  toJSON() {
    return {
      id: this.id,
      people: this.people,
      table: this.table,
      items: this.items.map(item => item.toJSON()),
      key: this.key,
      status: this.status,
      timestamp: this.timestamp,
      name: this.name,
      note: this.note,
    }
  }
  static fromJSON(data) {
    return new Order({
      ...data,
      items: data.items || []
    })
  }
}

module.exports = { Order }
