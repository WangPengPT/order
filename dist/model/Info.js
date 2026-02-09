class Info {

    static takeaway_type = "Takeaway"
    static delivery_type = "Delivery"
    static reserver_type = "Reserver"
    static qrorder_type = "QROrder"

    constructor(type) {
        this.type = type

        this.hoursInfo = undefined

        this.timeInterval = 15

        this.excludeDates = {week:[], month:[], dates:[],}

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

        this.firstImageBigModel = false

        this.showBusinessHoursInfo = true
        this.showPriceInfo = true


        // 保持在最后运行，为保证能保存所有key
        this.recordProps(this)
    }
}

class DeliveryInfo extends Info {
    constructor() {
        super(Info.delivery_type);


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

        this.firstImageBigModel = false

        this.clientCoolingTime = 0
        this.tableCoolingTime = 0

        this.showBusinessHoursInfo = true
        this.showPriceInfo = true

        // 保持在最后运行，为保证能保存所有key
        this.recordProps(this)
    }
}

module.exports = {TakeawayInfo, DeliveryInfo, ReserverInfo, QROrderInfo}