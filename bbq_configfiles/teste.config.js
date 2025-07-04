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
      USE_HTTPS : false,
	  HTTPS_HEAD: "sushi",
      PORT: 8000,
      QR_ADDR: "http://146.59.150.128:8000/client.html?table=",
      TABLE_NUMBER: [[1,50]],
      SAVE_ADDR: "save/demo1",
    }
  }]
}