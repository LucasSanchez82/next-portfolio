module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "bun",
      args: "run start",
      // Tell PM2 to load .env file
      env_file: ".env",

      // These variables will override any duplicates from .env
      env: {
        PORT: 3001,
        NODE_ENV: "production",
      },

      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
      },

      env_development: {
        NODE_ENV: "development",
        PORT: 3001,
      },

      // Other configurations
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
