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
      NODE_ENV: "production",
      USE_HTTPS : true,
      PORT: 444,
      QR_ADDR: "https://order.xiaoxiong.pt:8001/client.html?table=",
    }
  }]
}