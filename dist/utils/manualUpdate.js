const {appState} = require('../state.js');
const {logger} = require("./logger");


class ManualUpdate {
    constructor(menuService) {
        this.menuService = menuService
    }

    async run(){
        const result = {}
        result.copy_name_to_name_pt_times = await this.transform_name_to_name_pt()
        result.format_dish_tags_to_array_times = await this.format_tags_to_array()
        return result
    }

    async transform_name_to_name_pt(){
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
        logger.info("执行了"+update_times+"项数据迁移")
        return update_times
    }

    async format_tags_to_array(){
        logger.info("执行分类打印字段改为[]格式")
        const menu = await this.menuService.getMenu()
        let format_times = 0
        for(let i = 0; i < menu.length; i++) {
            const dish = menu[i]
            if(!Array.isArray(dish.tags)){
                if(dish.tags){
                    dish.tags = [dish.tags]
                }else{
                    dish.tags = []
                }
                format_times += 1
            }
        }
        appState.menu = menu
        await this.menuService.save()
        logger.info("执行了"+format_times+"次分类打印字段格式转换")
        return format_times
    }

}

module.exports = {ManualUpdate};