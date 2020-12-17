// -----------------------------
// File: rootMiddleware.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Middleware config (Redux Saga)
// -----------------------------

// -----------------------------
// Importing libraries
import { all } from 'redux-saga/effects';

import RegisterStudentMiddleware from '../Components/Student/logic/middleware';
import RegisterCourseMiddleware from '../Components/Course/logic/middleware';
import RegisterEnrollmentMiddleware from '../Components/Enrollment/logic/middleware';

export default function* rootMiddleware() {
  return yield all([
    RegisterStudentMiddleware,
    RegisterCourseMiddleware,
    RegisterEnrollmentMiddleware,
  ]);
}
