// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_EXPO",
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
      PORT: 8002,
      QR_ADDR: "https://sushi.xiaoxiong.pt:8002/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:8002",
      TABLE_NUMBER: [[1,9],[17,19],[20,31]],
      SAVE_ADDR: "save/sc_expo",
      INS_URL: "https://www.instagram.com/sushicome_expo/",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}