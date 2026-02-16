class PermissionsControl {

    constructor() {

        this.order = true
        this.delivery = true
        this.reserver = true
        this.vip = true
        this.fandays = true

        this.customDishesControl = {
            1: {enabled: true, name: 'Sushi Aleatória®'},
            2: {enabled: true, name: 'Poke Bowl'},
            3: {enabled: true, name: 'MY BOX'},
            4: {enabled: true, name: 'bibimbap'},
            5: {enabled: true, name: 'XIAOXIONG® RAMEN'},
            6: {enabled: true, name: 'Menu Almoço'},
        }

        this.recordProps(this)
    }

    update(key, value) {
        let result;
        if (Object.keys(this).includes(key)) {
            this[key] = value;
            result = {
                success: true,
                data: value,
            }
        } else {
            result = {
                success: false,
                data: "Key(" + key + ") Not Found",
            }
        }
        return result;
    }

    recordProps(target, except = []) {
        const keys = Object.keys(target);
        target._dataKeys = keys.filter(k => !k.startsWith('_') && !except.includes(k))
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
        const instance = new this()
        for (const key of instance._dataKeys) {
            if (data.hasOwnProperty(key)) {
                instance[key] = data[key]
            }
        }
        return instance
    }

}

module.exports = {PermissionsControl}