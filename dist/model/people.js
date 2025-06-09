
class PeopleType {
  constructor(adults = 0, childres = 0) {
    this.adults = PeopleType.parseNumber(adults)
    this.childres = PeopleType.parseNumber(childres)
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

}

module.exports = { PeopleType }