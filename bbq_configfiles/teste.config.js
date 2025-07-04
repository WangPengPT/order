// ecosystem.config.js
module.exports = {
  apps: [{
    name: "BBQ_DEMO",
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
      PORT: 10000,
      QR_ADDR: "https://sushi.xiaoxiong.pt:10000/client.html?table=",
      TABLE_NUMBER: [[1,50]],
      SAVE_ADDR: "save/demo1",
    }
  }]
}