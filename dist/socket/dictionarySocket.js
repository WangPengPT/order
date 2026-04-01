const DictionaryService = require("../services/dictionaryService")
const { logger } = require("../utils/logger")

class DictionarySocket {
    constructor(io, dictionaryService = new DictionaryService()) {
        this.io = io
        this.dictionaryService = dictionaryService
    }

    async get(arrayIds, callback) {
        try{
            logger.info(`[Dictionary Socket] 根据ID获取字典，ID：${arrayIds}`)
            const all = this.dictionaryService.getAll()
            const result = []

            for(const dictionary of all){
                if(arrayIds.includes(dictionary.id)){
                    result.push(dictionary)
                }
            }

            if(callback) callback({success: true, code: 200, data: result})
        }catch(error){
            logger.error(`[Dictionary Socket] 根据ID获取字典失败，原因：${error.message}`)
            if(callback) callback({success: false, code: 400, data: error.message})
        }
    }

    async update(data, callback) {
        try{
            logger.info(`[Dictionary Socket] 请求更改字典数据，数据：${JSON.stringify(data)}`)
            const result = await this.dictionaryService.update(data)
            if (!result.success) {
                throw new Error(result.data)
            }
            if(callback) callback({success: true, code: 200, data: result.data})
        }catch(error){
            logger.error(`[Dictionary Socket] 更改字典数据失败，原因：${error.message}`)
            if(callback) callback({success: false, code: 400, data: error.message})
        }
    }


    async reset(callback){
        try{
            logger.info(`[Dictionary Socket] 重置字典数据`)
            await this.dictionaryService.reset()
            const all = this.dictionaryService.getAll()

            if(callback) callback({success: true, code: 200, data: all})
        }catch(error){
            logger.error(`[Dictionary Socket] 重置字典数据失败，原因：${error.message}`)
            if(callback) callback({success: false, code: 400, data: error.message})
        }
    }

    async registerHandlers(socket) {

        socket.emit("dictionary_all", await this.dictionaryService.getAll())
        socket.on("get_dictionary_all", async (callback) => {if(callback) callback(await this.dictionaryService.getAll())})

        socket.on("get_dictionary_by_arrayIds", async (arrayIds, callback) => { await this.get(arrayIds, callback) })

        socket.on("manager_update_dictionary", async (arrayData, callback) => { await this.update(arrayData, callback) })

        socket.on("manager_reset_dictionary", async (callback) => { await this.reset(callback)})

    }

}

module.exports = DictionarySocket;