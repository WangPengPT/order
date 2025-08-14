// ecosystem.config.js
module.exports = {
  apps: [{
    name: "XX_SALDANHA",
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
      PORT: 500,
      QR_ADDR: "https://order.xiaoxiong.pt:500/client.html?table=",
      TABLES_NUMBER: [[2, 48]],
      SAVE_ADDR: "save/xx_saldanha",
      ENABLE_ROAST_DUCK: false,
	  ENABLE_MENU_LUNCH: true,
    }
  }]
}