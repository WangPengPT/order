const { Dish } = require("./dish.js")
const { PeopleType } = require("./people.js")
const { TableStatus } = require("./TableStatus.js")

class Table {
  constructor({ id, peopleType = new PeopleType(), status = TableStatus.FREE, order = [], msg_pay , msg_call , nif_note, discountRate = 0, discountFixed = 0, lastOrderTime = 0, users = [], password = null, passwordTime = null, firstOrderUsed = false }) {
    this.id = id
    this.peopleType = peopleType instanceof PeopleType ? peopleType : new PeopleType(peopleType)

    this.status = typeof status === 'string'
      ? TableStatus.fromString(status) || TableStatus.fromPt(status) || status
      : status;

    if (!(this.status instanceof TableStatus)) {
      throw new Error(`无效状态: ${status}，有效值为: ${TableStatus.values().map(s => s.value).join(', ')}`);
    }

    this.order = order.map(item => new Dish(item))

    this.msg_pay = msg_pay || false
    this.msg_call = msg_call || false
    this.nif_note = nif_note || {nif:undefined, note:undefined}
    this.discountRate = this.normalizeDiscountRate(discountRate)
    this.discountFixed = this.normalizeDiscountFixed(discountFixed)
    this.lastOrderTime = lastOrderTime
    this.users = users
    this.password = password
    this.passwordTime = passwordTime ? new Date(passwordTime) : null
    this.firstOrderUsed = firstOrderUsed

    this.recordProps(this)
  }

  get people() {
    return this.getTotalPeople()
  }

  getTotalPeople() {
    return this.peopleType.getCount()
  }

  recordProps(target) {
    const keys = Object.keys(target)
    target._dataKeys = keys.filter(k => !k.startsWith('_'))
  }

  // 增加点菜
  addOrderItem(dishData, orderId) {
    const existing = this.order.find(i => i.dishid === dishData.dishid && i.name === dishData.name && i.price === dishData.price)
    if (existing) {
      existing.quantity += dishData.quantity
      existing.orderIds.push(orderId)
    } else {
      const newDish = new Dish(dishData)
      this.order.push(newDish)
      const ord = this.order.find(i => i.dishid === dishData.dishid && i.name === dishData.name && i.price === dishData.price)
      ord.orderIds.push(orderId)
    }
  }


  addOrderItems(items, orderId) {
    items.forEach(item => {
      this.addOrderItem(item, orderId)
    })
  }

  updateTableWithoutOrder(updatedTableData) {

    // ✅ 更新 peopleType
    if (updatedTableData.peopleType) {
      this.peopleType = new PeopleType({ adults: updatedTableData.peopleType.adults, children: updatedTableData.peopleType.children });
    }

    // ✅ 更新 status
    if (updatedTableData.status) {
      const status =
        typeof updatedTableData.status === 'string'
          ? TableStatus.fromString(updatedTableData.status) || TableStatus.fromPt(updatedTableData.status)
          : updatedTableData.status;

      if (!(status instanceof TableStatus)) {
        throw new Error(`无效状态: ${updatedTableData.status}，有效值为: ${TableStatus.values().map(s => s.value).join(', ')}`);
      }
      this.status = status;
    }

    // 桌级折扣（百分比），例如 10 表示 10%
    if (Object.prototype.hasOwnProperty.call(updatedTableData, 'discountRate') || Object.prototype.hasOwnProperty.call(updatedTableData, 'discount')) {
      const nextRate = Object.prototype.hasOwnProperty.call(updatedTableData, 'discountRate')
        ? updatedTableData.discountRate
        : updatedTableData.discount;
      this.discountRate = this.normalizeDiscountRate(nextRate);
    }

    // 桌级固定减免（金额），在百分比折扣之后再从应付中扣除
    if (
      Object.prototype.hasOwnProperty.call(updatedTableData, 'discountFixed') ||
      Object.prototype.hasOwnProperty.call(updatedTableData, 'fixedDiscount') ||
      Object.prototype.hasOwnProperty.call(updatedTableData, 'discountAmountFixed')
    ) {
      const nextFixed = Object.prototype.hasOwnProperty.call(updatedTableData, 'discountFixed')
        ? updatedTableData.discountFixed
        : Object.prototype.hasOwnProperty.call(updatedTableData, 'fixedDiscount')
          ? updatedTableData.fixedDiscount
          : updatedTableData.discountAmountFixed;
      this.discountFixed = this.normalizeDiscountFixed(nextFixed);
    }

    return this
  }


  // 移除某个菜品
  removeOrderItem(itemId) {
    this.order = this.order.filter(i => i.dishid !== itemId)
  }

  // 人头总价
  getTablePeopleTotalAmount(adultPrice,childrenPrice){
    const totalAdultPrice = this.peopleType.getPriceCount("adults", adultPrice)
    const totalChildrenPrice = this.peopleType.getPriceCount("children", childrenPrice)
    return totalAdultPrice + totalChildrenPrice
  }

