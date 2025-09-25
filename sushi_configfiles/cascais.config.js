// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_CASCAIS",
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
      PORT: 6006,
      QR_ADDR: "https://sushi.xiaoxiong.pt:6006/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:6006",
      TABLE_NUMBER: [[1,10],[13,13],[17,23],[25,28],[31,35],[41,43],[52,53]],
      SAVE_ADDR: "save/sc_cascais",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}