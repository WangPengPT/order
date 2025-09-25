// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_LINDAAVELHA",
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
      PORT: 6005,
      QR_ADDR: "https://sushi.xiaoxiong.pt:6005/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:6005",
      TABLE_NUMBER: [[1,19],[29,39]],
      SAVE_ADDR: "save/sc_linda_a_velha",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}