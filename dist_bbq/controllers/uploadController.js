const uploadService = require('../services/uploadService');
const menuController = require('./menuController');
const { logger } = require('../utils/logger.js')
const fs = require('fs');
const path = require('path')

function getFileExtension(filename) {
  return filename.split('.').pop();
}

exports.handleUpload = async (req, res) => {
  logger.info("上传菜单");
  const file = req.files && req.files[0];                 // ⚠️ 这次是 req.file，不是 req.files[0]

  if (!file) {
    return res.status(400).json({ success: false, msg: 'No CSV uploaded' });
  }


  try {
    if (getFileExtension(file.path) == "csv")
    {
      const rows = await uploadService.processCSV(file, req.body.update_all);
      console.log("update csv count:", rows.length);
    }
    else
    {
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
};

const publicDir = path.join(process.cwd(), 'public', 'uploads')

const welcomeImageDie = path.join(process.cwd(), 'public', 'uploads', 'welcome')

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir,{ recursive: true });
}

exports.handleUploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: '没有上传文件' })
  }

  let name = req.file.filename;
  let pos = name.indexOf("-");
  let endPos = name.lastIndexOf(".");
  name = name.substring(0,pos) + name.substring(endPos);


  const fullPublicPath = path.join(publicDir, name)

  // 将文件从临时目录复制到公开目录
  await fs.copyFileSync(req.file.path, fullPublicPath);

  res.json({
    success: true,
    imageUrl: `/uploads/${name}`
  });

  fs.unlink(req.file.path, () => { });
};

exports.handleUploadWelcomeImage = async (req, res) => {
  logger.info("上传主页照片");
  
  // 检查多文件（不是 req.file！）
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: '没有上传文件' });
  }

  const uploadedUrls = [];
  
  // 处理每个文件
  for (const file of req.files) {
    let name = file.filename;
    let pos = name.indexOf("-");
    let endPos = name.lastIndexOf(".");
    name = name.substring(0, pos) + name.substring(endPos);

    const fullPublicPath = path.join(welcomeImageDie, name);
    fs.copyFileSync(file.path, fullPublicPath);
    uploadedUrls.push(`/uploads/welcome/${name}`); // 修复变量名 processedFileName → name
    
    fs.unlink(file.path, () => {}); // 删除临时文件
  }

  res.json({
    success: true,
    imageUrls: uploadedUrls
  });
};