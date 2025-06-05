const { appState, AppState } = require('../state.js');
const db = require('../filedb.js')

function loadAppState() {
    const data = db.loadAppStateData()
    if (data) {
        const loaded = AppState.fromJSON(data)

        // 用数据覆盖全局 appState
        appState.updateAppState(loaded)

        console.log("已加载 AppState 数据")
    }
}


function saveAppState() {
    db.saveAppStateData(appState)
}

module.exports = {
  loadAppState,
  saveAppState,
};
