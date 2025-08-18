class Dish {
  constructor({ dishid, name, price, quantity, notes, orderId: orderIds, dishNote }) {
    this.dishid = dishid
    this.name = name
    this.price = parseFloat(price) || 0
    this.quantity = parseInt(quantity) || 0
    this.notes = Array.isArray(notes) ? notes : [];
    this.orderIds = Array.isArray(orderIds) ? orderIds : [];
    this.dishNote = dishNote
  }
    toJSON() {
    return {
      dishid: this.dishid,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      notes: this.notes,
      orderIds: this.orderIds,
      dishNote: this.dishNote,
    }
  }
  static fromJSON(data) {
    return new Dish(data)
  }
}

module.exports = { Dish }