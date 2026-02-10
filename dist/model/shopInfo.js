const {logger} = require("../utils/logger");


class ShopInfo {

    constructor () {
        this.restaurantName = "Default Restaurant Name"
        this.restaurantDescription = undefined
        this.restaurantNIF = undefined
        this.phoneNumber = undefined
        this.email = undefined

        this.aboutUs = {pt: undefined, zh: undefined, en: undefined,}

        this.location = {street: "", city: "", region: "", country: "", postcode: "",}
        this.latitudeAndLongitude = {latitude: undefined, longitude: undefined,}

        this.logoPath = undefined
        this.brandLogoPath = undefined

        this.showBusinessHoursInfo = true
        this.businessHours = undefined

        this.showPriceInfo = true
        this.adultPrice = new PriceInfo(PriceInfo.type_adult)
        this.childPrice = new PriceInfo(PriceInfo.type_child)

        this.instagramUrl = undefined
        this.tiktokUrl = undefined

        this.recordProps(this)
    }

    update(key, value){
        let result;
        if(Object.keys(this).includes(key)){
            if(['adultPrice','childPrice'].includes(key)){
                for(const subKey of Object.keys(value)){
                    this[key].update(subKey, value[subKey])
                }
            }else{
                this[key] = value;
            }
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

    getCurrentPrice(people_type,time,isHoliday,childUsePercentage=false){
        if(!(new Date(time))){
            console.error("Unknown time date",time)
            return
        }

        let result
        if(people_type === PriceInfo.type_adult){
            result = this.adultPrice.getCurrentPrice(isHoliday, time)
        }else if(people_type === PriceInfo.type_child){
            if(childUsePercentage){
                const adultCurrentPrice = this.adultPrice.getCurrentPrice(isHoliday, time)
                if(!adultCurrentPrice.success){
                    result = adultCurrentPrice
                }else {
                    const percent = this.childPrice.pricePercentage
                    const price = Number(adultCurrentPrice.data) * (Number(percent) / 100)
                    if (price || price === 0 ) {
                        result = {success: true, data: price}
                    } else {
                        result = {success: false, data: "Price error, price:" + price}
                    }
                }
            }else{
                result = this.childPrice.getCurrentPrice(isHoliday, time)
            }
        }else{
            result = {success:false, data:"Unknown people_type: " + people_type}
        }

        if(result.success){
            // logger.info("Get Current "+people_type+" Price Successfully, price: "+result.data)
            return result.data
        }else {
            logger.error(result.data)
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
            if(key === 'adultPrice' || key === 'childPrice'){
                instance[key] = PriceInfo.fromJSON(data[key])
            }else if(data.hasOwnProperty(key)){
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
            if(PriceInfo.week_names.includes(key)){
                for(const subKey of Object.keys(value)){
                    this[key].update(subKey, value[subKey])
                }
            }else{
                this[key] = value;
            }
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

    getCurrentPrice(isHoliday,time ){
        let result
        let week_name

        if(isHoliday){
            week_name = 'holiday'
        }else{
            week_name = PriceInfo.week_names[(new Date(time)).getDay()]
        }

        if(!PriceInfo.week_names.includes(week_name)){
            result = {success:false, data:"PriceInfo Get Week Error"}
        }else{
            result = this[week_name].getCurrentPrice(time)
        }

        return result
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
            if(PriceInfo.week_names.includes(key)){
                instance[key] = DayPrice.fromJSON(data[key])
            }else if(data.hasOwnProperty(key)){
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
        let result

        const hour = (new Date(time)).getHours()

        if(hour>this.time_divider_d2b && hour<this.time_divider_b2l){
            result = {success:true, data:this.breakfast}
        }else if(hour>this.time_divider_b2l && hour<this.time_divider_l2d){
            result = {success:true, data:this.lunch}
        }else if(hour>this.time_divider_l2d && hour<this.time_divider_d2b+24){
            result = {success:true, data:this.dinner}
        }else{
            result = {success:false, data:"DayPrice Not Found Time("+hour+")Price"}
        }

        return result
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