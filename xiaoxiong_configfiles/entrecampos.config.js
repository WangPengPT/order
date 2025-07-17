// ecosystem.config.js
module.exports = {
  apps: [{
    name: "XX_ENTRECAMPOS",
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
      PORT: 501,
      QR_ADDR: "https://order.xiaoxiong.pt:501/client.html?table=",
      TABLE_NUMBER: [[1, 35]],
      SAVE_ADDR: "save/xx_entrecampos",
      ENABLE_ROAST_DUCK: false,
	  ENABLE_MENU_LUNCH: false,
    }
  }]
}