const express = require("express");
const compression = require('compression');
const cors = require('cors');
const http = require("http");
const https = require('https');
const fs = require('fs');
const { Server } = require("socket.io");
const path = require("path");
const menuController = require('./controllers/menuController.js');
const uploadController = require('./controllers/uploadController.js');
const socketService = require('./socket/socketService.js');
const uploadMiddleware = require('./middlewares/uploadMiddleware.js');
const appStateService = require('./services/appStateService.js')
const { logger } = require('./utils/logger.js')
const {appState} = require("./state");
const { initUserData, saveUserData } = require('./services/userService.js')

const app = express();
app.use(cors());
app.use(compression());

// 路由只保留上传接口
app.post('/upload', uploadMiddleware.any(), uploadController.handleUpload);

// 创建 HTTP 服务器和 Socket.IO
let server;
const usedHttps = process.env.USE_HTTPS || false;
if (usedHttps == "true")
{
  // 配置 HTTPS 选项
  const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/sushi.xiaoxiong.pt/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/sushi.xiaoxiong.pt/fullchain.pem'),
  };
  server = https.createServer(httpsOptions, app);

  app.use((req, res, next) => {
    if (!req.secure) {
      // 自动重定向 HTTP 到 HTTPS
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });

  // 创建 HTTP 服务器（用于重定向）
  // app.listen(80, () => {
  //   logger.info(`HTTP server running on port 80`)
  // });
}
else
{
  server = http.createServer(app);
}


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

async function main() {
  await initUserData();
  appStateService.loadAppState();
  menuController.loadMenu();
  socketService.init(io);

  const PORT = process.env.PORT || 80;
  server.listen(PORT, () => {
    logger.info(`🟢 服务器已启动，监听端口 ${PORT}`);
  });

  runCleanInterval();
  runFandaysInterval();
}

main();

// 捕获关闭信号时保存数据
process.on("SIGINT", () => {
  logger.info(`🛑 收到退出信号，正在保存数据...`)
  appStateService.saveAppState();
  saveUserData()
  process.exit(0);
});

process.on("SIGTERM", () => {
  logger.info("\n🛑 收到终止信号，正在保存数据...");
  appStateService.saveAppState();
  saveUserData()
  process.exit(0);
});

let needClean = true;

function runCleanInterval() {
  setTimeout(() => {
    const now = new Date();
    if (now.getHours() == 1)
    {
      if ( needClean ) {
        appState.clearAll();
      }
      needClean = false;
    }
    else
    {
      needClean = true;
    }

    runCleanInterval();
  }, 1000 * 600);
}

function runFandaysInterval(){
  setTimeout(() => {
    const now = new Date();
    if (now.getDate() == 11 || now.getDate() == 12 || now.getDate() == 25 || now.getDate() == 26)
    {
      if (!appState.isFanDays){
        appState.isFanDays = true;
        socketService.emitFandaysStatus()
      }
    }
    else
    {
      if(appState.isFanDays){
        appState.isFanDays = false;
        socketService.emitFandaysStatus()
      }
    }

    runFandaysInterval();
  }, 1000 * 3600);
}
