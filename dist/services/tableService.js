const { appState } = require('../state.js');

function addNewTable(io, tableData) {
  try {
    // 简单检查是否有重复 ID（可选）
    const exists = appState.tables.getTableById(tableData.id)
    if (exists) {
      return { success: false, message: '桌子 ID 已存在' };
    }

    // 添加桌子
    appState.tables.addTable(tableData)

    // 广播新桌子列表给所有客户端
    io.emit('send_tables', appState.tables.toJSON());

    return { success: true, tables: appState.tables.toJSON() };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function updateTable(io, tableData) {
  try {
    // 更新服务器状态
    appState.tables.updateTable(tableData)

    // 广播更新后的 tables 给所有客户端
    io.emit('update_tables', appState.tables.toJSON())

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

function cleanTable(io, id) {
  try {
    // 更新服务器状态
    appState.tables.clearTable(id)

    // 广播更新后的 tables 给所有客户端
    io.emit('clean_table', appState.tables.toJSON())

    return { success: true, tables: appState.tables.toJSON() }
  } catch (error) {
    return { success: false, message: error.message }
  }
}

module.exports = {
  addNewTable,
  updateTable,
  removeTable,
  cleanTable,
};
