// ecosystem.config.js
module.exports = {
  apps: [{
    name: "SC_MARQUES",
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
      PORT: 8000,
      QR_ADDR: "https://sushi.xiaoxiong.pt:8000/client.html?table=",
      ADDR: "https://sushi.xiaoxiong.pt:8000",
      TABLE_NUMBER: [[1,9],[21,26],[41,48],[63,67]],
      SAVE_ADDR: "save/sc_marques",
      JWT_SECRET: "my_jwt_secret_key",
      ADMIN_PASS: "1015"
    }
  }]
}