// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_EXPO",
    script: "./server.js",
	cwd: "/root/order/dist",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : true,
      PORT: 802,
      QR_ADDR: "https://sushi.xiaoxiong.pt:802/client.html?table=",
      TABLE_NUMBER: [[1,9],[17,19],[20,31]],
      SAVE_ADDR: "save/sc_expo",
    }
  }]
}