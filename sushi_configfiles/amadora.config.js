// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_AMADORA",
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
      PORT: 8004,
      QR_ADDR: "https://sushi.xiaoxiong.pt:8004/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:8004",
      TABLE_NUMBER: [[1,5],[11,16],[21,26],[31,34],[41,44],[51,54],[61,68],[71,78]],
      SAVE_ADDR: "save/sc_amadora",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}