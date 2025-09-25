// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_SETUBAL",
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
      PORT: 8003,
      QR_ADDR: "https://sushi.xiaoxiong.pt:8003/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:8003",
      TABLE_NUMBER: [[2,2],[4,4],[6,6],[8,10],[12,12],[14,15],[18,18],[20,20],[23,24],[26,26],[28,28]],
      SAVE_ADDR: "save/sc_setubal",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}