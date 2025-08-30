const CustomDishTemplate = require('./customDishTemplate.js')

class CustomDishCenter {
    constructor(templates = []) {
        this.templates = templates  // list of CustomDishTemplate
        this.recordProps(this)
    }

    recordProps(target, except = []) {
        const keys = Object.keys(target)
        target._dataKeys = keys.filter(k => !k.startsWith('_') && !except.includes(k))
    }

    getNextId() {
        if (this.templates.length === 0) return 1
        const maxId = Math.max(...this.templates.map(t => t.id || 0))
        return maxId + 1
    }

    // ===== CRUD 操作 =====
    addTemplate(template) {
        template.id = this.getNextId()
        this.templates.push(template)
        return template.id
    }

    removeTemplate(index) {
        if (index >= 0 && index < this.templates.length) {
            this.templates.splice(index, 1)
        }
    }

    getTemplate(index) {
        return this.templates[index]
    }

    updateTemplate(index, newTemplate) {
        if (index >= 0 && index < this.templates.length) {
            this.templates[index] = newTemplate
        }
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
        const instance = new CustomDishCenter()
        for (const key of instance._dataKeys) {
            if (data.hasOwnProperty(key)) {
                if (key === 'templates' && Array.isArray(data[key])) {
                    instance.templates = data[key].map(t => CustomDishTemplate.fromJSON(t))
                } else {
                    instance[key] = data[key]
                }
            }
        }
        return instance
    }
}

module.exports = CustomDishCenter;
