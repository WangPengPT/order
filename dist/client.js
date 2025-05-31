const express = require('express');

// 创建express应用
const app = express();
const port = 3000; // 设置端口号

app.use(express.static('../client/dist'));

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});