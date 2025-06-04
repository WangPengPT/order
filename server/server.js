const express = require("express");
const compression = require('compression');
const cors = require('cors');
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const menuController = require('./controllers/menuController.js');
const uploadController = require('./controllers/uploadController.js');
const socketService = require('./services/socketService.js');
const uploadMiddleware = require('./middlewares/uploadMiddleware.js');

const app = express();
app.use(cors());
app.use(compression());

// 路由只保留上传接口
app.post('/upload', uploadMiddleware.any(), uploadController.handleUpload);

// 创建 HTTP 服务器和 Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
});

app.use(compression());
app.use(express.static(path.join(__dirname, "public"), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.gz')) {
      res.set('Content-Encoding', 'gzip');
    }
  }
}));

// 载入菜单数据
menuController.loadMenu();

// 初始化 Socket.IO 事件
socketService.init(io);

// 启动服务器
const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
  console.log(`服务器已启动，监听端口 ${PORT}`);
});
