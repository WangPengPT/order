// ecosystem.config.js
module.exports = {
  apps: [{
    name: "test sushicome",
    script: "./server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      PORT: 800,
      QR_ADDR: "https://order.xiaoxiong.pt:800/client.html?table=",
    }
  }]
}