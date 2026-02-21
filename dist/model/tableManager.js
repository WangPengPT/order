const { Table } = require("./table.js")

class TableManager {
  constructor(initialTables = []) {
    this.tables = new Map()
    initialTables.forEach(tableData => {
      this.tables.set(tableData.id, new Table(tableData))
    })
  }

  getAllTables() {
    return Array.from(this.tables.values()).sort((a, b) => a.id - b.id)
  }

  getTableById(id) {
    return this.tables.get(id)
  }

  addTable(tableData) {
    if (this.tables.has(tableData.id)) {
      throw new Error(`桌号${tableData.id}已存在！`)
    }
    return this.tables.set(tableData.id, new Table(tableData))
  }

  removeTable(id) {
    return this.tables.delete(id)
  }

  updateTableWithoutOrder(updatedTableData) {
    const table = this.tables.get(updatedTableData.id);
    if (!table) {
      throw new Error(`桌号${updatedTableData.id}不存在！`);
    }
    const res = table.updateTableWithoutOrder(updatedTableData)
    return res
  }

  clearAll() {

    Array.from(this.tables.values()).forEach( (table) => {
      table.clearTable();
    });

  }

  sortById(){
    let tables = Array.from([...this.tables])
    tables = tables.sort((a, b) => a[0] - b[0])
    this.tables = new Map(tables)
  }

 toJSON() {
    return Array.from(this.tables.values()).map(table => ({
      id: table.id,
      people: table.people,
      peopleType: table.peopleType,
      status: table.status.toPt(), // 使用TableStatus的toPt方法转换为葡萄牙语
      order: table.order.map(item => ({
        dishid: item.dishid,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        orderIds: item.orderIds,
        notes: item.notes
      })),
      msg_pay: table.msg_pay,
      msg_call: table.msg_call,
      nif_note: table.nif_note,
      lastOrderTime: table.lastOrderTime,
      users: table.users,
      password: table.password
    }));
  }

  static fromJSON(data) {
    if (!Array.isArray(data)) {
      throw new Error('TableManager.fromJSON 需要数组类型数据')
    }
    
    // 预处理数据，将葡萄牙语状态转换回中文
    const processedData = data.map(tableData => {
      return {
        ...tableData,
        status: TableStatus.fromPt(tableData.status).value // 转换为中文状态值
      }
    });
    
    return new TableManager(processedData)
  }
}

module.exports = { TableManager }
