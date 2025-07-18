// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_TEST",
    script: "./server.js",
	cwd: "../dist",
    instances: 1,
    autorestart: false,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : false,
	  HTTPS_HEAD: "sushi",
      PORT: 7000,
      QR_ADDR: "http://146.59.150.128:5000/client.html?table=",
      TABLE_NUMBER: [[1,50]],
      SAVE_ADDR: "save/sc_test",
    }
  }]
}