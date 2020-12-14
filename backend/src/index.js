// -----------------------------
// File: src/index.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 10/12/2020
// Brief: Index backend server - Plataforma Conectou
// -----------------------------

// -----------------------------
// load env vars to server the application
require('dotenv').config();

// -----------------------------
// Imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use(express.json());

// -----------------------------
// Set up development logger
app.use(morgan('dev'));

// -----------------------------
// Enable cors with white list
app.use(cors());

require('./controllers/studentController')(app);
require('./controllers/courseController')(app);
require('./controllers/enrollmentController')(app);

app.listen(config.httpPort, () => console.log(`Server up and running on port: ${config.httpPort}`));
