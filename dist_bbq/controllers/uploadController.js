const uploadService = require('../services/uploadService');
const { getImagePath, formatedPublicUploadsDir, hasSomeFile, deleteOldLogo } = require('../filedb.js')
const menuController = require('./menuController');
const { WebPageDesignService } = require('../services/webPageDesignService.js')
const { logger } = require('../utils/logger.js')
const { pagesManager } = require("../model/pages")
const fs = require('fs');
const path = require('path')


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
        const rows = await uploadService.processCSV(file, req.body.update_all);
        console.log("update csv count:", rows.length);
      }
      else {
        const rows = await uploadService.processJSON(file, req.body.update_all);
        console.log("update json count:", rows.length);
      }

      menuController.loadMenu();                  // 刷新菜单

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

  async handleUploadWelcomeImage(req, res) {
    logger.info("上传主页照片");
    // 检查多文件
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: '没有上传文件' });
      }

      const body = await req.body
      const id = body.id
      const page = await this.webPageDesignService.webPageRepository.getPageById(Number(id))
      if (!page) throw new Error("Not found the page")

      const imageFolder = formatedPublicUploadsDir(page.imagesPath)
      // 确保目标目录存在（不存在则自动创建）
      if (!fs.existsSync(imageFolder)) {
        fs.mkdirSync(imageFolder, { recursive: true });
        logger.info(`创建目录: ${imageFolder}`);
      }

      const uploadedUrls = [];

      // 处理每个文件
      for (const file of req.files) {
        let name = file.filename;
        let pos = name.indexOf("-");
        let endPos = name.lastIndexOf(".");
        name = name.substring(0, pos) + name.substring(endPos);

        const fullPublicPath = path.join(imageFolder, name);

        // 复制文件到目标目录
        fs.copyFileSync(file.path, fullPublicPath);
        uploadedUrls.push(getImagePath(page.imagesPath, name));
        // 删除临时文件
        fs.unlink(file.path, () => { });
      }
      await this.webPageDesignService.uploadedWelcomeImages(id, uploadedUrls)

      res.json({
        success: true,
        imageUrls: uploadedUrls
      });

    } catch (err) {
      logger.error('文件处理失败:', err.message);
      res.status(500).json({ error: '服务器处理文件时出错' });
    }
  }

}

module.exports = {
  UploadController
};

// function getFileExtension(filename) {
//   return filename.split('.').pop();
// }

// exports.handleUpload = async (req, res) => {
//   logger.info("上传菜单");
//   const file = req.files && req.files[0];                 // ⚠️ 这次是 req.file，不是 req.files[0]

//   if (!file) {
//     return res.status(400).json({ success: false, msg: 'No CSV uploaded' });
//   }


//   try {
//     if (getFileExtension(file.path) == "csv") {
//       const rows = await uploadService.processCSV(file, req.body.update_all);
//       console.log("update csv count:", rows.length);
//     }
//     else {
//       const rows = await uploadService.processJSON(file, req.body.update_all);
//       console.log("update json count:", rows.length);
//     }

//     menuController.loadMenu();                  // 刷新菜单

//     logger.info("菜单上传成功")
//     res.json({ success: true, msg: 'Processed OK' });
//   } catch (err) {
//     console.error('CSV processing error:', err);
//     logger.info("菜单上传失败")
//     res.status(500).json({ success: false, msg: err.message });
//   } finally {
//     // 删除 multer 临时文件
//     fs.unlink(file.path, () => { });
//   }
// };


// exports.handleUploadImage = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: '没有上传文件' })
//   }

//   let name = req.file.filename;
//   let pos = name.indexOf("-");
//   let endPos = name.lastIndexOf(".");
//   name = name.substring(0, pos) + name.substring(endPos);


//   const fullPublicPath = path.join(publicDir, name)

//   // 将文件从临时目录复制到公开目录
//   await fs.copyFileSync(req.file.path, fullPublicPath);

//   res.json({
//     success: true,
//     imageUrl: `/uploads/${name}`
//   });
//   fs.unlink(req.file.path, () => { });
// };

// exports.handleUploadWelcomeLogo = async (req, res) => {
//   logger.info("上传Logo")
//   try {
//     if (!req.file || req.file.length === 0) {
//       return res.status(400).json({ error: '没有上传文件' });
//     }

//     const body = await req.body
//     const id = body.id
//     const page = pagesManager.get(Number(id))
//     if (!page || page === undefined) new Error("Not found the page")

//     const logoFolder = formatedPublicUploadsDir(page.logoPath)
//     if (!fs.existsSync(logoFolder)) {
//       fs.mkdirSync(logoFolder, { recursive: true });
//       logger.info(`创建目录: ${logoFolder}`);
//     }
//     const logo = page.data.logoPath
//     if (logo) {
//       const logoPath = formatedPublicUploadsDir(logo)
//       const hasFile = hasSomeFile(logoPath)
//       if (hasFile) deleteOldLogo(logo)
//     }

//     const file = req.file
//     let name = file.filename;
//     const pos = name.indexOf("-");
//     const endPos = name.lastIndexOf(".");

//     name = name.substring(0, pos) + name.substring(endPos);

//     const fullPublicPath = path.join(logoFolder, name);

//     fs.copyFileSync(file.path, fullPublicPath);
//     const uploadedUrl = getImagePath(page.logoPath, name);
//     // 删除临时文件
//     fs.unlink(file.path, () => { });

//     webPageDesignService.uploadedWelcomeLogo(id, uploadedUrl)
//     res.json({
//       success: true,
//       data: uploadedUrl
//     });
//   } catch (error) {
//     logger.error('文件处理失败:', error.message);
//     res.status(500).json({ error: '服务器处理文件时出错' });
//   }
// }

// exports.handleUploadWelcomeImage = async (req, res) => {
//   logger.info("上传主页照片");
//   // 检查多文件
//   try {
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).json({ error: '没有上传文件' });
//     }

//     const body = await req.body
//     const id = body.id
//     const page = pagesManager.get(Number(id))
//     if (!page || page === undefined) new Error("Not found the page")

//     const imagePath = formatedPublicUploadsDir(page.welcomePath)
//     if (!imagePath || imagePath === "") throw new Error("Not found the path")
//     // 确保目标目录存在（不存在则自动创建）
//     if (!fs.existsSync(imagePath)) {
//       fs.mkdirSync(imagePath, { recursive: true });
//       logger.info(`创建目录: ${imagePath}`);
//     }

//     const uploadedUrls = [];

//     // 处理每个文件
//     for (const file of req.files) {
//       let name = file.filename;
//       let pos = name.indexOf("-");
//       let endPos = name.lastIndexOf(".");
//       name = name.substring(0, pos) + name.substring(endPos);

//       const fullPublicPath = path.join(imagePath, name);

//       // 复制文件到目标目录
//       fs.copyFileSync(file.path, fullPublicPath);
//       uploadedUrls.push(getImagePath(page.welcomePath, name));
//       // 删除临时文件
//       fs.unlink(file.path, () => { });
//     }

//     webPageDesignService.uploadedWelcomeImages(id, uploadedUrls)
//     res.json({
//       success: true,
//       imageUrls: uploadedUrls
//     });

//   } catch (err) {
//     logger.error('文件处理失败:', err.message);
//     res.status(500).json({ error: '服务器处理文件时出错' });
//   }
// };