const { appState } = require('../state.js');
const { tablesPassword } = require('../model/tableManager.js')

function addNewTable(io, tableData) {
  try {
    
    const newId = tableData.id

    if (!newId) { throw new Error("Invalid table id") }

    // 简单检查是否有重复 ID（可选）
    const exists = appState.tables.getTableById(newId)
    if (exists) {
      return { success: false, message: '桌子 ID 已存在' };
    }

    // 添加桌子
    appState.tables.addTable(tableData)

    // 广播新桌子列表给管理端
    sendTablesInfo(io)

    return { success: true, tables: appState.tables.toJSON() };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function sendTablesInfo(io) {
  io.emit('send_tables', appState.tables.toJSON());
  io.emit('send_tables_password', tablesPassword.toJSON())
}

function tableLogin(io) {
  io.on("client_login", (value, cb) => {
    try {
      const id = value.table
      const table = tablesPassword.tables.get(id)
      const res = table.checkPassword(value.password)
      cb(res)
    } catch (error) {
      cb({ success: false, message: error.message })
    }
  })
}

function updateTablePassword(io) {
  io.on("table_password_update",  (value, cb) => {
    try {
        const id = value.tableId
        const password = value.password
        tablesPassword.changePassword(id, password)
        cb(tablesPassword.toJSON())
    }catch (e) {
      cb({ success: false, message: e.message });
    }
      })
}

function refreshTablePassword(io) {
  io.on('table_password_refresh', (id, cb) => {
    try {
      const res = tablesPassword.makePassword(id)
      cb(res)
    } catch (e) {
      cb({ success: false, message: e.message });
    }
  })
}

function updateTable(tableData) {
  try {

    const id = tableData.id

    const oldTable = appState.tables.getTableById(id)

    if (!oldTable) {
      new Error("Not found old table")
    }

    // 更新服务器状态
    appState.tables.updateTable(tableData)
    
    const newTable = appState.tables.getTableById(id)

    // 空闲变用餐中 赋予密码
    if (oldTable.status === '空闲' && newTable.status === '用餐中' ) {
      tablesPassword.makePassword(id)
      
    }

    // 已支付变空闲 自动清空桌子
    if (oldTable.status === '已支付' && newTable.status === '空闲' ) {
      const cleanRes = cleanTable(id)
      if (!cleanRes.success) throw new Error("Clean Error")
    }

    return { success: true, tables: appState.tables.toJSON() }
  } catch (error) {
    return { success: false, message: error.message }
  }
}

function removeTable(io, id) {
  try {
    // 更新服务器状态
    appState.tables.removeTable(id)

    // 广播更新后的 tables 给所有客户端
    io.emit('remove_table', appState.tables.toJSON())

    return { success: true, tables: appState.tables.toJSON() }
  } catch (error) {
    return { success: false, message: error.message }
  }
}

function cleanTable(id) {
  try {
    // 更新服务器状态
    appState.tables.clearTable(id)

    // 广播更新后的 tables 给所有客户端
    //io.emit('clean_table', appState.tables.toJSON())

    return { success: true, tables: appState.tables.toJSON() }
  } catch (error) {
    return { success: false, message: error.message }
  }
}

function sendTableDish(io, id) {
    const dishes = appState.getDishesJSONByTable(id)
    io.emit("client_orders", dishes)
}


module.exports = {
  addNewTable,
  updateTable,
  removeTable,
  cleanTable,
  sendTableDish,
  sendTablesInfo,
  updateTablePassword,
  refreshTablePassword,
  tableLogin
};
