// -----------------------------
// File: src/controllers/courseController.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 10/12/2020
// Brief: Course Controller
// -----------------------------

// -----------------------------
// imports
const router = require('express').Router();
const Course = require('../models/Course');
const {
  courseAlreadyExists,
  notFoundException,
  genericServerException,
} = require('./exceptions');

// -----------------------------
// Global constants
const API_PATH = '/api/v1/courses';

// -----------------------------
// List all Courses
router.get('/', async (req, res) => {
  try {
    const listCourse = await Course.find();

    return res.send({ listCourse });
  } catch (err) {
    return genericServerException(res);
  }
});

// -----------------------------
// List a specific Course
router.get('/:courseID', async (req, res) => {
  try {
    const retrieveCourse = await Course.findById(req.params.courseID);
    if (!retrieveCourse) {
      return notFoundException(res);
    }

    return res.send({ retrieveCourse });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return notFoundException(res);
    }
    return genericServerException(res);
  }
});

// -----------------------------
// Create a Course
router.post('/', async (req, res) => {
  try {
    const createCourse = await Course.create(req.body);

    return res.status(201).send({ createCourse });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return courseAlreadyExists(res);
    }
    return genericServerException(res);
  }
});

// -----------------------------
// Update a Course information
router.put('/:courseID', async (req, res) => {
  try {
    const updateCourse = await Course.findByIdAndUpdate(req.params.courseID, req.body, { new: true });

    if (!updateCourse) {
      return notFoundException(res);
    }

    return res.send({ updateCourse });
  } catch (err) {
    if (err.code === 11000) {
      return courseAlreadyExists(res);
    }
    if (err.kind === 'ObjectId') {
      return notFoundException(res);
    }
    return genericServerException(res);
  }
});

// -----------------------------
// Delete the Course
router.delete('/:courseID', async (req, res) => {
  try {
    const deleteCourse = await Course.findByIdAndRemove(req.params.courseID);

    if (!deleteCourse) {
      return notFoundException(res);
    }

    return res.status(204).send({ deleteCourse });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return notFoundException(res);
    }
    return genericServerException(res);
  }
});

module.exports = (app) => app.use(API_PATH, router);
