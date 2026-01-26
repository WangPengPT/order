// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_TESTE",
    script: "./server.js",
	cwd: "../dist",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : false,
	  HTTPS_HEAD: "v",
      PORT: 7000,
      QR_ADDR: "https://v.xiaoxiong.pt:7000/client.html?table=",
	  ADDR: "https://v.xiaoxiong.pt:7000",
      TABLE_NUMBER: [[1,50]],
      SAVE_ADDR: "save/sc_teste",
      JWT_SECRET: "my_jwt_secret_key"
    }
  }]
}