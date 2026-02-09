class Settings{
    constructor({checkIP, QRorder, takeaway, delivery, reserver, isFestiveDay, useFandays, useChildrenDiscount }){
        this.checkIP = checkIP
        this.QRorder = QRorder
        this.takeaway = takeaway
        this.delivery = delivery
        this.reserver = reserver
        this.isFestiveDay = isFestiveDay
        // homeDelivery: false,
        // dividerTime: 17,

        this.useFandays = useFandays
        this.useChildrenDiscount = useChildrenDiscount

        this.recordProps(this)
    }

    update(key, value){
        let result;
        if(Object.keys(this).includes(key)){
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
        const instance = new Settings()
        for(const key of instance._dataKeys){
            if(data.hasOwnProperty(key)){
                instance[key] = data[key]
            }
        }
        return instance
    }
}

module.exports = {Settings};