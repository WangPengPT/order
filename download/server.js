const fs = require('fs');
const path = require('path');
const express = require('express');
const archiver = require('archiver');
const app = express();

// 配置下载目录（默认为当前目录下的downloads文件夹）
const DOWNLOAD_DIR = path.join(__dirname, 'downloads');

// 确保下载目录存在
if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

// 主页：显示可下载文件
app.get('/', (req, res) => {
  fs.readdir(DOWNLOAD_DIR, (err, files) => {
    if (err) return res.status(500).send('读取目录失败');
    
    if (files.length === 0) {
      return res.send(`
        <h1>file download</h1>
        <p>path：${DOWNLOAD_DIR}</p>
        <a href="/download-all">refresh</a>
      `);
    }

    // 生成文件列表HTML
    const fileList = files.map(file => {
      const filePath = path.join(DOWNLOAD_DIR, file);
      const stats = fs.statSync(filePath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      return `
        <li>
          <a href="/download/${file}">${file}</a> 
          <span>(${sizeMB} MB)</span>
        </li>
      `;
    }).join('');
    
    res.send(`
      <!DOCTYPE html>
      <html lang="zh">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Download System</title>
        <style>
          * { box-sizing: border-box; font-family: system-ui, sans-serif; }
          body { max-width: 900px; margin: 0 auto; padding: 20px; }
          h1 { color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px; }
          ul { list-style: none; padding: 0; }
          li { padding: 10px; border: 1px solid #eaeaea; margin-bottom: 10px; border-radius: 5px; }
          a { text-decoration: none; color: #1a73e8; font-size: 1.1em; }
          a:hover { text-decoration: underline; }
          .actions { display: flex; gap: 10px; margin: 20px 0; }
          button { 
            background: #1a73e8; 
            color: white; 
            border: none; 
            padding: 10px 15px; 
            border-radius: 5px; 
            cursor: pointer;
            font-size: 1em;
          }
          button:hover { background: #1557b0; }
          .footer { margin-top: 30px; color: #666; font-size: 0.9em; }
        </style>
      </head>
      <body>
        <h1>download</h1>
        <p>click file to download</p>
       
        <div><a href="https://learn.microsoft.com/en-us/java/openjdk/download">JDK</a><div>
        <h2>files: (${files.length}):</h2>
        <ul>${fileList}</ul>
        
        <div class="footer">
          <p>download path: ${DOWNLOAD_DIR}</p>
          <p>memory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB</p>
        </div>
      </body>
      </html>
    `);
  });
});

// 下载单个文件
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(DOWNLOAD_DIR, req.params.filename);
  
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    res.download(filePath, err => {
      if (err) console.error('下载失败:', err);
    });
  } else {
    res.status(404).send('文件不存在');
  }
});

// 下载所有文件（打包为ZIP）
app.get('/download-all', (req, res) => {
  fs.readdir(DOWNLOAD_DIR, (err, files) => {
    if (err || files.length === 0) {
      return res.redirect('/');
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const zipName = `download-${timestamp}.zip`;
    
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${zipName}"`);
    
    const archive = archiver('zip', {
      zlib: { level: 9 } // 最高压缩率
    });
    
    archive.on('warning', err => {
      if (err.code !== 'ENOENT') console.warn('归档警告:', err);
    });
    
    archive.on('error', err => {
      console.error('归档错误:', err);
      res.status(500).send('压缩文件时出错');
    });
    
    // 将所有文件添加到ZIP
    files.forEach(file => {
      const filePath = path.join(DOWNLOAD_DIR, file);
      if (fs.existsSync(filePath)) {
        archive.file(filePath, { name: file });
      }
    });
    
    // 完成压缩后结束响应
    archive.finalize();
    
    // 将ZIP流式传输到响应
    archive.pipe(res);
  });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n✅ start file downloads`);
  console.log(`📂 dir: ${DOWNLOAD_DIR}`);
  console.log(`👉 addr: http://localhost:${PORT}`);
  
  // 检查目录中的文件
  fs.readdir(DOWNLOAD_DIR, (err, files) => {
    if (!err) {
      const fileCount = files.filter(name => 
        !name.startsWith('.') && 
        !fs.statSync(path.join(DOWNLOAD_DIR, name)).isDirectory()
      ).length;
      
      console.log(`📝 count: ${fileCount}`);
      
      if (fileCount > 0) {
        console.log('🔍 files:');
        files.slice(0, 5).forEach(file => console.log(`   - ${file}`));
        if (fileCount > 5) console.log(`   ...还有${fileCount - 5}个文件`);
      } else {
        console.log('ℹ️  目录为空，请添加文件后刷新页面');
        console.log(`   mkdir -p ${DOWNLOAD_DIR}`);
        console.log(`   touch ${DOWNLOAD_DIR}/example.txt`);
      }
    }
  });
});