class Info {

    static takeaway_type = "Takeaway"
    static delivery_type = "Delivery"
    static reserver_type = "Reserver"
    static qrorder_type = "QROrder"

    constructor(type) {
        this.type = type

        this.hoursInfo = undefined // 营业时间

        this.timeInterval = 15 // 时间间隔

        this.excludeDates = {week:[], month:[], dates:[],} // 排除时间

        this.firstImageBigModel = false // 大图模式

        this.showBusinessHoursInfo = true // 显示/隐藏营业时间卡片
        this.showPriceInfo = true // 显示/隐藏价格卡片

        this.homePageImages = {mobile:[], pad:[], computer:[]} // 背景图片

    }

    update(key, value){
        let result;
        if(this._dataKeys.includes(key)){
            this[key] = value;
            result = {
                success:true,
                data:value,
            }
        }else{
            result = {
                success: false,
                data: "Key(" + key + ") Not Found",
            }
        }
        return result;
    }

    recordProps(target, except=[]){
        const keys = Object.keys(target);
        target._dataKeys = keys.filter(k => !k.startsWith('_') && !except.includes(k))
    }

    toJSON(){
        const result = {}
        for(const key of this._dataKeys){
            const val = this[key]
            if( typeof val?.toJSON === 'function'){
                result[key] = val.toJSON()
            }else{
                result[key] = val
            }
        }
        return result
    }

    static fromJSON(data){
        const instance = new ShopInfo()
        for(const key of instance._dataKeys){
            if(data.hasOwnProperty(key)){
                instance[key] = data[key]
            }
        }
        return instance
    }

}

class TakeawayInfo extends Info {
    constructor() {
        super(Info.takeaway_type);

        this.pay_type = {pay_in_shop:true, mb_way: true}

        // 保持在最后运行，为保证能保存所有key
        this.recordProps(this)
    }
}

class DeliveryInfo extends Info {
    constructor() {
        super(Info.delivery_type);

        this.pay_type = {pay_with_money:true, pay_with_card:true, mb_way: true}

        // 保持在最后运行，为保证能保存所有key
        this.recordProps(this)
    }
}

class ReserverInfo extends Info {
    constructor() {
        super(Info.reserver_type);


        // 保持在最后运行，为保证能保存所有key
        this.recordProps(this)
    }
}

class QROrderInfo extends Info {
    constructor() {
        super(Info.qrorder_type);

        this.clientCoolingTime = 0 // 用户上传订单冷却时间
        this.tableCoolingTime = 0 // 桌子冷却时间

        // 保持在最后运行，为保证能保存所有key
        this.recordProps(this)
    }
}

module.exports = {TakeawayInfo, DeliveryInfo, ReserverInfo, QROrderInfo}