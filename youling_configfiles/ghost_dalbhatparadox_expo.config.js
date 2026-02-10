// ecosystem.config.js
module.exports = {
  apps: [{
    name: "GHOST_DalBhatParadox_EXPO",
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
      PORT: 9501,
      QR_ADDR: "https://v.xiaoxiong.pt:9501/client.html?table=",
      ADDR: "https://v.xiaoxiong.pt:9501",
      TABLE_NUMBER: [[1,50]],
      SAVE_ADDR: "save/ghost_dalbhatparadox_expo",
	  TEST_ENVIRONMENT: true,
      JWT_SECRET: "my_jwt_secret_key"
    }
  }]
}