

class CustomDish {
    constructor(dishid, name, name_zh, name_en, name_pt, price = 0, deliveryPrice = 0, orderType, discount, deliveryDiscount, enable = true) {
        this.dishid = dishid
        this.name = name
        this.name_zh = name_zh
        this.name_en = name_en
        this.name_pt = name_pt
        this.price = price
        this.deliveryPrice = deliveryPrice
        this.orderType = orderType || undefined
        this.discount = discount || 0
        this.deliveryDiscount = deliveryDiscount || 0
        this.enable = enable
        this.recordProps(this)
    }

    recordProps(target, except = []) {
        const keys = Object.keys(target);
        target._dataKeys = keys.filter(k => !k.startsWith('_') && !except.includes(k));
    }

    toJSON() {
        const result = {}
        for (const key of this._dataKeys) {
            const val = this[key]
            if (typeof val?.toJSON === 'function') {
                result[key] = val.toJSON()
            } else {
                result[key] = val
            }
        }
        return result
    }

    static fromJSON(data) {
        const instance = new CustomDish()
        for (const key of instance._dataKeys) {
            if (data.hasOwnProperty(key)) {
                instance[key] = data[key]
            }
        }
        return instance
    }
}

module.exports = CustomDish;