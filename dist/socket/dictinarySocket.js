const DictinaryService = require("../services/dictinaryService")
const { logger } = require("../utils/logger")


class DictinarySocket{
    constructor(io, dictinaryService = new DictinaryService()) {
        this.io = io
        this.dictinaryService = dictinaryService
    }

    async updateDictinary(data, callback) {
        logger.info("更新字典")
        const result = await this.dictinaryService.save(data)
        if (result.success) {
            logger.info("字典更新成功")
        } else {
            logger.info("字典更新失败")
        }
        callback(result)

    }


    async registerHandlers(socket) {

        socket.emit("serverSend_clientDictinary", await this.dictinaryService.get())

        socket.emit("serverSend_managerDictinary", await this.dictinaryService.get())

        socket.on("manaherUpdate_serverDictinary", async (data, callback) => await this.updateDictinary(data, callback))

    }
}

module.exports = DictinarySocket;