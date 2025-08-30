const { Dish } = require("./dish.js")
const { PeopleType } = require("./people.js")
const { TableStatus } = require("./TableStatus.js")

class Table {
  constructor({ id, peopleType = new PeopleType(), status = TableStatus.FREE, order = [] }) {
    this.id = id;
    this.peopleType = peopleType instanceof PeopleType ? peopleType : new PeopleType(peopleType);

    // 修改这里，自动处理葡语状态
    this.status = typeof status === 'string'
      ? TableStatus.fromString(status) || TableStatus.fromPt(status) || status
      : status;

    if (!(this.status instanceof TableStatus)) {
      throw new Error(`无效状态: ${status}，有效值为: ${TableStatus.values().map(s => s.value).join(', ')}`);
    }

    this.order = order.map(item => new Dish(item));

    this.msg_pay = false;
    this.msg_call = false;
    this.nif_note = {nif:undefined, note:undefined}

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
      this.order.push(new Dish(dishData))
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
    this.status = TableStatus.FREE;
    this.peopleType = new PeopleType({ adults: 0, children: 0 })
    this.order = []
    this.msg_pay = false
  }

  clientCmd(cmd) {
    if (cmd.cmd == 'call') {
      this.msg_call = true;
    }

    if (cmd.cmd == 'pay') {
      this.msg_pay = true;
      this.nif_note = {nif:cmd.nif? cmd.nif : undefined, note:cmd.note? cmd.note : undefined};
    }

  }

  clickMsg(cmd) {
    if (cmd == 'call') {
      this.msg_call = false;
    }

    // if (cmd == 'pay') {
    //   this.msg_pay = false;
    // }

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

    return new Table(raw)
  }

}

class TableVer {
  constructor({ id, password, time }) {
    this.id = id
    this.password = password
    this.time = time
  }

  checkToday(time) {
    if (!time) return false;
    const now = new Date();
    return now.getDay() == time.getDay();
  }

  make_password() {
    if (this.checkToday(this.time)) {
      return this.password;
    }


    const num = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

    this.password = num.toString();
    this.time = new Date();

    return this.password;
  }

  checkPassword(password) {
    return password == this.password && password != '' && password != null
  }

  getPassword() {
    return this.password
  }

  changePassword(password) {
    this.password = password
    return this.password
  }

  toJSON() {
    return {
      id: this.id,
      password: this.password,
      time: this.time ? this.time.toISOString() : null
    };
  }

  static fromJSON(data) {
    return new TableVer({
      id: data.id,
      password: data.password,
      time: data.time ? new Date(data.time) : null
    });
  }

}

module.exports = { Table, TableVer }