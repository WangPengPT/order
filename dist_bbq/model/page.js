const  welcomeTemplate = require("./welcomeTemplate")

class Page {
  constructor({ name, description = "", data = undefined, id, imagesPath }) {
    this.name = name;
    this.description = description;
    this.data = data;
    this.id = id;
    this.imagesPath = imagesPath || this.generateUnique()
  }

  toJSON() {
    return {
      name: this.name,
      description: this.description,
      data: this.data,
      id: this.id,
      imagesPath: this.imagesPath
    };
  }

init() {
    this.data = welcomeTemplate
  }

  
  generateUnique() {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  }

  get welcomePath() {
    return `${this.imagesPath}/welcomeImage/`;
  }

  get logoPath() {
    return `${this.imagesPath}/logoPath/`;
  }

  updateWelcomeImges(paths) {
    paths.forEach(it => {
      this.data.images_description.images.push({ imagePath: it });
    });
  }

  updateWelcomeLogo(path) {
    this.data.logoPath = path
  }

  static fromJSON(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error("Invalid Page object for fromJSON");
    }

    const mergedData = Page.mergeWithTemplate(obj.data ?? {});
    return new Page({
      name: obj.name,
      description: obj.description,
      data: mergedData,
      id: obj.id,
      imagesPath: obj.imagesPath
    });
  }

  static mergeWithTemplate(data) {
    const template = JSON.parse(JSON.stringify(welcomeTemplate));

    // 递归合并 template 和 data
    function deepMerge(target, source) {
      for (const key in source) {
        if (
          source[key] &&
          typeof source[key] === 'object' &&
          !Array.isArray(source[key])
        ) {
          target[key] = deepMerge(target[key] || {}, source[key]);
        } else {
          target[key] = source[key];
        }
      }
      return target;
    }

    return deepMerge(template, data);
  }
}

module.exports = { Page }