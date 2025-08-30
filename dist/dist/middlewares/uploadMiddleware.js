const multer = require('multer');
const fs = require('fs');

// 创建上传目录（如果不存在）
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// 配置 multer 处理文件上传
const storage = multer.diskStorage({
  destination: (req, file, cb) => {cb(null, uploadDir+'/')},
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const memoryStorage = multer.memoryStorage()

const upload = multer({ storage });
const memoryUpload = multer({ memoryStorage })

const uploadMiddleware = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = 'uploads';
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  }),
  limits: { fileSize: 10 * 1024 * 1024 }
});


module.exports = {upload, uploadMiddleware, memoryUpload};
