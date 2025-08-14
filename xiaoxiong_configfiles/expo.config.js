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
      TABLES_NUMBER: [[2,2],[4,4],[6,6],[8,8],[10,10],[14,14],[16,16],[20,20],[22,22],[24,24],[26,26],[28,28],[30,30],[50,50],[52,52],[60,60],[62,62],[64,64],[70,70],[72,72],[74,74],[80,80],[82,82],[84,84],[90,90],[92,92],[94,94]],
      SAVE_ADDR: "save/xx_expo",
      ENABLE_ROAST_DUCK: false,
	  ENABLE_MENU_LUNCH: false,
    }
  }]
}