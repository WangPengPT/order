

const config = require('config');
const express = require('express');

// 创建express应用
const app = express();
const port = config.get('app.port') + 1; // 设置端口号

app.use(express.static('../client/dist'));

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});