const winston = require('winston')
require('winston-daily-rotate-file') // 引入插件

const transport = new winston.transports.DailyRotateFile({
  filename: 'logs/socket-%DATE%.log',   // 每天一个新文件
  datePattern: 'YYYY-MM-DD',            // 日期格式
  zippedArchive: false,                 // 可设为 true 开启 .gz 压缩
  maxSize: '5m',                        // 每个文件最多 5MB
  maxFiles: '90d'                       // 最多保留 14 天的日志
})
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}] ${message}`
    })
  ),
  transports: [
    transport,
    new winston.transports.Console() // 可选：终端同时显示
  ]
})

function formatOrderLog(order) {
  const name = order.name?.trim() || '(sem nome)'
  const note = order.note?.trim() || '(nenhuma)'

  let lines = [
    `新的订单 - 桌号: ${order.table}`,
    `名字: ${name}`,
    `备注: ${note}`,
    `菜:`
  ]

  for (const item of order.items) {
    const line = `- ${item.name} x${item.quantity}` +
      (item.dishid || item.price || item.discount
        ? ` | ID: ${item.dishid || '---'} | €${parseFloat(item.price || 0).toFixed(2)} | %${item.discount}`
        : ''
      )
    lines.push(line)
  }

  lines.push('--------------------------------------------------')
  return lines.join('\n')
}

function formatPrintLog(order) {
  const people = order.people
  const table = order.table
  const name = order.name?.trim() || '(sem nome)'
  const note = order.note?.trim() || '(nenhuma)'
  let lines = [
    `桌号: ${table} | 人数: ${people}`,
    `名字: ${name}`,
    `备注: ${note}`,
    `菜: `,
  ]

  for (const item of order.items) {
    const line = "- "+(item.dishid
        ? ` | ID: ${item.dishid || '---'}`
        : ''
      ) + `| Notes: ${item.notes}` + 
      `${item.name} x${item.quantity}`
      
    lines.push(line)
  }

  lines.push('--------------------------------------------------')
  return lines.join('\n')
}

module.exports = {
  logger,
  formatOrderLog,
  formatPrintLog
}
