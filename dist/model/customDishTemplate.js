const CustomDishType = require('./customDishType.js')

class CustomDishTemplate {
    constructor(id, types = [],
                name,
                initialPrice = 0,
                category,
                like = 0,
                rate = 0,
                descriptions = [],
                options = {quantity: false},
                enable = false,
                ordeQuantity = 0,
                sellType = CustomDishTemplate.SellType.ALL) {
        this.id = id
        this.types = types  // list of CustomDishType
        this.name = name
        this.initialPrice = initialPrice
        this.category = category || name
        this.like = like
        this.rate = rate
        this.descriptions = descriptions
        this.options = options
        this.enable = enable
        this.ordeQuantity = ordeQuantity
        this.sellType = sellType
        this.recordProps(this)
    }

    static SellType = Object.freeze({
        DINE_IN: "DINEIN",
        TAKEAWAY: "TAKEAWAY",
        ALL: "DINEIN&TAKEAWAY",
    });

    recordProps(target, except = []) {
        const keys = Object.keys(target)
        target._dataKeys = keys.filter(k => !k.startsWith('_') && !except.includes(k))
    }

    getNextId() {
        if (this.types.length === 0) return 1
        const maxId = Math.max(...this.types.map(t => t.id || 0))
        return maxId + 1
    }

    // ===== CRUD 操作 =====
    addType(customDishType) {
        customDishType.id = this.getNextId()
        this.types.push(customDishType)
        return customDishType.id
    }

    removeType(typeName) {
        this.types = this.types.filter(t => t.typeName !== typeName)
    }

    getType(typeName) {
        return this.types.find(t => t.typeName === typeName)
    }

    updateType(typeName, newCustomDishType) {
        const index = this.types.findIndex(t => t.typeName === typeName)
        if (index !== -1) {
            this.types[index] = newCustomDishType
        }
    }

    likeDish() {
        this.like++
        this.rate++
    }

    unlikeDish() {
        this.rate++
    }

    // ===== JSON 序列化 =====
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
        const instance = new CustomDishTemplate()
        for (const key of instance._dataKeys) {
            if (data.hasOwnProperty(key)) {
                if (key === 'types' && Array.isArray(data[key])) {
                    instance.types = data[key].map(t => CustomDishType.fromJSON(t))
                } else {
                    instance[key] = data[key]
                }
            }
        }
        return instance
    }
}

module.exports = CustomDishTemplate;