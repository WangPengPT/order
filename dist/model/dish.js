class Dish {
  constructor({ dishid, name, price, quantity, orderId }) {
    this.orderId = orderId || null
    this.dishid = dishid
    this.name = name
    this.price = parseFloat(price) || 0
    this.quantity = parseInt(quantity) || 0
  }
    toJSON() {
    return {
      orderId: this.orderId,
      dishid: this.dishid,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    }
  }
  static fromJSON(data) {
    return new Dish(data)
  }
}

module.exports = { Dish }