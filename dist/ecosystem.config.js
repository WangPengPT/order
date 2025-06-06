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
      PORT: 80,
      QR_ADDR: "http://173.249.22.132/client.html?table=",
    }
  }]
}