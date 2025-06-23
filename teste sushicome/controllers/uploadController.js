const uploadService = require('../services/uploadService');
const menuController = require('./menuController');

exports.handleUpload = async (req, res) => {
  const file = req.files && req.files[0];

  if (!file) {
    return res.status(400).send('No file uploaded');
  }

  try {
    const result = await uploadService.processCSV(file);
    menuController.loadMenu(); // 更新菜单
    res.send({ message: 'File processed successfully' });
  } catch (err) {
    res.status(500).send(`CSV processing failed: ${err.message}`);
  }
};
