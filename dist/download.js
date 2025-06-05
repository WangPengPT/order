const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // 假设我们有一个要下载的文件
  const filePath = path.join(__dirname, 'JavaPrinter.jar');
  const stat = fs.statSync(filePath);

  // 设置HTTP头，告诉浏览器这是一个要下载的文件
  res.setHeader('Content-Type', 'application/octet-stream');
  res.setHeader('Content-Disposition', 'attachment; filename=JavaPrinter.jar');
  res.setHeader('Content-Length', stat.size);

  // 创建可读流并管道到响应中
  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});