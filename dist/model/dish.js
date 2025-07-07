class Dish {
  constructor({ dishid, name, price, quantity, notes, orderId: orderIds, discount }) {
    this.dishid = dishid
    this.name = name
    this.price = parseFloat(price) || 0
    this.quantity = parseInt(quantity) || 0
    this.notes = Array.isArray(notes) ? notes : [];
    this.orderIds = Array.isArray(orderIds) ? orderIds : [];
    this.discount = discount || 0
  }
  toJSON() {
    return {
      dishid: this.dishid,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      notes: this.notes,
      orderIds: this.orderIds,
      discount: this.discount,
      finalPrice: this.finalPrice
    }
  }
  static fromJSON(data) {
    return new Dish(data)
  }

  get finalPrice() {
    if (this.discount && this.discount !== 0) {
      const dis = (100 - this.discount) * 0.01
      return (this.price * dis).toFixed(2)
    } else {
      return this.price
    }
  }
}

module.exports = { Dish }