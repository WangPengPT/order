// ecosystem.config.js
module.exports = {
  apps: [{
    name: "xiaoxiong_saldanha",
    script: "./server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      ADMIN_PASS: 1015,
      NODE_ENV: "production",
      USE_HTTPS : true,
      PORT: 500,
      QR_ADDR: "https://order.xiaoxiong.pt:500/client.html?table=",
      TABLES_NUMBER: [[2,48]],
    }
  }]
}