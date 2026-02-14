// ecosystem.config.js
module.exports = {
  apps: [{
    name: "GHOST_XIAOXIONG_RAMEN_SALDANHA",
    script: "./server.js",
	cwd: "../dist",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : true,
	  HTTPS_HEAD: "v",
      PORT: 9510,
      QR_ADDR: "https://v.xiaoxiong.pt:9510/client.html?table=",
      ADDR: "https://v.xiaoxiong.pt:9510",
      TABLE_NUMBER: [[1,50]],
      SAVE_ADDR: "save/ghost_xiaoxiong_ramen_saldanha",
	  TEST_ENVIRONMENT: true,
      JWT_SECRET: "my_jwt_secret_key"
    }
  }]
}