const winston = require('winston')
require('winston-daily-rotate-file') // 引入插件
const {format_portugal_datetime} = require('./dateTime.js')

const dirFolder = process.env.SAVE_ADDR || 'save/default'

const transport = new winston.transports.DailyRotateFile({
    filename: `logs/${dirFolder}/socket-%DATE%.log`,   // 每天一个新文件
    datePattern: 'YYYY-MM-DD',            // 日期格式
    zippedArchive: false,                 // 可设为 true 开启 .gz 压缩
    maxSize: '5m',                        // 每个文件最多 5MB
    maxFiles: '90d'                       // 最多保留 14 天的日志
})
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: () => format_portugal_datetime(Date.now())
        }),
        winston.format.printf(({level, message, timestamp}) => {
            return `${timestamp} [${level.toUpperCase()}] ${message}`
        })
    ),
    transports: [
        transport,
        new winston.transports.Console() // 可选：终端同时显示
    ]
})

function formatOrderLog(order) {
    const timestamp = format_portugal_datetime(Date.now())
    const name = order.name?.trim() || '(sem nome)'
    const note = order.note?.trim() || '(nenhuma)'

    let lines = [
        `[${timestamp}] Novo Pedido - Mesa: ${order.table}`,
        `Nome: ${name}`,
        `Nota: ${note}`,
        `Itens:`
    ]

    for (const item of order.items) {
        const line = `- ${item.name} x${item.quantity}` +
            (item.dishid || item.price
                    ? ` | ID: ${item.dishid || '---'} | €${parseFloat(item.price || 0).toFixed(2)}`
                    : ''
            )
        lines.push(line)
    }

    lines.push('--------------------------------------------------')
    return lines.join('\n')
}


module.exports = {
    logger,
    formatOrderLog
}