  // 已点菜单总价
  getTableOrdersTotalAmount() {
    return this.order.reduce((sum, item) => {
      return sum + item.price * item.quantity
    }, 0).toFixed(2)  // 保留两位小数
  }

  // 清理桌子，清空订单、人数和状态
  clearTable() {
    this.uniCodes = {}
    this.status = TableStatus.FREE;
    this.peopleType = new PeopleType({ adults: 0, children: 0 })
    this.order = []
    this.msg_call = false
    this.msg_pay = false
    if(this.nif_note) this.nif_note = {nif:undefined, note:undefined}
    this.discountRate = 0
    this.discountFixed = 0
    this.lastOrderTime = 0
    this.users = []

    this.password = null
    this.passwordTime = null
    this.firstOrderUsed = false
  }

  normalizeDiscountRate(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return 0;
    if (n < 0) return 0;
    if (n > 100) return 100;
    return Number(n.toFixed(2));
  }

  normalizeDiscountFixed(value) {
    const n = Number(value);
    if (!Number.isFinite(n) || n < 0) return 0;
    return Number(n.toFixed(2));
  }

  checkToday(time) {
    if (!time) return false
    const now = new Date()
    return now.getDay() == time.getDay()
  }

  makePassword() {
    if (this.checkToday(this.passwordTime)) {
      return this.password
    }
    const num = Math.floor(Math.random() * 8999) + 1000
    this.password = num.toString()
    if(process.env.ADDR == "https://v.xiaoxiong.pt:8000"){
      this.password = '1234'
    }
    this.passwordTime = new Date()
    this.firstOrderUsed = false
    return this.password
  }

  checkPassword(password) {
    return password && password !== '' && password == this.password
  }

  getPassword() {
    return this.password
  }

  changePassword(password){
    if(!password) return
    this.password = password
    this.firstOrderUsed = false
    return this.password
  }

  isFirstOrderFree() {
    return this.firstOrderUsed !== true
  }

  markFirstOrderUsed() {
    this.firstOrderUsed = true
  }

  clientCmd(data) {
    let result = {}
    if (data.cmd == 'call') {
      this.msg_call = true;
      result = { call: true }
    }

    if (data.cmd == 'pay') {
      this.msg_pay = true;
      this.nif_note = {nif:(data.nif? data.nif : undefined), note:(data.note? data.note : undefined)};
      result = { pay: true, nif: this.nif_note.nif, note: this.nif_note.note }
    }
    return {cmd: data.cmd, ...result}
  }

  clickMsg(cmd) {
    if (cmd == 'call') {
      this.msg_call = false;
    }
  }



  deteleDishesByIdAndName(deletedDishes) {
    if (!Array.isArray(deletedDishes)) return;

    deletedDishes.forEach(({ dishid, quantity, name, price }) => {
      if (name === 'My BOX' || name.toLowerCase() === 'pato assado') {
        const index = this.order.findIndex(d => d.name == name && d.price == price);
        if (index === -1) {
          console.warn('未找到 dishid:', dishid, '当前订单:', this.order.map(d => d.dishid));
          return;
        }
        const dish = this.order[index];
        dish.quantity -= quantity;
        if (dish.quantity <= 0) {
          this.order.splice(index, 1);
        }
      }
      else {
        if (!dishid || !Number.isInteger(quantity) || quantity <= 0) {
          console.warn('跳过非法输入:', { dishid, quantity });
          return;
        }

        const index = this.order.findIndex(d => d.dishid == dishid); // ✅ 使用 == 宽松比较

        if (index === -1) {
          console.warn('未找到 dishid:', dishid, '当前订单:', this.order.map(d => d.dishid));
          return;
        }

        const dish = this.order[index];
        dish.quantity -= quantity;
        if (dish.quantity <= 0) {
          this.order.splice(index, 1);
        }
      }
    });
  }

  deleteDishByName(ordername) {
    if (!ordername) return;
    const index = this.order.findIndex(d => d.name == ordername);
    if (index === -1) {
      console.warn('未找到 盲盒');
      return;
    }
    this.order.splice(index, 1);
    return this.order
  }

  toJSON() {
    const specialSerializers = {
      status: val => val instanceof TableStatus ? val.toPt() : val,
      peopleType: val => val?.toJSON?.() ?? val,
      order: val => Array.isArray(val) ? val.map(d => d?.toJSON?.() ?? d) : val,
    }

    const result = {}
    for (const key of this._dataKeys) {
      const val = this[key]
      result[key] = specialSerializers[key]?.(val) ?? val
    }
    return result
  }

  static fromJSON(data) {
    const specialParsers = {
      status: val => TableStatus.fromString(val) || TableStatus.fromPt(val) || val,
      peopleType: val => new PeopleType(val),
      order: val => Array.isArray(val) ? val.map(item => new Dish(item)) : [],
    }

    const raw = {}
    for (const key in data) {
      raw[key] = specialParsers[key]?.(data[key]) ?? data[key]
    }
    if (data.passwordTime) {
      raw.passwordTime = new Date(data.passwordTime)
    }

    return new Table(raw)
  }

}

module.exports = { Table }
