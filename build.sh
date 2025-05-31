#!/bin/bash

# Git Pull 与项目构建部署脚本
# 作者: Linux 命令行助手
# 功能: 自动化拉取代码、构建前后端项目并部署

# ----------------------------
# 配置部分 (根据实际情况修改)
# ----------------------------

# 项目根目录 (脚本所在目录)
PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# 客户端目录
CLIENT_DIR="client"

# 管理端目录
SERVER_DIR="manager"

# 客户端构建命令
CLIENT_BUILD_CMD="npm run build"

# 管理端构建命令
SERVER_BUILD_CMD="npm run build"

# 输出目录
PUBLIC_DIR="server/public"

# 日志文件
LOG_FILE="deploy.log"

# ----------------------------
# 函数定义
# ----------------------------

# 记录日志函数
log() {
    local timestamp
    timestamp=$(date "+%Y-%m-%d %H:%M:%S")
    echo "[$timestamp] $1"
    echo "[$timestamp] $1" >> "$PROJECT_ROOT/$LOG_FILE"
}

# 检查命令是否存在
check_command() {
    if ! command -v "$1" &> /dev/null; then
        log "错误: $1 命令未找到，请安装后再运行脚本"
        exit 1
    fi
}

# 检查目录是否存在
check_directory() {
    if [ ! -d "$1" ]; then
        log "错误: 目录 $1 不存在"
        exit 1
    fi
}

# 执行命令并检查错误
run_command() {
    log "执行命令: $1"
    eval "$1"
    local status=$?
    if [ $status -ne 0 ]; then
        log "错误: 命令执行失败 (退出码: $status)"
        exit $status
    fi
}

# ----------------------------
# 主脚本
# ----------------------------

# 初始化日志
echo "========== 部署开始 ==========" > "$PROJECT_ROOT/$LOG_FILE"
log "开始项目部署流程"

# 检查必要命令
check_command "git"
check_command "npm"
check_command "cp"

# 检查目录
check_directory "$PROJECT_ROOT"
check_directory "$PROJECT_ROOT/$CLIENT_DIR"
check_directory "$PROJECT_ROOT/$SERVER_DIR"

# 1. 拉取最新代码
log "步骤 1/5: 从 Git 仓库拉取最新代码"
cd "$PROJECT_ROOT" || exit
run_command "git pull"

# 2. 安装客户端依赖
log "步骤 2/5: 安装客户端依赖"
cd "$PROJECT_ROOT/$CLIENT_DIR" || exit
run_command "npm install"

# 3. 构建客户端
log "步骤 3/5: 构建客户端"
run_command "$CLIENT_BUILD_CMD"

# 4. 构建管理端
log "步骤 4/5: 构建管理端"
cd "$PROJECT_ROOT/$SERVER_DIR" || exit
run_command "npm install"
run_command "$SERVER_BUILD_CMD"

cp -f dist/config.js "$PROJECT_ROOT/$CLIENT_DIR/dist/config.js"
cp -f dist/config.js "$PROJECT_ROOT/$CLIENT_DIR/dist/spa/config.js"

# 完成
log "部署成功完成!"
echo "========== 部署结束 ==========" >> "$PROJECT_ROOT/$LOG_FILE"

echo ""
echo "部署成功完成!"
echo "详细日志请查看: $PROJECT_ROOT/$LOG_FILE"