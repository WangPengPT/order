// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_ODIVELAS",
    script: "./server.js",
	cwd: "/root/order/dist",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : true,
	  HTTPS_HEAD: "sushi",
      PORT: 6004,
      QR_ADDR: "https://sushi.xiaoxiong.pt:6004/client.html?table=",
      TABLE_NUMBER: [[1,9],[11,19],[21,29],[31,39],[51,59]],
      SAVE_ADDR: "save/sc_odivelas",
    }
  }]
}