// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_OEIRAS",
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
      PORT: 6003,
      QR_ADDR: "https://sushi.xiaoxiong.pt:6003/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:6003",
      TABLE_NUMBER: [[1,5],[11,15],[21,24],[31,33],[41,46],[51,56],[61,64],[71,72],[81,82]],
      SAVE_ADDR: "save/sc_oeiras",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}