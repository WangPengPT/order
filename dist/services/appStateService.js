const { appState, AppState } = require('../state.js');
const { tablesPassword } = require('../model/tableManager.js')
const db = require('../filedb.js')
const { logger } = require('../utils/logger.js');
const { TableStatus } = require('../model/TableStatus.js');

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
        console.log("saved dishes: ", appState.specialDishes)
        db.saveData("menu",appState.menu);
    } catch (error) {
        console.warn("Error: ", error)
    }
}

function saveMonthRates() {
    try{
        const monthRates = []
        appState.menu.forEach(item => {
            if(item.category !== ""){
                monthRates.push({
                    id : item.id,
                    category : item.category,
                    handle : item.handle,
                    name : item.name === "" ? item.subname : item.name,
                    monthRate : item.monthRates ? item.monthRates : {likes:0, rates:0}
                })
            }
        })
        const now = new Date();
        db.saveMonthRates("monthrates_"+now.getFullYear()+"_"+now.getMonth(),monthRates)
    }catch(error){
        console.warn("Error: ", error)
    }
}

function clearnMonthRates() {
    try{
        appState.menu.forEach(item => {
            item.monthRate.likes = 0
            item.monthRate.rates = 0
        })
    }catch(error){
        console.warn("Error: ", error)
    }
}

function getMonthRatesWithDate(year, month){
    try{
        const result = db.loadMonthRates("monthrates_"+year+"_"+month,"file not found")
        if(result==="file not found"){
            return { success: false, data:result }
        }else{
            return { success: true, data: result }
        }
    }catch(error){
        console.warn("Error: ", error)
        return { success: false, data: error.message }
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
        const holidayPrice = appState.holidayPrice
        const res = {
            success: true, data: {
                lunchPrice: lunchPrice,
                dinnerPrice: dinnerPrice,
                holidayPrice: holidayPrice
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

function changeTable(oldId, newId) {
    try {
        const table = appState.tables.get(oldId)
        if (!table) {
            throw new Error("Not found the table")
        }
        const newTable = appState.tables.get(newId)
        if (!newTable) {
            throw new Error("Not found the new table")
        }

        if (newTable.staus === TableStatus.FREE) {
            newTable.update(table)
        } else {
            throw new Errro(`The new table status is invalid`)
        }

        return {
            success: true,
            data: appState.tables.toJSON()
        }
    } catch (error) {
        return {
            success: false,
            data: error.message
        }
    }
}


module.exports = {
    loadAppState,
    saveAppState,
    saveMonthRates,
    clearnMonthRates,
    getMonthRatesWithDate,
    updatePrice,
    getPrice,
    setFestivalDay,
    getFestivalDay,
    getTableTotalAmout,
    getCurrentPrice,
    getAllTables,
    changeTable,
};
