# auto-update.sh 放在服务器上
#!/bin/bash
cd ./project

echo "🚮清理"
rm -rf dist

echo "📦 安装依赖..."
npm install

echo "🔨 构建项目..."
 npm run build

echo "🚀 重启应用..."
cd ..
pm2 restart ecosystem.config.js

echo "✅ 更新完成！"