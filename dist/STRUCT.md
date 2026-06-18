# server — 主服务端架构文档

主服务端是整个系统的数据核心，负责持久化存储、业务逻辑处理、支付结算以及向所有前端实时推送事件。

---

## 技术栈

| 类目       | 技术                                       |
|------------|--------------------------------------------|
| 运行时     | Node.js（CommonJS）                        |
| Web 框架   | Express 4                                  |
| 数据库     | MongoDB 8（Replica Set `rs0`，支持事务）    |
| 实时通信   | Socket.IO 4                                |
| 认证       | JWT (`jsonwebtoken`) + bcrypt              |
| 文件上传   | Multer                                     |
| 日志       | Winston + winston-daily-rotate-file        |
| 日期       | Luxon                                      |
| 压缩       | compression（gzip 响应）                   |
| HTTPS      | Let's Encrypt（`order.xiaoxiong.pt`）       |
| 测试       | Jest                                       |

---

## 目录结构

```
server/
├── server.js                  # 应用入口：路由注册、Server/Socket.IO 初始化
├── db.js                      # MongoDB 连接、事务封装（withTransaction）
├── state.js                   # 全局运行时状态 AppState（内存状态机）
├── controllers/
│   ├── paymentController.js   # 支付 REST 接口（结账、查询、回调、对账）
│   ├── DatasController.js     # 数据导入/导出（菜单、用户、页面、AppState）
│   ├── uploadController.js    # 图片/文件上传接口
│   └── menuController.js      # 菜单相关接口
├── services/                  # 业务逻辑层（无直接 HTTP 依赖）
│   ├── menuService.js         # 菜单 CRUD、分类、排序
│   ├── orderService.js        # 订单创建、状态流转
│   ├── userService.js         # 用户注册/登录、积分
│   ├── tableService.js        # 桌台状态管理
│   ├── alertMessageService.js # 系统消息推送
│   ├── appStateService.js     # AppState 持久化与同步
│   ├── customDishService.js   # 自定义菜品（DIY 搭配）
│   ├── dictionaryService.js   # 字典/翻译数据
│   ├── dataAnalizeService.js  # 数据统计分析
│   ├── vipUserManager.js      # VIP 用户权益
│   ├── webPageDesignService.js # 可编辑落地页设计
│   ├── varietyShopsService.js # 多店铺管理
│   ├── zbossOrder.js          # Zboss 外部订单对接
│   ├── uploadService.js       # 文件存储管理
│   │
│   │  ── 支付网关 ──
│   ├── mbwayService.js        # MBway 葡萄牙手机支付
│   ├── multibancoService.js   # Multibanco ATM 支付
│   ├── creditCardService.js   # 信用卡支付
│   ├── directDebitService.js  # 直接扣款
│   ├── gatewayPayService.js   # 通用支付网关
│   ├── ifthenpayCheckoutService.js # IFthenPay Checkout
│   └── listOfPaymentsService.js   # 支付记录聚合
├── socket/                    # Socket.IO 事件处理层
│   ├── socketService.js       # Socket 总入口，注册所有 namespace
│   ├── centerSocket.js        # 中心调度（mgServer ↔ client 转发）
│   ├── tableSocket.js         # 桌台实时事件
│   ├── orderSocket.js         # 订单实时事件
│   ├── reserveSocket.js       # 预约实时事件
│   ├── userSocket.js          # 用户实时事件
│   ├── customDishSocket.js    # 自定义菜品实时同步
│   ├── dictionarySocket.js    # 字典实时同步
│   ├── deliverySocket.js      # 外卖配送事件
│   ├── AppStateSocket.js      # AppState 实时同步
│   ├── AlertMessageSocket.js  # 消息推送
│   ├── dataAnalizeSocket.js   # 数据分析推送
│   ├── varietyShopsSocket.js  # 多店铺实时
│   └── webPageDesignSocket.js # 页面设计实时预览
├── repositories/              # 数据访问层（MongoDB CRUD 封装）
│   ├── menuRepository.js
│   ├── userRepository.js
│   ├── customDishRepository.js
│   ├── dictionaryRepositoty.js
│   ├── checkoutRepository.js
│   ├── appStateRepository.js
│   ├── alertMessageRepository.js
│   ├── dailyOrderRepository.js
│   ├── monthlyRateRepository.js
│   ├── menuOrderingRepository.js
│   ├── webpageRepository.js
│   └── varietyShopsRepository.js
├── middlewares/
│   ├── authMiddleware.js      # JWT 鉴权中间件
│   └── uploadMiddleware.js    # Multer 文件上传中间件
├── utils/
│   ├── logger.js              # Winston 日志实例
│   └── holiday.js             # 节假日工具
├── model/                     # 数据模型定义
├── webPages/                  # 静态落地页模板
├── public/                    # 静态资源（前端构建产物）
└── tests/                     # Jest 测试
```

---

## 数据流

```
HTTP 请求
    │
    ▼
authMiddleware（JWT 验证）
    │
    ▼
Controller（解析参数，调用 Service）
    │
    ▼
Service（业务逻辑，调用 Repository）
    │
    ▼
Repository（MongoDB CRUD）
    │
    ▼
返回结果 → Controller → HTTP 响应
    │
    └─→ Socket.IO 广播实时事件给前端
```

---

## 支付流程

```
客户端 POST /api/checkout/request
    │
    ▼
paymentController.createCheckout
    │
    ├─→ MBway: mbwayService.js → IFthenPay MBway API
    ├─→ Multibanco: multibancoService.js → IFthenPay API
    ├─→ 信用卡: creditCardService.js → IFthenPay Gateway
    └─→ IFthenPay Checkout: ifthenpayCheckoutService.js
    │
    ▼
checkoutRepository（记录订单状态）
    │
    ▼
支付回调 POST /api/checkout/callback/ifthenpay
    │
    ▼
更新订单状态 → Socket.IO 通知前端
```

---

## 环境变量

| 变量名        | 说明                                      |
|---------------|-------------------------------------------|
| `USE_HTTPS`   | `"true"` 时启用 HTTPS                     |
| `HTTPS_HEAD`  | Let's Encrypt 证书域名前缀（默认 `order`）|
| `SAVE_ADDR`   | MongoDB 数据库名后缀（默认 `default`）     |

---

## MongoDB 配置要求

需启用 Replica Set（`rs0`）才能使用事务，见项目根目录 `server/README.md`。

```
数据库名格式：db-{SAVE_ADDR 最后一段}
默认数据库名：db-default
```
