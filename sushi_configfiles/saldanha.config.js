// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_SALDANHA",
    script: "./server.js",
	cwd: "/root/order/dist",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : true,
      PORT: 6000,
      QR_ADDR: "https://sushi.xiaoxiong.pt:6000/client.html?table=",
      TABLE_NUMBER: [[2,25]],
      SAVE_ADDR: "save/sc_saldanha",
    }
  }]
}