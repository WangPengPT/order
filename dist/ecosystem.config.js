// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_SALDANHA",
    script: "./server.js",
    instances: 1,
    autorestart: false,
    // out_file: "./logs/teste.log",
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : false,
      PORT: 80,
      QR_ADDR: "https://order.xiaoxiong.pt/client.html?table=",
      TABLES_NUMBER: [[2,25]],
      SAVE_ADDR: "save/sc_saldanha",
    }
  }]
}