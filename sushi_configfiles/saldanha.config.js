// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_SALDANHA",
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
      PORT: 6007,
      QR_ADDR: "https://sushi.xiaoxiong.pt:6007/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:6007",
      ADMIN_PASS: "1015",
      TABLE_NUMBER: [[2,25]],
      SAVE_ADDR: "save/sc_saldanha",
      JWT_SECRET: "my_jwt_secret_key"
    }
  }]
}