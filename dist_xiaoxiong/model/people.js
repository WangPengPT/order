
class PeopleType {
  constructor({ adults = 0, childres = 0 } = {}) {
    this.adults = PeopleType.parseNumber(adults)
    this.childres = PeopleType.parseNumber(childres)

    if ( this.adults < 0 || this.childres < 0) throw new Error("The people can not be negative")
  }

  static parseNumber(value) {
    const num = parseInt(value)
    return isNaN(num) || num < 0 ? 0 : num
  }
  
  getCount() {
    return this.adults + this.childres
  }

  clean() {
    this.adults = 0
    this.childres = 0
  }

    toJSON() {
    return {
      adults: this.adults,
      childres: this.childres
    };
  }

  // ✅ 可选：添加反序列化方法
  static fromJSON(data) {
    return new PeopleType(data?.adults, data?.childres);
  }

}

module.exports = { PeopleType }