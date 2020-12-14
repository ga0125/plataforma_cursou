// -----------------------------
// File: src/models.Course.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 10/12/2020
// Brief: Index backend server - Plataforma Conectou
// -----------------------------

// -----------------------------
// Imports
const mongoose = require('../database');

// -----------------------------
// Schema
const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
    maxlength: 120,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
