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
const socketService = require('./services/socketService.js');
const uploadMiddleware = require('./middlewares/uploadMiddleware.js');
const appStateService = require('./services/appStateService.js')
const { logger } = require('./utils/logger.js')
const {appState} = require("./state");
const holiday = require('./utils/holiday.js')
const { initUserData, saveUserData } = require('./services/userService.js')

const app = express();
app.use(cors());
app.use(compression());

// 路由只保留上传接口
app.post('/upload', uploadMiddleware.any(), uploadController.handleUpload);

// 创建 HTTP 服务器和 Socket.IO
let server;
const usedHttps = process.env.USE_HTTPS || false;
if (usedHttps)
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

(async () => {
  await initUserData();
  // 后续正常启动 HTTP/Socket 服务
})();

// 载入AppState数据
appStateService.loadAppState()

// 载入菜单数据
menuController.loadMenu();

// 初始化 Socket.IO 事件
socketService.init(io);

// 启动服务器
const PORT = process.env.PORT || 80;
server.listen(PORT, () => {
  logger.info(`🟢 服务器已启动，监听端口 ${PORT}`)
});

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

function runInterval() {
  setTimeout(() => {
    const now = new Date();
    if (now.getHours() == 1)
    {
      if ( needClean ) {
        logger.info('自动清除订单和更新红日')
        appState.clearAll();

        // update today for appState.isFestiveDay
        holiday.updateToday(appState);
      }
      needClean = false;
    }
    else
    {
      needClean = true;
    }

    runInterval();
  }, 1000 * 60);
}

// update today for appState.isFestiveDay
holiday.updateToday(appState);
runInterval();
