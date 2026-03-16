const VarietyShopsRepository = require("../repositories/varietyShopsRepository");
const {logger} = require("../utils/logger");


class VarietyShopsService {

    constructor( varietyShopsRepository = new VarietyShopsRepository() ) {
        this.varietyShopsRepository = varietyShopsRepository;
    }

    async update(id, data) {
        try{
            let result = await this.get(id);
            if(!result.success) {
                return result;
            }

            if(result.data){
                await this.varietyShopsRepository.update(id, data);
            }else{
                await this.varietyShopsRepository.save(id, data);
            }

            return {success: true, data: data};
        } catch ( error ) {
            logger.error(`[VarietyShopsService] 保存多类型商店数据错误，id=${id}，原因：${error.message}`)
            return {success: false, data: error.message};
        }
    }

    async get(id){
        try{
            const data = await this.varietyShopsRepository.get(id);

            return {success: true, data:data}

        } catch ( error ) {
            logger.error(`[VarietyShopsService] 获取多类型商店数据错误，id=${id}，原因：${error.message}`)
            return {success: false, data:error.message};
        }
    }

    async getAll(){
        try{
            let result = await this.varietyShopsRepository.getAll();
            result = result.sort((a, b) => a.sortValue - b.sortValue);
            return result
        } catch ( error ) {
          logger.error(`[VarietyShopsService] 获取所有多类型商店数据错误，原因：${error.message}`)
            return []
        }
    }

    async delete(id){
        try{
            await this.varietyShopsRepository.delete(id)
            return {success: true, data: id};
        }catch(error){
            logger.error(`[VarietyShopsService] 删除多类型商店数据错误，原因：${error.message}`)
            return {success: false, data: error.message}
        }
    }
}

module.exports = VarietyShopsService