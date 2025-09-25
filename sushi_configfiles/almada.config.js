// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_ALMADA",
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
      PORT: 6002,
      QR_ADDR: "https://sushi.xiaoxiong.pt:6002/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:6002",
      TABLE_NUMBER: [[11,25],[31,33],[41,45],[51,55],[61,62],[71,72]],
      SAVE_ADDR: "save/sc_almada",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}