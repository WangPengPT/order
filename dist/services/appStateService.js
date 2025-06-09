const { appState, AppState } = require('../state.js');
const { tablesPassword } = require('../model/tableManager.js')
const db = require('../filedb.js')

function loadAppState() {
    const data = db.loadAppStateData()
    if (data) {
        const loaded = AppState.fromJSON(data)
        // 用数据覆盖全局 appState
        appState.updateAppState(loaded)

        console.log("已加载 AppState 数据")
    }

    tablesPassword.init(appState.tables)

}


function saveAppState() {
    db.saveAppStateData(appState)
}

function updatePrice(adultPrice, childPrice) {
    try {
        const newAppState = appState.updatePrice(adultPrice, childPrice)
        const data = {
            adultPrice: newAppState.adultPrice,
            childPrice: newAppState.childPrice
        }
        return { success: true, data: data }
    } catch (error) {
        return { success: false, data: error.message }
    }

}

function getPrice() {

    try {
        const childPrice = appState.childPrice
        const adultPrice = appState.adultPrice
        const res = {
            success: true, data: {
                childPrice: childPrice,
                adultPrice: adultPrice
            }
        }
        return res
    } catch (error) {
        return { success: false, data: error.message }
    }
}

module.exports = {
    loadAppState,
    saveAppState,
    updatePrice,
    getPrice
};
