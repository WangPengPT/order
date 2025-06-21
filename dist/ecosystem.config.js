// ecosystem.config.js
module.exports = {
  apps: [{
    name: "order",
    script: "./server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      PORT: 443,
      QR_ADDR: "https://order.xiaoxiong.pt/client.html?table=",
    }
  }]
}