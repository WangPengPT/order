const { appState } = require('../state.js');
const { tablesPassword } = require('../model/tableManager.js')
const { logger } = require('../utils/logger.js')
const { TableStatus } = require('../model/TableStatus.js')

function addNewTable(tableData) {
  try {

    const newId = String(tableData.id)
    if (!newId) { throw new Error("Invalid table id") }
    // 简单检查是否有重复 ID（可选）
    const exists = appState.tables.getTableById(newId)
    if (exists) {
      throw new Error("The table already exist")
    }

    // 添加桌子
    appState.tables.addTable(tableData)

    const res = appState.tables.getTableById(tableData.id)
    return { success: true, data: res.toJSON() };
  } catch (err) {
    console.warn("Error: ", err.message)
    return { success: false, message: err.message };
  }
}


function tableLogin(io) {
  io.on("client_login", (value, cb) => {
    try {
      const id = value.table
      const table = tablesPassword.tables.get(id)
      const res = table.checkPassword(value.password)
      cb(res)
    } catch (error) {
      console.warn("Error: ", error.message)
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
      console.warn("Error: ", e.messsage)
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
    if (tableData.status === null) throw new Error("Invalid table status")
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

    const table = appState.tables.getTableById(id)
    return { success: true, data: table.toJSON() }
  } catch (error) {
    console.warn("Error: ", error.message)
    return { success: false, data: error.message }
  }
}

function removeTable(id) {
  try {
    // 更新服务器状态
    const res = appState.tables.removeTable(id)

    if (!res) throw new Error('Faild delete table')

    return { success: true, tables: true }
  } catch (error) {
    console.warn("Error: ", error.message)
    return { success: false, message: error.message }
  }
}

function cleanTable(id) {
  try {
    // 更新服务器状态
    const table = appState.tables.getTableById(id)

    if (table == null) throw new Error("Not found the table")
    table.clearTable()

    const cleanedTable = appState.tables.getTableById(id)
    // console.log(cleanedTable)
    if (cleanedTable.status !== TableStatus.FREE) throw new Error('Faild clean table')

    return { success: true, data: cleanedTable.toJSON() }
  } catch (error) {
    console.warn("Error: ", error.message)
    return { success: false, message: error.message }
  }
}


function getTableById(id) {
  try {
    if (!id || id === null) throw new Error("Invalid Input")
    const table = appState.getTableById(id)
    if (!table) throw new Error('Not found the table')
    return { success: true, data: table.toJSON() }
  } catch (error) {
    console.warn("Error: ", error.message)
    return { success: false, data: error.message }
  }
}

function clientCmd(id,cmd) {
  try {
    // 更新服务器状态
    const table = appState.tables.getTableById(id)

    if (table == null) throw new Error("Not found the table")
    if (table.status !== TableStatus.SEATED) {
            throw new Error(`Mesa ${id} não tem permissão`)
        }

    const result = table.clientCmd(cmd);

    if(!result[cmd.cmd]) throw new Error("Error Update")
    return {success: true, data: result }

  } catch (error) {
    console.warn("Error: ", error.message)
    return {success:false, data: error.message}
  }
}

function clickMsg(id,cmd)
{
  try {
    // 更新服务器状态
    const table = appState.tables.getTableById(id)

    if (table == null) throw new Error("Not found the table")
    table.clickMsg(cmd);
  } catch (error) {
    console.warn("Error: ", error.message)
  }
}



module.exports = {
  addNewTable,
  updateTableWithoutOrder,
  removeTable,
  cleanTable,
  updateTablePassword,
  refreshTablePassword,
  tableLogin,
  getTableById,
  clientCmd,
  clickMsg
};
