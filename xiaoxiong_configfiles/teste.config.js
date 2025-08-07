// ecosystem.config.js
module.exports = {
  apps: [{
    name: "XX_TEST",
    script: "./server.js",
	cwd: "../dist_xiaoxiong",
    instances: 1,
    autorestart: false,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : true,
	  HTTPS_HEAD: "v",
      PORT: 5000,
      QR_ADDR: "https://v.xiaoxiong.pt:5000/client.html?table=",
      TABLE_NUMBER: [[1,50]],
      SAVE_ADDR: "save/xx_test",
	  ENABLE_ROAST_DUCK: true,
	  ENABLE_MENU_LUNCH: true,
    }
  }]
}