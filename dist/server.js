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
const holiday = require('./utils/holiday.js')
const { initUserData, saveUserData } = require('./services/userService.js')
const { translaterFilter } = require('./utils/translateFilter.js')
const app = express();
app.use(cors());
app.use(compression());

// 路由只保留上传接口
app.post('/upload', uploadMiddleware.any(), uploadController.handleUpload);
app.post('/upload_image', uploadMiddleware.single('image'), uploadController.handleUploadImage);

// 创建 HTTP 服务器和 Socket.IO
let server;
const usedHttps = process.env.USE_HTTPS || "false";

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


app.get('/client/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/client/index.html'));
});
//app.use('/client', express.static(path.join(__dirname, 'public/client')));

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
  }, 1000 * 60 * 5);
}

/*
 每6小时检查当前日期是否为28号
 若是：将单月的评分写入文件
 文件地址：保存json的文件夹里的MonthRates文件夹
*/
let needWriteMonthRates = true;
function writeMonthRates() {
  setTimeout(() => {
    const now = new Date();
    if (now.getDate() === 1) // 每月1号
    {
      if ( needWriteMonthRates ) {
        appStateService.saveMonthRates() // 将上月的评分数据写入文件
        appStateService.clearnMonthRates() // 清空上月的评分数据
      }
      needWriteMonthRates = false;
    }
    else
    {
      needWriteMonthRates = true;
    }

    writeMonthRates();
  }, 1000 * 60 * 5  ); // 每5分钟
}

// update today for appState.isFestiveDay
holiday.updateToday(appState);
runInterval();
// 每月28号写当月的评分
writeMonthRates();