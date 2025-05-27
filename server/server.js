const express = require("express");
const compression = require('compression');
const multer = require('multer');
const fs = require('fs');
const csv = require('csv-parser');

const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// 初始化服务
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // 前端开发服务器端口
        methods: ["GET", "POST"]
    }
});

// 数据存储
const state = {
    menu: [
        { id: 1, name: "牛排", image: "/images/steak.jpg" },
        { id: 2, name: "沙拉", image: "/images/salad.jpg" },
        { id: 3, name: "蛋糕", image: "/images/cake.jpg" },
    ],
    old_orders: [

    ],
    orders: new Map(), // key: orderId
};

let max_order_id = 1;

function loadmenu()
{
    try {
        const filePath = path.join(__dirname, 'uploads', 'data.json');
        //console.log(filePath);
        const data = fs.readFileSync(filePath, 'utf8');
        //console.log(data);
        const jsonData = JSON.parse(data);
        state.menu = jsonData;

        //console.log(state.menu);
    } catch (err) {
        console.log('文件加载失败');
    }
}

// 静态文件服务
app.use(compression());
app.use(express.static(path.join(__dirname, "public"), {
    setHeaders: (res, path) => {
        if (path.endsWith('.gz')) {
            res.set('Content-Encoding', 'gzip')
        }
    }
}));

loadmenu();

// WebSocket连接
io.on("connection", (socket) => {
    console.log("客户端连接:", socket.id);

    // 发送菜单数据给用户端和管理端
    socket.emit("menu_data", state.menu);

    // remove expire orders
    const ORDER_EXPIRE_MINUTES = 30;
    const now = Date.now();
    state.old_orders = state.old_orders.filter(item => {
        const elapsed = (now - item.timestamp) / 1000 / 60; // 转换为分钟

        if (elapsed < ORDER_EXPIRE_MINUTES) {
            return true;
        }
    });

    // send old order to admin
    socket.emit("old_orders", state.old_orders);


    // 处理订单提交
    socket.on("submit_order", (orderData) => {
        // 数据验证
        if (!orderData.table) {
            return socket.emit("error", "订单数据不完整");
        }

        // 生成唯一订单
        max_order_id++;
        const orderId = ("0000" + max_order_id).slice(-4);
        const order = {
            id: orderId,
            ...orderData,
            status: "pending",
            timestamp: new Date().getTime()
        };

        // 存储订单
        state.orders.set(orderId, order);

        // 广播给所有管理端
        io.emit("new_order", order); // 关键事件名称
        console.log("📢 已广播新订单:", order); // 调试日志

        // 返回确认给用户端
        socket.emit("order_confirmed", orderId);

        if (state.old_orders.length >= 100)
        {
            state.old_orders.shift();
        }
        state.old_orders.push(order)
    });

    socket.on('get_desk_id', (value)=> {
        socket.emit("desk_id", "#" + value);
    });
});

// 配置 multer 处理文件上传
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// 创建上传目录（如果不存在）
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

const xkeys = [
    "AIPO",
    "AMENDOIM",
    "CRUSTÁCEOS",
    "DIÓXIDO DE ENXOFRE E SULFITOS",
    "GLÚTEN",
    "LACTICÍNIOS",
    "LUPINS",
    "MOLUSCOS",
    "MOSTRADA",
    "NOZES",
    "OVO",
    "PEIXA",
    "SOJA",
    "SÉSAMO",
];

const keyimageids = [7,9,2,12,1,5,16,14,10,6,3,8,13,11];

// 路由：处理文件上传和解析
app.post('/upload', upload.single('csvFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    if (!req.body.password)  {
        fs.unlinkSync(req.file.path);
        return res.status(400).send('No password');
    }

    if (req.body.password != "1015")  {
        fs.unlinkSync(req.file.path);
        return res.status(400).send('Error password');
    }

    const results = [];

    // 流式读取并解析 CSV
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => {
            // 转换为自定义格式（示例：字段重命名 + 添加时间戳）
            //console.log(data)

            var x = [];

            Object.entries(data).forEach(([key, value]) => {
                //console.log(key, value);

                for (let i = 0; i < xkeys.length; i++) {
                    if (value == "TRUE") {
                        if (key.startsWith(xkeys[i]))
                        {
                            x.push(keyimageids[i]);
                        }
                    }
                }
            });


            var id = data['Variant SKU'];
            if (id.startsWith("'"))
            {
                id = id.substring(1);
            }

            const transformed = {
                id: id,
                name: data['Title'],
                note: data['Body (HTML)'],
                category: data['Type'],
                image: data['Image Src'],
                x: x,
            };
            results.push(transformed);
        })
        .on('end', () => {
            // 保存到 JSON 文件（可根据需求改为数据库操作）
            const outputFilename = `data.json`;
            fs.writeFileSync(`uploads/${outputFilename}`, JSON.stringify(results, null, 2));

            // 删除临时上传的 CSV 文件（可选）
            fs.unlinkSync(req.file.path);

            res.send({
                message: 'File processed successfully',
                savedFile: outputFilename,
                dataSample: results.slice(0, 3) // 返回前3条数据示例
            });

            loadmenu();
        })
        .on('error', (err) => {
            res.status(500).send(`CSV processing failed: ${err.message}`);
        });
});

// 通配符路由（必须放在最后）
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 启动服务
server.listen(80, () => {
    console.log(`
  🚀 服务已启动: http://localhost
  `);
});