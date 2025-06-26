// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_CASCAIS",
    script: "../dist/server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS : true,
      PORT: 606,
      QR_ADDR: "https://sushi.xiaoxiong.pt:606/client.html?table=",
      TABLE_NUMBER: [[[1,10],[13,13],[17,23],[25,28],[31,35],[41,43],[52,53]],
      SAVE_ADDR: "save/sc_cascais",
    }
  }]
}