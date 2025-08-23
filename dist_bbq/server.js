const express = require("express");
const compression = require('compression');
const cors = require('cors');
const http = require("http");
const https = require('https');
const fs = require('fs');
const { Server } = require("socket.io");
const path = require("path");
const menuController = require('./controllers/menuController.js');
const { UploadController } = require('./controllers/uploadController.js');
const { SocketServices } = require('./socket/socketService.js');
const {upload, uploadMiddleware} = require('./middlewares/uploadMiddleware.js');
const { logger } = require('./utils/logger.js')
const { webPageDesignService } = require("./services/webPageDesignService.js");
const DB = require("./db.js");


const centerSocket = require('./socket/centerSocket.js');


const app = express();
app.use(cors());
app.use(compression());

app.use(express.urlencoded({ extended: true }))

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

const socketService = new SocketServices(io)

const uploadController = new UploadController(socketService.webPageDesignSocket.webPageDesignService)

// 路由只保留上传接口
app.post('/upload', upload.any(), uploadController.handleUpload);
app.post('/upload_image', upload.single('image'), uploadController.handleUploadImage);
app.post('/upload_welcomeImage', 
  uploadMiddleware.array('image', 5),
  (req, res) => {
    uploadController.handleUploadWelcomeImage(req, res)
  }
);
app.post('/upload_logo', upload.single('image'),
  (req, res) => {
    uploadController.handleUploadWelcomeLogo(req, res)
  }
);

app.use(compression());
app.use(express.static(path.join(__dirname, "public"), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.gz')) {
      res.set('Content-Encoding', 'gzip');
    }
  }
}));

async function main() {
  await DB.init();

  await socketService.initializeDatas()
  menuController.loadMenu();

  socketService.initSocket()
  centerSocket.init()

  const PORT = process.env.PORT || 8080;
  server.listen(PORT, '0.0.0.0', () => {
    logger.info(`🟢 服务器已启动，监听端口 ${PORT}`);
  });

  runCleanInterval();
  // runFandaysInterval();
  writeOrders();
  writeMonthRates()
  // appStateService.saveDailyOrders();
}

app.get('/table', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

main();

async function OnQuit()
{
  logger.info("\n🛑 收到终止信号，正在保存数据...");
  await socketService.close()
  webPageDesignService.savePages()
  process.exit(0);
}

// 捕获关闭信号时保存数据
process.on("SIGINT",  async () => {
  await OnQuit();
});

process.on("SIGTERM", async () => {
  await OnQuit();
});


let needClean = true;

function runCleanInterval() {
  setTimeout(() => {
    const now = new Date();
    if (now.getHours() == 1)
    {
      if ( needClean ) {
        //appState.clearAll();
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

// function runFandaysInterval(){
//   setTimeout(() => {
//     const now = new Date();
//     if (now.getDate() == 11 || now.getDate() == 12 || now.getDate() == 25 || now.getDate() == 26)
//     {
//       if (!appState.hasBox){
//         appState.hasBox = true;
//         socketService.emitHasBoxStatus()
//       }
//     }
//     else
//     {
//       if(appState.hasBox){
//         appState.hasBox = false;
//         socketService.emitHasBoxStatus()
//       }
//     }
//
//     runFandaysInterval();
//   }, 1000 * 3600);
// }

let needWriteDailyOrders = true;
let needWriteMonthlyOrders = true;
let needWriteYearlyOrders = true;
function writeOrders() {
  setTimeout(() => {
    const now = new Date();
    // 每天0点
    if (now.getHours() === 0) {
      if (needWriteDailyOrders) {
        socketService.appStateSocket.appStateService.saveDailyOrders() // 将当天的销售量数据写入文件
        socketService.appStateSocket.appStateService.clearDailyOrders() // 清空当天的销售量数据
      }
      needWriteDailyOrders = false;
    } else {
      needWriteDailyOrders = true;
    }

    // 每月1号
    if (now.getDate() === 1) {
      if (needWriteMonthlyOrders) {
        socketService.appStateSocket.appStateService.saveMonthlyOrders() // 将当月的销售量数据写入文件
        socketService.appStateSocket.appStateService.clearMonthlyOrders() // 清空当月的销售量数据
      }
      needWriteMonthlyOrders = false;
    } else {
      needWriteMonthlyOrders = true;
    }

    // 每年1月1号
    if (now.getMonth() && now.getDate() === 1) {
      if (needWriteYearlyOrders) {
        socketService.appStateSocket.appStateService.saveYearlyOrders() // 将当月的销售量数据写入文件
        socketService.appStateSocket.appStateService.clearYearlyOrders() // 清空当月的销售量数据
      }
      needWriteYearlyOrders = false;
    } else {
      needWriteYearlyOrders = true;
    }

    writeOrders();
  }, 1000 * 60 * 5); // 每五分钟
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
        socketService.appStateSocket.appStateService.saveMonthRates() // 将上月的评分数据写入文件
        socketService.appStateSocket.appStateService.clearnMonthRates() // 清空上月的评分数据
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