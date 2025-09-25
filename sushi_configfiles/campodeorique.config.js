// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_CAMPODEORIQUE",
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
      PORT: 8005,
      QR_ADDR: "https://sushi.xiaoxiong.pt:8005/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:8005",
      TABLE_NUMBER: [[1,11],[14,26],[30,45]],
      SAVE_ADDR: "save/sc_campodeorique",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}