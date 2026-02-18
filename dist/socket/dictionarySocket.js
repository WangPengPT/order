const DictinaryService = require("../services/dictinaryService")
const { logger } = require("../utils/logger")


class DictionarySocket {
    constructor(io, dictionaryService = new DictinaryService()) {
        this.io = io
        this.dictionaryService = dictionaryService
    }

    /**
     *
     * @param data 更新过或者新建的字典
     * @param callback
     * @returns {Promise<void>}
     */
    async updateDictionary(data, callback) {
        logger.info("更新字典")
        const result = await this.dictionaryService.updateDictionaryWord(data)
        if (result.success) {
            logger.info("字典更新成功")
            callback({ code: 200, ...result })
        } else {
            logger.info("字典更新失败")
            callback({ code: 400, ...result })
        }

    }

    async resetDictionary(callback) {
        logger.info("重置字典")
        const result = await this.dictionaryService.resetDictionary()
        callback({ code: result.success ? 200 : 400, ...result })
    }


    async registerHandlers(socket) {

        socket.emit("serverSend_clientDictinary", await this.dictionaryService.getAll())

        socket.emit("serverSend_managerDictinary", await this.dictionaryService.getAll())

        socket.on("managerUpdate_serverDictionary", async (data, callback) => await this.updateDictionary(data, callback))

        socket.on("managerReset_serverDictionary", async (callback) => await this.resetDictionary(callback))

        socket.on("managerRefresh_serverDictionary", async (callback) => {
            const result = await this.dictionaryService.getAll();
            if (callback) callback(result)
        })

    }
}

module.exports = DictionarySocket;