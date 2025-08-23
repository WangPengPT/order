class WeekPrice {

    constructor(){
        this.dividerTime = 17 // 区分午餐与晚餐时间

        this.weekName = ["special","monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
        for(const dayName of this.weekName){
            this[dayName] = {lunch: 0, dinner: 0}
        }

        this.recordProps(this)
    }

    setAllPrices(prices){
        for(const dayName of this.weekName){
            this.setDayPrice(dayName, prices[dayName])
        }
        return this.getAllPrices()
    }

    setDayPrice(dayName,dayPrice){
        this[dayName] = dayPrice
    }

    getAllPrices(){
        const result = {}
        for(const dayName of this.weekName){
            result[dayName] = this[dayName]
        }
        return result
    }

    getCurrentPrice(){
        const now = new Date()
        return this.getDayPrice(now.getDay())[this.getLunchOrDinner()]
    }

    getDayPrice(day) {
        if(day>0 && day<8){
            return this[this.weekName[day]]
        }else{
            return this[this.weekName[0]]
        }
    }

    getLunchOrDinner(time = this.dividerTime){
        const now = new Date()
        if(now.getHours() < time){
            return "lunch"
        }else{
            return "dinner"
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
        const instance = new WeekPrice()
        for(const key of instance._dataKeys){
            if(data.hasOwnProperty(key)){
                instance[key] = data[key]
            }
        }
        return instance
    }
}

module.exports = WeekPrice
