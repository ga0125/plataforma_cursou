const mongoose = require('mongoose');
const config = require('../config');

// -----------------------------
// Database URL following the docker container address
const url = `mongodb://${config.dbUser}:${config.dbPass}@${config.dbHost}:${config.dbPort}/${config.dbName}?authSource=admin`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection.on('error', () => console.error('Database connection error:'));
mongoose.connection.once('open', () => console.log('Database connected'));

module.exports = mongoose;
