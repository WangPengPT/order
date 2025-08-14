// ecosystem.config.js
module.exports = {
  apps: [{
    name: "XX_EXPO",
    script: "./server.js",
    cwd: "../dist_xiaoxiong",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS: true,
      HTTPS_HEAD: "order",
      PORT: 502,
      QR_ADDR: "https://order.xiaoxiong.pt:502/client.html?table=",
      TABLE_NUMBER: [[1, 35]],
      SAVE_ADDR: "save/xx_expo",
      ENABLE_ROAST_DUCK: false,
	  ENABLE_MENU_LUNCH: false,
    }
  }]
}