
class PeopleType {
  constructor({ adults = 0, children = 0 } = {}) {
    this.adults = PeopleType.parseNumber(adults)
    this.children = PeopleType.parseNumber(children)

    if ( this.adults < 0 || this.children < 0) throw new Error("The people can not be negative")
  }

  static parseNumber(value) {
    const num = parseInt(value)
    return isNaN(num) || num < 0 ? 0 : num
  }
  
  getCount() {
    return this.adults + this.children
  }

  getPriceCount(key, price){
    const result = this[key] * price
    return result
  }

  clean() {
    this.adults = 0
    this.children = 0
  }

    toJSON() {
    return {
      adults: this.adults,
      children: this.children
    };
  }

  // ✅ 可选：添加反序列化方法
  static fromJSON(data) {
    return new PeopleType(data?.adults, data?.children);
  }

}

module.exports = { PeopleType }