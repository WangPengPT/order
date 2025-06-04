const { Dish } = require('./dish') // 确保导入 Dish 类

class Order {
  constructor({ id, people, table, items, key, status, timestamp }) {
    this.id = id
    this.people = people || 1
    this.table = table
    this.dishes = items.map(item => new Dish({ ...item, orderId: this.id }))
    this.key = key || table?.replace('#', '') || ''
    this.status = status || 'pending'
    this.timestamp = timestamp || Date.now()
  }

  addDish(dishData) {
    const newDish = new Dish({ ...dishData, orderId: this.id })
    this.dishes.push(newDish)
  }

  getTotal() {
    return this.dishes.reduce((sum, dish) => sum + dish.price * dish.quantity, 0)
  }
}

module.exports = { Order }
