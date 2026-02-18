class Dish {
  constructor({ dishid, name, name_pt, name_en, name_cn, subname, subname_pt, subname_en, subname_cn, price, deliveryPrice, quantity, notes, notesAndId, orderIds, dishNote, orderType, discount, deliveryDiscount, category, activitys}) {
    this.dishid = dishid

    this.name = name
    this.name_pt = name_pt
    this.name_en = name_en
    this.name_cn = name_cn

    this.subname = subname
    this.subname_pt = subname_pt
    this.subname_en = subname_en
    this.subname_cn = subname_cn

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
  }

  toJSON() {
    return {
      dishid: this.dishid,
      name: this.name,
      name_pt: this.name_pt,
      name_en: this.name_en,
      name_cn: this.name_cn,
      subname: this.subname,
      subname_pt: this.subname_pt,
      subname_en: this.subname_en,
      subname_cn: this.subname_cn,
      price: this.price,
      deliveryPrice: this.deliveryPrice,
      quantity: this.quantity,
      notes: this.notes,
      orderIds: this.orderIds,
      dishNote: this.dishNote,
      orderType: this.orderType,
      discount: this.discount,
      deliveryDiscount: this.deliveryDiscount,
      category: this.category
    }
  }

  static fromJSON(data) {
    return new Dish(data)
  }
}

module.exports = { Dish }