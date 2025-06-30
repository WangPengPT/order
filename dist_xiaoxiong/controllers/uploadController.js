const uploadService = require('../services/uploadService');
const menuController = require('./menuController');
const { logger } = require('../utils/logger.js')
const fs = require('fs');

exports.handleUpload = async (req, res) => {
  logger.info("上传菜单")
  const file = req.files && req.files[0];                 // ⚠️ 这次是 req.file，不是 req.files[0]

  if (!file) {
    return res.status(400).json({ success: false, msg: 'No CSV uploaded' });
  }

  try {
    const rows = await uploadService.processCSV(file, req.body.update_all); // 假设返回解析行数
    menuController.loadMenu();                  // 刷新菜单

    logger.info("菜单上传成功")
    res.json({ success: true, msg: 'Processed OK', rows });
  } catch (err) {
    console.error('CSV processing error:', err);
    logger.info("菜单上传失败")
    res.status(500).json({ success: false, msg: err.message });
  } finally {
    // 删除 multer 临时文件
    fs.unlink(file.path, () => { });
  }
};