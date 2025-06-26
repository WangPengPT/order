// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_MARQUES",
    script: "../dist/server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : true,
      PORT: 800,
      QR_ADDR: "https://sushi.xiaoxiong.pt:800/client.html?table=",
      TABLE_NUMBER: [[1,9],[21,26],[41,48],[63,67]],
      SAVE_ADDR: "save/sc_marques",
    }
  }]
}