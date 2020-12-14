// -----------------------------
// File: src/models.Student.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 10/12/2020
// Brief: Index backend server - Plataforma Conectou
// -----------------------------

// -----------------------------
// Imports
const mongoose = require('../database');

// -----------------------------
// Schema
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 120,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  birthDay: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
