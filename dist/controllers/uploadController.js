const uploadService = require('../services/uploadService');
const { getImagePath, formatedPublicUploadsDir, hasSomeFile, deleteOldLogo } = require('../filedb.js')
const menuController = require('./menuController');
const { WebPageDesignService } = require('../services/webPageDesignService.js')
const { logger } = require('../utils/logger.js')
const db = require('../filedb.js')
const fs = require('fs');
const path = require("path");
const { appState } = require('../state.js');


const publicDir = path.join(process.cwd(), 'public', 'uploads')

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

class UploadController {
  constructor(webPageDesignService = new WebPageDesignService()) {
    this.webPageDesignService = webPageDesignService
  }

  getFileExtension(filename) {
    return filename.split('.').pop();
  }

  async handleUpload(req, res) {
    logger.info("上传菜单");
    const file = req.files && req.files[0];                 // ⚠️ 这次是 req.file，不是 req.files[0]

    if (!file) {
      return res.status(400).json({ success: false, msg: 'No CSV uploaded' });
    }

    try {
      if (file.path.split('.').pop() == "csv") {
         await uploadService.processCSV(file, req.body.update_all, req.body.takeaway);
      }
      else {
         await uploadService.processJSON(file, req.body.update_all, req.body.takeaway);
      }


      logger.info("菜单上传成功")
      res.json({ success: true, msg: 'Processed OK' });
    } catch (err) {
      console.error('CSV processing error:', err);
      logger.info("菜单上传失败")
      res.status(500).json({ success: false, msg: err.message });
    } finally {
      // 删除 multer 临时文件
      fs.unlink(file.path, () => { });
    }
  }

  async handleUploadImage(req, res) {

    if (!req.file) {
      return res.status(400).json({ error: '没有上传文件' })
    }

    let name = req.file.filename;
    let pos = name.indexOf("-");
    let endPos = name.lastIndexOf(".");
    name = name.substring(0, pos) + name.substring(endPos);


    const fullPublicPath = path.join(publicDir, name)

    // 将文件从临时目录复制到公开目录
    await fs.copyFileSync(req.file.path, fullPublicPath);

    res.json({
      success: true,
      imageUrl: `/uploads/${name}`
    });
    fs.unlink(req.file.path, () => { });
  }

  async handleUploadWelcomeLogo(req, res) {
    logger.info("上传Logo")
    try {
      if (!req.file || req.file.length === 0) {
        return res.status(400).json({ error: '没有上传文件' });
      }

      const body = await req.body
      const id = body.id
      const page = await this.webPageDesignService.webPageRepository.getPageById(Number(id))
      if (!page) throw new Error("Not found the page")
        
      const logoFolder = formatedPublicUploadsDir(page.imagesPath)
      if (!fs.existsSync(logoFolder)) {
        fs.mkdirSync(logoFolder, { recursive: true });
        logger.info(`创建目录: ${logoFolder}`);
      }
      const file = req.file
      let name = file.filename;
      const pos = name.indexOf("-");
      const endPos = name.lastIndexOf(".");

      name = name.substring(0, pos) + name.substring(endPos);

      const fullPublicPath = path.join(logoFolder, name);
      fs.copyFileSync(file.path, fullPublicPath);
      const uploadedUrl = getImagePath(page.imagesPath, name);
      // 删除临时文件
      fs.unlink(file.path, () => { });
      await this.webPageDesignService.uploadedWelcomeLogo(id, uploadedUrl)
      res.json({
        success: true,
        data: uploadedUrl
      });
    } catch (error) {
      logger.error('文件处理失败:', error.message);
      res.status(500).json({ error: '服务器处理文件时出错' });
    }
  }

     handleUploadWelcomeImage = async (req, res) => {
    logger.info("上传主页照片");
    // 检查多文件
    try {
      console.log('上传主页照片');

      // 获取 pageId
      const pageId = req.body.id;
      if (!pageId) {
        return res.status(400).json({ error: '缺少 pageId' });
      }

      const page = await this.webPageDesignService.webPageRepository.getPageById(Number(pageId))
      if (!page) {
        return res.status(404).json({ error: '页面不存在' });
      }

      const imagesPath = page.imagesPath;
      const uploadDir = path.join(process.cwd(), db.pageDir, imagesPath);
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

      // 单张 logo
      if (req.files['logo'] && req.files['logo'].length > 0) {
        const logoFile = req.files['logo'][0];
        fs.renameSync(logoFile.path, path.join(uploadDir, logoFile.originalname));
      }

      // 多张标题图
      if (req.files['titleImages'] && req.files['titleImages'].length > 0) {
        for (const file of req.files['titleImages']) {
          fs.renameSync(file.path, path.join(uploadDir, file.originalname));
        }
      }

      // 多层嵌套的描述图
      if (req.files['informationImages'] && req.files['informationImages'].length > 0) {
        for (const file of req.files['informationImages']) {
          // 可以根据需要生成唯一文件名或者保留原始文件名
          fs.renameSync(file.path, path.join(uploadDir, file.originalname));
        }
      }

      return res.json({ success: true, message: '文件保存成功' });

    } catch (err) {
      console.error('文件上传失败', err);
      return res.status(500).json({ error: '保存文件失败' });
    }

  }

}

module.exports = {
  UploadController
};
