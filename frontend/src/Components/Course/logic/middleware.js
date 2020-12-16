// -----------------------------
// File: src/Components/Student/logic/middleware.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Student middleware (Redux saga)
// -----------------------------

import { put, all, takeLatest } from 'redux-saga/effects';
import apiInstance from '../../../drivers/api.server';
import { registerCourseError, registerCourseSuccess } from './actions';

// -----------------------------
// Create Main middleware
function* RegisterCourseMiddleware({ data }) {
  try {
    const response = yield apiInstance.post(`${process.env.REACT_APP_API_VERSION_ROUTE}/courses`, data);

    yield put(registerCourseSuccess(response.data));
  } catch (error) {
    yield put(registerCourseError(error.response.status));
  }
}

// -----------------------------
// Joining middleware with their respectives actions
export default all([
  takeLatest('REGISTER_COURSE_REQUEST', RegisterCourseMiddleware),
]);
