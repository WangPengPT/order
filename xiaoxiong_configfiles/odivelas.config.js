// ecosystem.config.js
module.exports = {
  apps: [{
    name: "XX_ODIVELAS",
    script: "./server.js",
    cwd: "../dist",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS: true,
      HTTPS_HEAD: "order",
      PORT: 503,
      QR_ADDR: "https://order.xiaoxiong.pt:503/client.html?table=",
	  ADDR: "https://order.xiaoxiong.pt:503",
	  ADMIN_PASS: "1015",
      TABLES_NUMBER: [[2,14],[19,26],[33,38]],
      SAVE_ADDR: "save/xx_odivelas",
	  JWT_SECRET: "my_jwt_secret_key"
    }
  }]
}