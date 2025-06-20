const { appState } = require('../state.js');
const { tablesPassword } = require('../model/tableManager.js')
const { logger } = require('../utils/logger.js')

function addNewTable(io, tableData) {
  try {

    const newId = tableData.id

    if (!newId) { throw new Error("Invalid table id") }
    // 简单检查是否有重复 ID（可选）
    const exists = appState.tables.getTableById(newId)
    if (exists) {
      throw new Error("The table already exist")
    }

    // 添加桌子
    appState.tables.addTable(tableData)

    // 广播新桌子列表给管理端
    sendTablesInfo(io)

    return { success: true, tables: appState.tables.toJSON() };
  } catch (err) {
    console.warn("Error: ", err)
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
      console.warn("Error: ", error)
      cb({ success: false, message: error.message })
    }
  })
}

function updateTablePassword(io) {
  io.on("table_password_update", (value, cb) => {
    try {
      const id = value.tableId
      const password = value.password
      tablesPassword.changePassword(id, password)
      cb(tablesPassword.toJSON())
    } catch (e) {
      console.warn("Error: ", e)
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
      console.warn("Error: ", e)
      cb({ success: false, message: e.message });
    }
  })
}

function updateTableWithoutOrder(tableData) {
  try {

    const id = tableData.id

    const oldStatus = appState.tables.getTableById(id).status.value

    // 更新服务器状态
    appState.tables.updateTableWithoutOrder(tableData)

    const newStatus = appState.tables.getTableById(id).status.value

    // 已支付变空闲 自动清空桌子
    if (oldStatus === '已支付' && newStatus === '空闲') {
      const cleanRes = cleanTable(id)
      logger.info(`自动清除桌子 桌号 - ${tableData.id}`)
      if (!cleanRes.success) throw new Error("Clean Error")
    }

    return { success: true, tables: appState.tables.toJSON() }
  } catch (error) {
    console.warn("Error: ", error)
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
    console.warn("Error: ", error)
    return { success: false, message: error.message }
  }
}

function cleanTable(id) {
  try {
    // 更新服务器状态
    const table = appState.tables.getTableById(id)

    if (table == null) throw new Error("Not found the table")
    table.clearTable()

    return { success: true, tables: appState.tables.toJSON() }
  } catch (error) {
    console.warn("Error: ", error)
    return { success: false, message: error.message }
  }
}


function getTableById(id) {
  try {
    if (!id) throw new Error("Invalid Input")
    const table = appState.getTableById(id)
    if (!table) throw new Error('Not found the table')
    return { success: true, data: table.toJSON() }
  } catch (error) {
    console.warn("Error: ", error)
    return { success: false, data: error.message }
  }
}


module.exports = {
  addNewTable,
  updateTableWithoutOrder,
  removeTable,
  cleanTable,
  sendTablesInfo,
  updateTablePassword,
  refreshTablePassword,
  tableLogin,
  getTableById
};
