// ecosystem.config.js
module.exports = {
  apps: [{
    name: "BBQ_DEMO",
    script: "./server.js",
	cwd: "../dist_bbq",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : true,
	  HTTPS_HEAD: "v",
      PORT: 8000,
      QR_ADDR: "https://v.xiaoxiong.pt:8000/client.html?table=",
      ADDR: "https://v.xiaoxiong.pt:8000/client.html",
      TABLE_NUMBER: [[1,50]],
      SAVE_ADDR: "save/bbq_demo",
	  TEST_ENVIRONMENT: true,
    JWT_SECRET: "my_jwt_secret_key"
    }
  }]
}