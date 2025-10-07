const CustomDish = require('./customDish.js')

class CustomDishType{
    constructor(id, typeName, typeName_zh, typeName_en, typeName_pt,  dishes = [], maxQuantity = 99, minQuantity = 0, enable = true) {
        this.id = id
        this.typeName = typeName
        this.typeName_zh = typeName_zh
        this.typeName_pt = typeName_pt
        this.typeName_en = typeName_en
        this.dishes = dishes
        this.maxQuantity = maxQuantity
        this.minQuantity = minQuantity
        this.enable = enable
        this.recordProps(this)
    }

    recordProps(target, except = []) {
        const keys = Object.keys(target)
        target._dataKeys = keys.filter(k => !k.startsWith('_') && !except.includes(k))
    }

    getNextId() {
        if (this.dishes.length === 0) return 1
        const maxId = Math.max(...this.dishes.map(t => t.id || 0))
        return maxId + 1
    }

    addDish(dish) {
        dish.id = this.getNextId()
        this.dishes.push(dish)
        return dish.id
    }

    toJSON() {
        const result = {}
        for (const key of this._dataKeys) {
            const val = this[key]
            if (Array.isArray(val)) {
                result[key] = val.map(v => (typeof v?.toJSON === 'function' ? v.toJSON() : v))
            } else if (typeof val?.toJSON === 'function') {
                result[key] = val.toJSON()
            } else {
                result[key] = val
            }
        }
        return result
    }

    static fromJSON(data) {
        const instance = new CustomDishType()
        for (const key of instance._dataKeys) {
            if (data.hasOwnProperty(key)) {
                if (key === 'dishes' && Array.isArray(data[key])) {
                    instance.dishes = data[key].map(d => CustomDish.fromJSON(d))
                } else {
                    instance[key] = data[key]
                }
            }
        }
        return instance
    }
}

module.exports = CustomDishType;