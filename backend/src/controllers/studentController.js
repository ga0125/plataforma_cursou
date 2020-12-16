// -----------------------------
// File: src/controllers/studentController.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 10/12/2020
// Brief: Student Controller
// -----------------------------

// -----------------------------
// imports
const router = require('express').Router();
const Student = require('../models/Student');
const {
  emailAlreadyExists,
  notFoundException,
  genericServerException,
} = require('./exceptions');

// -----------------------------
// Global constants
const API_PATH = '/api/v1/student';

// -----------------------------
// List all Students
router.get('/', async (req, res) => {
  try {
    const listStudent = await Student.find();

    return res.send({ listStudent });
  } catch (err) {
    return genericServerException(res);
  }
});

// -----------------------------
// List a specific Student
router.get('/:studentID', async (req, res) => {
  try {
    const retrieveStudent = await Student.findById(req.params.studentID);
    if (!retrieveStudent) {
      return notFoundException(res);
    }

    return res.send({ retrieveStudent });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return notFoundException(res);
    }
    return genericServerException(res);
  }
});

// -----------------------------
// Create a Student
router.post('/', async (req, res) => {
  try {
    const studentCreate = await Student.create(req.body);
    return res.status(201).send({ studentCreate });
  } catch (err) {
    if (err.code === 11000) {
      return emailAlreadyExists(res);
    }
    return genericServerException(res);
  }
});

// -----------------------------
// Update a Student information
router.put('/:studentID', async (req, res) => {
  try {
    const updateStudent = await Student.findByIdAndUpdate(req.params.studentID, req.body, { new: true });

    if (!updateStudent) {
      return notFoundException(res);
    }

    return res.send({ updateStudent });
  } catch (err) {
    if (err.code === 11000) {
      return emailAlreadyExists(res);
    }
    if (err.kind === 'ObjectId') {
      return notFoundException(res);
    }
    return genericServerException(res);
  }
});

// -----------------------------
// Update a Student information
router.delete('/:studentID', async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndRemove(req.params.studentID);

    if (!deleteStudent) {
      return notFoundException(res);
    }

    return res.status(204).send({ deleteStudent });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return notFoundException(res);
    }
    return genericServerException(res);
  }
});

module.exports = (app) => app.use(API_PATH, router);
