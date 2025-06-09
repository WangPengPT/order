// ecosystem.config.js
module.exports = {
  apps: [{
    name: "DownloadPrinter",
    script: "./server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "100M",
    env: {
      NODE_ENV: "production",
      PORT: 8080,
    }
  }]
}