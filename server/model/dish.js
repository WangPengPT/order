class Dish {
  constructor({ dishid, name, price, quantity, orderId }) {
    this.orderId = orderId || null
    this.dishid = dishid
    this.name = name
    this.price = parseFloat(price) || 0
    this.quantity = parseInt(quantity) || 0
  }
}

module.exports = { Dish }