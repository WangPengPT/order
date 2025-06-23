const { appState, AppState } = require('../state.js');
const { tablesPassword } = require('../model/tableManager.js')
const db = require('../filedb.js')
const { logger } = require('../utils/logger.js')

function loadAppState() {
    try {
        const data = db.loadAppStateData()
        if (data) {
            const loaded = AppState.fromJSON(data)
            // 用数据覆盖全局 appState
            appState.updateAppState(loaded)
            logger.info(`加载现有数据`)
        } else {
            logger.info(`创建新数据`)
        }
        //tablesPassword.init(appState.tables)
    } catch (error) {
        console.warn("Error: ", error)
    }


}


function getAllTables() {
    try {
        const tables = appState.tables
        return {
            success: true,
            data: tables.toJSON()
        }
    } catch (error) {
        console.warn("Error: ", error)
        return {
            success: false,
            data: error.message
        }
    }
}

function saveAppState() {
    try {
        db.saveAppStateData(appState)
    } catch (error) {
        console.warn("Error: ", error)
    }

}

function updatePrice(lunchPrice, dinnerPrice) {
    try {
        const newAppState = appState.updatePrice(lunchPrice, dinnerPrice)
        const data = {
            lunchPrice: newAppState.lunchPrice,
            dinnerPrice: newAppState.dinnerPrice
        }
        return { success: true, data: data }
    } catch (error) {
        console.warn("Error: ", error)
        return { success: false, data: error.message }
    }

}

function setFestivalDay(value) {
    try {
        if (typeof value !== "boolean") { throw new Error('Invalid input') }
        appState.setFestivalDay(value)
        const res = { success: true, data: appState.isFestiveDay }

        return res
    } catch (error) {
        console.warn("Error: ", error)
        return { success: false, data: error.message }
    }

}

function getFestivalDay() {
    return appState.isFestiveDay
}

function getPrice() {

    try {
        const lunchPrice = appState.lunchPrice
        const dinnerPrice = appState.dinnerPrice
        const res = {
            success: true, data: {
                lunchPrice: lunchPrice,
                dinnerPrice: dinnerPrice
            }
        }
        return res
    } catch (error) {
        console.warn("Error: ", error)
        return { success: false, data: error.message }
    }
}

function getTableTotalAmout(tableId) {
    try {
        if (!tableId) throw new Error("Non Input Value")
        const prices = appState.getTableTotalAmout(tableId)
        const res = {
            success: true,
            data:
                prices
        }
        return res
    } catch (error) {
        console.warn("Error: ", error)
        return { success: false, data: error.message }
    }

}

function getCurrentPrice() {
    try {
        const price = appState.getCurrentPrice()
        const res = {
            success: true,
            data:
                price
        }
        return res
    } catch (error) {
        console.warn("Error: ", error)
        return { success: false, data: error.message }
    }
}

module.exports = {
    loadAppState,
    saveAppState,
    updatePrice,
    getPrice,
    setFestivalDay,
    getFestivalDay,
    getTableTotalAmout,
    getCurrentPrice,
    getAllTables
};
