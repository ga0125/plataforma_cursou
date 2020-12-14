// -----------------------------
// File: src/config/index.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 10/12/2020
// Brief: Config file application
// -----------------------------

const config = {
  httpPort: process.env.SERVICE_PORT || 3000,
  dbHost: process.env.DB_HOST || '127.0.0.1',
  dbPort: process.env.DB_PORT || 27017,
  dbName: process.env.DB_NAME || 'db_dev',
  dbUser: process.env.DB_USER || 'admin',
  dbPass: process.env.DB_PASS || '123456',
};

module.exports = config;
