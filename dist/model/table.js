const { Dish } = require("./dish.js")

class Table {
  constructor({ id, people = 0, maxPeople = 4, status = '空闲', order = [] }) {
    this.id = id
    this.people = people
    this.maxPeople = maxPeople
    this.status = status
    this.order = order.map(item => new Dish(item))
  }

  // 增加点菜
  addOrderItem(item) {
    console.log("item: ", item)
    // TODO() 修改为id
    const existing = this.order.find(i => i.name === item.name)
    if (existing) {
      existing.quantity += item.quantity
    } else {
      this.order.push(new Dish(item))
    }
  }

  addOrderItems(items) {
    items.forEach(item => {
      this.addOrderItem(item)
    })
  }

  // 移除某个菜品
  removeOrderItem(itemId) {
    this.order = this.order.filter(i => i.dishid !== itemId)
  }

  // 以点菜单总价
  getTotalAmount() {
  return this.order.reduce((sum, item) => {
    return sum + item.price * item.quantity
    }, 0).toFixed(2)  // 保留两位小数
  }

  // 清理桌子，清空订单、人数和状态
  clear() {
    this.people = 0
    this.status = '空闲'
    this.order = []
  }

    toJSON() {
    return {
      id: this.id,
      people: this.people,
      maxPeople: this.maxPeople,
      status: this.status,
      order: this.order.map(dish => dish.toJSON())
    }
  }

  static fromJSON(data) {
    return new Table(data)
  }
}

module.exports = { Table }