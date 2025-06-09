const { Dish } = require("./dish.js")
const { PeopleType } = require("./people.js")

class Table {
  constructor({ id, peopleType = new PeopleType(), status = '空闲', order = [] }) {
    this.id = id

    // ✅ 确保 peopleType 是 PeopleType 实例
    this.peopleType = peopleType instanceof PeopleType
      ? peopleType
      : new PeopleType(peopleType?.adults || 0, peopleType?.childres || 0)

    this.status = status
    this.order = order.map(item => new Dish(item))

    const validTypes = ['空闲', '已预订', '已支付', '用餐中'];
    if (!validTypes.includes(status)) {
      throw new Error(`无效类型: ${status}，应为 ${validTypes.join(', ')}`);
    }
  }

  get people() {
    return this.getTotalPeople()
  }

  getTotalPeople() {
    return this.peopleType.getCount()
  }

  // 增加点菜
addOrderItem(dishData) {
  const existing = this.order.find(i => i.dishid === dishData.dishid)
  if (existing) {
    existing.quantity += dishData.quantity
  } else {
    this.order.push(new Dish(dishData))
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
    this.status = '空闲'
    this.peopleType = new PeopleType()
    this.order = []
  }

  toJSON() {
    return {
      id: this.id,
      people: this.people,
      status: this.status,
      order: this.order.map(dish => dish.toJSON())
    }
  }

deteleDishesByIds(dishesIdAndQty) {
  if (!Array.isArray(dishesIdAndQty)) return;

  dishesIdAndQty.forEach(({ dishid, quantity }) => {
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
  });
}



  static fromJSON(data) {
    return new Table(data)
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