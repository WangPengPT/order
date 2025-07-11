const { webPageDesignService } = require("../services/webPageDesignService")



class WebPageDesignSocket{
    constructor(io) {
        this.io = io
    }

    getPageById(id, callback) {
        const result = webPageDesignService.getWebpageById(id)
        callback(result)
    }

     registerHandlers(socket) {
        socket.on("manager_get_page", (id, cb) => { this.getPageById(id, cb) })
     }
}

module.exports = { WebPageDesignSocket }