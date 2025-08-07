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
app.post('/upload_image', uploadMiddleware.single('image'), uploadController.handleUploadImage);

// 创建 HTTP 服务器和 Socket.IO
let server;
const usedHttps = process.env.USE_HTTPS || false;
if (usedHttps == "true")
{
  let key_name = "order";
  if (process.env.HTTPS_HEAD) {
    key_name = process.env.HTTPS_HEAD;
  }

  let file_key = '/etc/letsencrypt/live/' + key_name + '.xiaoxiong.pt/privkey.pem';
  let file_cert = '/etc/letsencrypt/live/' + key_name + '.xiaoxiong.pt/fullchain.pem';

  logger.info(file_key);
  logger.info(file_cert);

  // 配置 HTTPS 选项
  const httpsOptions = {
    key: fs.readFileSync(file_key),
    cert: fs.readFileSync(file_cert),
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
  if(process.env.ENABLE_MENU_LUNCH == 'true'){
    runMenuLunchInterval()
  }else{
    console.log("process.env.ENABLE_MENU_LUNCH:",process.env.ENABLE_MENU_LUNCH)
  }
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
  }, 1000 * 60 * 10);
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
  }, 1000 * 60 * 60 );
}

function runMenuLunchInterval(){
  setTimeout(() => {
    const now = new Date();
    if (now.getHours() < 17)
    {
      if (!appState.hasLunch){
        appState.hasLunch = true;
        socketService.emitMenuLunchStatus()
      }
    }
    else
    {
      if(appState.isFanDays){
        appState.hasLunch = false;
        socketService.emitMenuLunchStatus()
      }
    }
    runMenuLunchInterval();
  }, 1000 * 60 * 5);
}