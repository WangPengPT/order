const { appState } = require('../state.js');

function addNewTable(tableData) {
  const exists = appState.tables.getTableById(tableData.id);
  if (exists) {
    return { success: false, message: '桌子 ID 已存在' };
  }

  appState.tables.addTable(tableData);
  return { success: true };
}

function updateTable(tableData) {
  try {
    appState.tables.updateTable(tableData);
    return { success: true };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

function removeTable(id) {
  try {
    appState.tables.removeTable(id);
    return { success: true };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

function cleanTable(id) {
  try {
    appState.tables.clearTable(id);
    return { success: true };
  } catch (e) {
    return { success: false, message: e.message };
  }
}


module.exports = {
  addNewTable,
  updateTable,
  removeTable,
  cleanTable,
};
