// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_COIMBRA",
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
      PORT: 8006,
      QR_ADDR: "https://sushi.xiaoxiong.pt:8006/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:8006",
      TABLE_NUMBER: [[1,56]],
      SAVE_ADDR: "save/sc_coimbra",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}