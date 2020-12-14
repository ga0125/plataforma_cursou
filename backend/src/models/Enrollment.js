// -----------------------------
// File: src/models.Enrollment.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 10/12/2020
// Brief: Index backend server - Plataforma Conectou
// -----------------------------

// -----------------------------
// Imports
const mongoose = require('../database');

// -----------------------------
// Schema
const EnrollmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    require: true,
    unique: true,
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    unique: true,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Enrollment = mongoose.model('Enrollment', EnrollmentSchema);

module.exports = Enrollment;
