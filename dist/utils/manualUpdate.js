const {appState} = require('../state.js');
const {logger} = require("./logger");


class ManualUpdate {
    constructor(menuService) {
        this.menuService = menuService
    }

    async run(){
        logger.info("执行菜单数据迁移")
        const menu = await this.menuService.getMenu()
        let update_times = 0
        for(let i = 0; i < menu.length; i++) {
            const dish = menu[i]
            if(!dish.name_pt && dish.name){
                dish.name_pt = dish.name
                update_times += 1
            }
            if(!dish.subname_pt && dish.subname){
                dish.subname_pt = dish.subname
                update_times += 1
            }
        }
        appState.menu = menu
        await this.menuService.save()
        if(update_times){
            logger.info("执行了"+update_times+"项数据迁移")
        }
        return update_times
    }

}

module.exports = {ManualUpdate};