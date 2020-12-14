// -----------------------------
// File: src/controllers/enrollmentController.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 10/12/2020
// Brief: Student Controller
// -----------------------------

// -----------------------------
// imports
const router = require('express').Router();
const Enrollment = require('../models/Enrollment');
const {
  enrollmentAlreadyExists,
  notFoundException,
  genericServerException,
} = require('./exceptions');

// -----------------------------
// Global constants
const API_PATH = '/api/v1/enrollments';

// -----------------------------
// List all Enrollments
router.get('/', async (req, res) => {
  try {
    const listEnrollment = await Enrollment.find().populate('student').populate('courses');

    return res.send({ listEnrollment });
  } catch (err) {
    return genericServerException(res);
  }
});

// -----------------------------
// List a specific Enrollments
router.get('/:enrollmentID', async (req, res) => {
  try {
    const retrieveEnrollment = await Enrollment.findById(req.params.enrollmentID).populate('courses');
    if (!retrieveEnrollment) {
      return notFoundException(res);
    }

    return res.send({ retrieveEnrollment });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return notFoundException(res);
    }
    return genericServerException(res);
  }
});

// -----------------------------
// Create a Enrollment
router.post('/', async (req, res) => {
  try {
    const createEnrollment = await Enrollment.create(req.body);

    return res.status(201).send({ createEnrollment });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return enrollmentAlreadyExists(res);
    }
    return genericServerException(res);
  }
});

// -----------------------------
// Update a Enrollment information
router.put('/:enrollmentID', async (req, res) => {
  try {
    const updateEnrollment = await Enrollment.findByIdAndUpdate(req.params.enrollmentID, req.body, { new: true });

    if (!updateEnrollment) {
      return notFoundException(res);
    }

    return res.send({ updateEnrollment });
  } catch (err) {
    if (err.code === 11000) {
      return enrollmentAlreadyExists(res);
    }
    if (err.kind === 'ObjectId') {
      return notFoundException(res);
    }
    return genericServerException(res);
  }
});

// -----------------------------
// Delete the Enrollment
router.delete('/:enrollmentID', async (req, res) => {
  try {
    const deleteEnrollment = await Enrollment.findByIdAndRemove(req.params.enrollmentID);

    if (!deleteEnrollment) {
      return notFoundException(res);
    }

    return res.status(204).send({ deleteEnrollment });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return notFoundException(res);
    }
    return genericServerException(res);
  }
});

module.exports = (app) => app.use(API_PATH, router);
