const axios = require('axios');
const crypto = require('crypto');

class ZoneSoftOrderManager {
    constructor(config) {
        this.clientId = config.clientId;
        this.appKey = config.appKey;
        this.appSecret = config.appSecret;
        this.storeId = config.storeId; // 门店 ID 必须明确
        this.baseUrl = 'https://api.zonesoft.org/v3';
    }

    /**
     * 统一上传方法
     * @param {Object} orderData 简化后的业务订单
     */
    async uploadOrder({ customerId, items, serie }) {
        // 如果没有传入 serie，尝试自动获取该门店可用的第一个 FT 系列
        const targetSerie = serie || await this._getAutoSerie();

        const payload = {
            invoicedocument: {
                doc: "FT",
                serie: targetSerie,
                numero: 0,
                data: new Date().toISOString().split('T')[0],
                cliente: customerId || 0, // 0 通常代表最终消费者
                sales: items.map(item => ({
                    artigo: item.sku,
                    quantidade: item.qty,
                    preco_unitario: item.price,
                    taxa_iva: item.tax || 23
                }))
            }
        };

        return this._execute('Invoicedocuments/saveInstance', payload);
    }

    // 内部私有方法：自动获取该门店的序列号
    async _getAutoSerie() {
        const res = await this._execute('Numdocseries/getInstances', { numdocseries: {} });
        const list = res.Content?.numdocseries || [];
        // 找到该门店(loja)下匹配 FT 类型的序列
        const found = list.find(s => s.doc === "FT" && s.loja == this.storeId);
        if (!found) throw new Error(`门店 ${this.storeId} 未配置 FT 序列`);
        return found.serie;
    }

    // 通用的请求执行器
    async _execute(path, data) {
        const body = JSON.stringify(data);
        const signature = crypto.createHmac('sha256', this.appSecret).update(body).digest('hex');

        const response = await axios.post(`${this.baseUrl}/${path}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'X-ZS-CLIENT-ID': this.clientId,
                'X-ZS-APP-KEY': this.appKey,
                'X-ZS-SIGNATURE': signature,
                'X-ZS-STORE-ID': this.storeId // 关键：在这里告诉 API 操作哪个门店
            }
        });
        return response.data;
    }
}

class ZBossOrder {

    setKey(clientId, appKey, appSecret, storeId) {
        const config = {
            clientId,
            appKey,
            appSecret,
            storeId
        }
        this.zsApi = new ZoneSoftOrderManager(config);
    }

    sendCheckout(order) {

        if (!this.zsApi) return;

        const data  = this.makeZBossData(order)

        console.log(data)

        this.zsApi.uploadOrder(data)
            .then(res => console.log("订单已签署上传:", res))
            .catch(err => console.error(err));
    }

    makeZBossData(order){

        const items = []

        for (let i = 0; i < order.items.length; i++) {
            let item = order.items[i];

            items.push({
              id: item.id,
              qty: item.count,
              price: item.price
            })
        }

        return {
            customerId: 1,
            items: items
        }
    }

}

const  orderSystem = new ZBossOrder()
module.exports = orderSystem