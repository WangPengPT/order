const  welcomeTemplate = require("./welcomeTemplate")
const db = require('../filedb.js');
const { logger } = require('../utils/logger.js');

class Page {
  constructor({ name, description = "", data = welcomeTemplate, id, imagesPath }) {
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

  loadWelcomeImages() {
    const allWelcomeFiles = db.getWelcomeImageFiles(this.welcomePath);
    if (this.data.images_description.images.length < allWelcomeFiles.length) {
      logger.info("内存图片地址丢失，重新导入中")
      const imageList = allWelcomeFiles
        .map(filename => ({
          imagePath: db.getImagePath(this.welcomePath, filename)
        }));
      this.data.images_description.images = imageList
    }
  }

  loadWelcomeLogo() {
    const hasFiles = db.hasSomeFile(db.formatedPublicUploadsDir(this.data.logoPath))
    if (this.data.logoPath === "" || !hasFiles) {
      logger.info("发现没有LOGO，尝试导入")
      const file = db.getWelcomeLogoFile(this.logoPath)
      const hasFile = db.hasSomeFile(db.formatedPublicDir(file))
      if (hasFile) {
        logger.info("LOGO导入成功")
        this.data.logoPath = file
      } else {
        logger.info("创建空LOGO")
        this.data.logoPath = ""
      }
    }
  }
}

module.exports = { Page }