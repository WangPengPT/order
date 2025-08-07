const db = require('../filedb.js');
const { logger } = require('../utils/logger.js');
const { Page } = require('./page.js')
const path = require("path");

class Pages {
  constructor(pages) {
    this.pages = new Map();
    this.initKey = 0;

    if (Array.isArray(pages)) {
      pages.forEach(pageObj => {
        // 转换成 Page 实例，如果已经是 Page 就直接用
        const pageInstance = pageObj instanceof Page ? pageObj : Page.fromJSON(pageObj);
        if (!pageInstance.id) {
          throw new Error("Page must have an id");
        }
        this.pages.set(pageInstance.id, pageInstance);
        if (pageInstance.id > this.initKey) {
          this.initKey = pageInstance.id;
        }
      });
    } else if (pages instanceof Map) {
      this.pages = pages;
      // 更新 initKey
      for (const key of pages.keys()) {
        if (key > this.initKey) this.initKey = key;
      }
    } else if (typeof pages === 'object' && pages !== null) {
      // 普通对象，转成 Map
      Object.entries(pages).forEach(([key, val]) => {
        const pageInstance = val instanceof Page ? val : Page.fromJSON(val);
        const numKey = Number(key);
        this.pages.set(numKey, pageInstance);
        if (numKey > this.initKey) this.initKey = numKey;
      });
    }
  }

  getMaxKey() {
    return Math.max(0, ...Array.from(this.pages.keys()).map(k => Number(k)));
  }

  init(id) {
    const page = this.get(id)
    if (page) {
      page.init()
    }
  }

  get(id) {
    return this.pages.get(id)
  }

  add(page) {
    if (!(page instanceof Page)) {
      throw new Error("Only Page instances can be added");
    }
    if (!page.id) {
      page.id = ++this.initKey;
    } else {
      if (page.id > this.initKey) {
        this.initKey = page.id;
      }
    }
    this.pages.set(page.id, page);
    if (!page.data) page.init();
    return page.id;
  }

  loadFromDisk() {
    const rawPages = db.loadPages();
    if (!Array.isArray(rawPages)) return;
    rawPages.forEach(raw => {
      try {
        const page = Page.fromJSON(raw);
        this.add(page);
        this.loadWelcomeImages(page)
        this.loadWelcomeLogo(page)
      } catch (e) {
        console.warn('转换Page失败:', e.message);
      }
    });
  }

  deletePage(id) {
    return this.pages.delete(id)
  }

  loadWelcomeLogo(page) {
    const hasFiles = db.hasSomeFile(db.formatedPublicUploadsDir(page.data.logoPath))
    if (page.data.logoPath === "" || !hasFiles) {
      logger.info("发现没有LOGO，尝试导入")
      const file = db.getWelcomeLogoFile(page.logoPath)
      const hasFile = db.hasSomeFile(db.formatedPublicDir(file))
      if (hasFile) {
        logger.info("LOGO导入成功")
        page.data.logoPath = file
      } else {
        logger.info("创建空LOGO")
        page.data.logoPath = ""
      }
    }
  }

  loadWelcomeImages(page) {
    const allWelcomeFiles = db.getWelcomeImageFiles(page.welcomePath);
    if (page.data.images_description.images.length < allWelcomeFiles.length) {
      logger.info("内存图片地址丢失，重新导入中")
      const imageList = allWelcomeFiles
        .map(filename => ({
          imagePath: db.getImagePath(page.welcomePath, filename)
        }));
      page.data.images_description.images = imageList
    }
  }

  updateWelcomeImages(id, paths) {
    const page = this.pages.get(id)
    page.updateWelcomeImges(paths)
  }

  uploadedWelcomeLogo(id, path) {
    const page = this.pages.get(id)
    page.updateWelcomeLogo(path)
  }

  toJSON() {
    return JSON.stringify({
      initKey: this.initKey,
      pages: Array.from(this.pages.entries()).map(([key, page]) => [key, page.toJSON()])
    });
  }

  static fromJSON(jsonStr) {
    const obj = JSON.parse(jsonStr);
    const map = new Map();

    for (const [key, rawPage] of obj.pages) {
      const page = Page.fromJSON(rawPage);
      map.set(Number(key), page);
    }

    const pagesInstance = new Pages(map);
    // 这里用 getMaxKey() 计算
    pagesInstance.initKey = pagesInstance.getMaxKey();
    return pagesInstance;
  }
}


const pagesData = [
  { id: 1, name: "welcome", description: "This is welcome page" },
  { id: 2, name: "other", description: "Another page" }
];

const pagesManager = new Pages(pagesData);
pagesManager.get(1).init()
pagesManager.get(2).init()
module.exports = { pagesManager }