// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_LARANJEIRAS",
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
      PORT: 6001,
      QR_ADDR: "https://sushi.xiaoxiong.pt:6001/client.html?table=",
      TABLE_NUMBER: [[1,9],[11,12],[20,28],[31,35]],
      SAVE_ADDR: "save/sc_laranjeiras",
    }
  }]
}