

class ShopInfo {

    constructor ({restaurantName, restaurantNIF, phoneNumber, email, location, latitudeAndLongitude, logoPath, businessHours, instagramUrl, tiktokUrl}) {
        this.restaurantName = restaurantName || "Default Restaurant Name"
        this.restaurantNIF = restaurantNIF
        this.phoneNumber = phoneNumber
        this.email = email

        this.aboutUs = {pt: undefined, zh: undefined, en: undefined,}

        this.location = location || {street: "", city: "", region: "", country: "", postcode: "",}
        this.latitudeAndLongitude = latitudeAndLongitude || {latitude: undefined, longitude: undefined,}

        this.logoPath = logoPath

        this.businessHours = businessHours

        this.adultPrice = new PriceInfo(PriceInfo.type_adult)
        this.childPrice = new PriceInfo(PriceInfo.type_child)

        this.instagramUrl = instagramUrl
        this.tiktokUrl = tiktokUrl

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

    getCurrentPrice(people_type,time,childUsePercentage = false){
        if(people_type === PriceInfo.type_adult){
            return this.adultPrice.getCurrentPrice(time)
        }else if(people_type === PriceInfo.type_child){
            if(childUsePercentage){
                const percent = this.childPrice.pricePercentage
                const adultCurrentPrice = this.adultPrice.getCurrentPrice(time)
                return Number(adultCurrentPrice) * (Number(percent)/100)
            }
            return this.childPrice.getCurrentPrice(time)
        }else{
            console.error("Unknown people_type: " + people_type)
        }
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

class PriceInfo {

    static type_adult = "adult"
    static type_child = "child"
    static week_names = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday","holiday"]

    constructor(type) {
        this.type = type

        this.pricePercentage = 50

        this.time_divider_b2l = 11
        this.time_divider_l2d = 17
        this.time_divider_d2b = 5

        for(const day_name of PriceInfo.week_names){
            this[day_name] = new DayPrice(day_name,this.time_divider_b2l,this.time_divider_l2d,this.time_divider_d2b)
        }

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

    getCurrentPrice(isHoliday, time){
        if(isHoliday){
            return this['holiday'].getCurrentPrice(time)
        }else{
            const week_name = PriceInfo.week_names[(new Date(time)).getDay()]
            return this[week_name].getCurrentPrice(time)
        }
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
        const instance = new PriceInfo()
        for(const key of instance._dataKeys){
            if(data.hasOwnProperty(key)){
                instance[key] = data[key]
            }
        }
        return instance
    }
}

class DayPrice {
    constructor(day_name, time_divider_b2l, time_divider_l2d, time_divider_d2b) {
        this.day_name = day_name

        this.breakfast = 0
        this.lunch = 0
        this.dinner = 0

        this.time_divider_b2l = time_divider_b2l
        this.time_divider_l2d = time_divider_l2d
        this.time_divider_d2b = time_divider_d2b

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

    getCurrentPrice(time){
        const hour = (new Date(time)).getHours()
        if(hour>this.time_divider_d2b && hour<this.time_divider_b2l){
            return this.breakfast
        }else if(hour>this.time_divider_b2l && hour<this.time_divider_l2d){
            return this.lunch
        }else if(hour>this.time_divider_l2d && hour<this.time_divider_d2b+24){
            return this.dinner
        }else{
            console.error("Not Found Time("+hour+"h)Price")
        }
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
        const instance = new DayPrice()
        for(const key of instance._dataKeys){
            if(data.hasOwnProperty(key)){
                instance[key] = data[key]
            }
        }
        return instance
    }
}

module.exports = {ShopInfo, PriceInfo}