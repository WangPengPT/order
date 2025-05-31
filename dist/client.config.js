// ecosystem.config.js
module.exports = {
  apps: [{
    name: "client",
    script: "./client.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      PORT: 8001
    }
  }]
}