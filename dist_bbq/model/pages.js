class Pages{
  constructor(pages) {
    if (pages instanceof Map) {
      this.pages = pages
    } else if (Array.isArray(pages)) {
      this.pages = new Map(pages) // 假设是 [[key, value], [key2, value2]]
    } else if (typeof pages === 'object' && pages !== null) {
      this.pages = new Map(Object.entries(pages)) // 从普通对象变 Map
    } else {
      this.pages = new Map() // 默认空 Map
    }
    this.initKey = 0
  }

  add(page) {
    this.initKey++
    const key = this.initKey
    this.pages.set(key, page)
    return this.pages.get(key) !== undefined
  }

  get(key) {
    return this.pages.get(key)
  }
  
  update(key, page) {
    this.pages.set(key, page)
  }

  delete(key) {
    return this.pages.delete(key)
  }
}

const pagesManager = new Pages({1: {name:"welcome", description: "This is welcome page",data: undefined, id:1}, 2:{name: "other", id: 2}})

module.exports = { pagesManager }