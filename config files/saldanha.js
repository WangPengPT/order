// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_SALDANHA",
    script: "../server/server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : false,
      PORT: 600,
      QR_ADDR: "https://order.xiaoxiong.pt:600/client.html?table=",
      TABLE_NUMBER: [[2,25]],
      SAVE_ADDR: "save/sc_saldanha",
    }
  }]
}