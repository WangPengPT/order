class Dish {
  constructor({ dishid, name, price, deliveryPrice, quantity, notes, orderIds, dishNote, orderType, discount, deliveryDiscount, category, activitys, userName}) {
    this.dishid = dishid
    this.name = name
    this.price = parseFloat(price) || 0
    this.deliveryPrice = parseFloat(deliveryPrice) || 0
    this.quantity = parseInt(quantity) || 0
    this.notes = Array.isArray(notes) ? notes : [];
    this.orderIds = Array.isArray(orderIds) ? orderIds : [];
    this.dishNote = dishNote
    this.orderType = orderType
    this.discount = discount || 0
    this.deliveryDiscount = deliveryDiscount || 0
    this.category = category || undefined
    this.activitys = activitys || ''
    this.userName = userName || null; // 添加点菜人姓名，默认为 null
  }

  toJSON() {
    return {
      dishid: this.dishid,
      name: this.name,
      price: this.price,
      deliveryPrice: this.deliveryPrice,
      quantity: this.quantity,
      notes: this.notes,
      orderIds: this.orderIds,
      dishNote: this.dishNote,
      orderType: this.orderType,
      discount: this.discount,
      deliveryDiscount: this.deliveryDiscount,
      category: this.category,
      userName: this.userName // 添加点菜人姓名
    }
  }

  static fromJSON(data) {
    return new Dish(data)
  }
}

module.exports = { Dish }