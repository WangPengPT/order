// ecosystem.config.js
module.exports = {
  apps: [{
    name: "xiaoxiong_entrecampos",
    script: "./server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : true,
      PORT: 501,
      QR_ADDR: "https://order.xiaoxiong.pt:501/client.html?table=",
    }
  }]
}