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
    return this.tables.get(id) || null
  }

  addTable(tableData) {
    if (this.tables.has(tableData.id)) {
      throw new Error(`桌号${tableData.id}已存在！`)
    }
    this.tables.set(tableData.id, new Table(tableData))
  }

  removeTable(id) {
    return this.tables.delete(id)
  }

  updateTable(updatedTableData) {
    if (!this.tables.has(updatedTableData.id)) {
      throw new Error(`桌号${updatedTableData.id}不存在！`)
    }
    this.tables.set(updatedTableData.id, new Table(updatedTableData))
  }

  clearTable(id) {
    const table = this.tables.get(id)
    if (!table) return false
    table.clear()
    return true
  }

  toJSON() {
    return Array.from(this.tables.values()).map(table => ({
      id: table.id,
      people: table.people,
      maxPeople: table.maxPeople,
      status: table.status,
      order: table.order.map(item => ({
        dishid: item.dishid,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      }))
    }));
  }

  static fromJSON(data) {
    if (!Array.isArray(data)) {
      throw new Error('TableManager.fromJSON 需要数组类型数据')
    }
    // data数组里每个元素应该是桌子序列化的对象，传给构造函数即可
    return new TableManager(data)
  }
}

module.exports = { TableManager }
