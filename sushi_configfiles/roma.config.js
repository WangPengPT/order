// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_ROMA",
    script: "./server.js",
	cwd: "../dist",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : true,
	  HTTPS_HEAD: "sushi",
      PORT: 8001,
      QR_ADDR: "https://sushi.xiaoxiong.pt:8001/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:8001",
      TABLE_NUMBER: [[1,3],[21,25],[42,45],[47,48],[61,63]],
      SAVE_ADDR: "save/sc_roma",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}