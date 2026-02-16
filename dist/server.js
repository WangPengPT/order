const express = require("express");
const compression = require('compression');
const cors = require('cors');
const http = require("http");
const https = require('https');
const fs = require('fs');
const {Server} = require("socket.io");
const path = require("path");

const {authMiddleware} = require('./middlewares/authMiddleware.js')
const menuController = require('./controllers/menuController.js');
const {UploadController} = require('./controllers/uploadController.js');
const {SocketServices} = require('./socket/socketService.js');
const {upload, memoryUpload} = require('./middlewares/uploadMiddleware.js');
const {logger} = require('./utils/logger.js')
const {webPageDesignService} = require("./services/webPageDesignService.js");
const DB = require("./db.js");
const centerSocket = require('./socket/centerSocket.js');
const {menuService} = require("./services/menuService.js");
const {DataAnalizeService} = require("./services/dataAnalizeService.js");
const {AppState, appState} = require("./state.js");
const DatasController = require("./controllers/DatasController.js");

const holiday = require('./utils/holiday.js')

const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());

app.use(express.urlencoded({extended: true}))

// 创建 HTTP 服务器和 Socket.IO
let server;
const usedHttps = process.env.USE_HTTPS || false;
if (usedHttps == "true") {
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
} else {
    server = http.createServer(app);
}

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

const socketService = new SocketServices(io, menuService)
const datasController = new DatasController(socketService.appStateSocket.appStateService.appStateRepository, socketService.userSocket.userService)
const uploadController = new UploadController()
const dataAnalizeService = new DataAnalizeService()

// 路由只保留上传接口
app.post('/upload', upload.any(), uploadController.handleUpload);
app.post('/upload_image', upload.single('image'), uploadController.handleUploadImage);

/* 不再使用自定义页面
app.post('/api/upload_background', upload.array('images'), uploadController.handleUploadBackgroundImages);

app.post('/api/upload_titleImages',
    upload.array('titleImages'), // 多张
    (req, res) => uploadController.handleUploadTitleImages(req, res)
);

app.post('/api/upload_informationImages',
    upload.array('informationImages'), // 多张
    (req, res) => uploadController.handleUploadInformationImages(req, res)
);

app.post('/api/upload_logo',
    upload.single('image'),
    (req, res) =>
        uploadController.handleUploadWelcomeLogo(req, res)
);
*/
app.get('/api/exportDatas', authMiddleware, datasController.exportDatas)

app.get('/api/exportPage/:id', authMiddleware, datasController.exportPage)

app.post('/api/import/page', memoryUpload.single('page'), datasController.importPage)

app.post('/api/import/appState', authMiddleware, memoryUpload.single('file'), datasController.importAppState)

app.post('/api/import/menu', authMiddleware, memoryUpload.single('file'), datasController.importMenu)

app.post('/api/import/users', authMiddleware, memoryUpload.single('file'), datasController.importUsers)

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
    socketService.initSocket()
    centerSocket.init(socketService.menuService)
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

// 旧客户端重定向 ------------------------------------------------------
app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/paymentPage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/reservePage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// 新客户端重定向 ------------------------------------------------------
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/takeReserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/takeaway', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/takeaway/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/reserver', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

main();

async function OnQuit() {
    try {
        logger.info("\n🛑 收到终止信号，正在保存数据...");
        await socketService.close();
        webPageDesignService.savePages();
        logger.info("✅ 数据保存完毕，安全退出。");
    } catch (err) {
        logger.error("⚠️ 保存数据时出错:", err);
    } finally {
        process.exit(0);
    }
}

// 捕获关闭信号时保存数据
process.on("SIGINT", async () => {
    await OnQuit();
});

process.on("SIGTERM", async () => {
    await OnQuit();
});

let needClean = true;

function runCleanInterval() {
    setTimeout(() => {
        const now = new Date();
        if (now.getHours() == 6) {
            if (needClean) {
                appState.clearAll();
                holiday.updateToday(appState);
            }
            needClean = false;
        } else {
            needClean = true;
        }



        runCleanInterval();
    }, 1000 * 600 * 6);
}

let needWriteDailyOrders = true;

function writeOrders() {
    setTimeout(async () => {
        const now = new Date();
        // 每天0点
        if (now.getHours() === 0) {
            if (needWriteDailyOrders) {
                await dataAnalizeService.saveDailyOrders()
                await dataAnalizeService.saveMonthlyRate()
            }
            needWriteDailyOrders = false;
        } else {
            needWriteDailyOrders = true;
        }

        writeOrders();
    }, 1000 * 60 * 3); // 每3分钟
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
            if (needWriteMonthRates) {
                socketService.appStateSocket.appStateService.saveMonthRates() // 将上月的评分数据写入文件
                socketService.appStateSocket.appStateService.clearnMonthRates() // 清空上月的评分数据
            }
            needWriteMonthRates = false;
        } else {
            needWriteMonthRates = true;
        }

        writeMonthRates();
    }, 1000 * 60 * 5); // 每5分钟
}



process.on('uncaughtException', async (err) => {
    logger.error('❌ 未捕获异常:', err);
    await OnQuit();
});

process.on('unhandledRejection', async (reason) => {
    logger.error('❌ 未处理的 Promise 拒绝:', reason);
    await OnQuit();
});

holiday.updateToday(appState);