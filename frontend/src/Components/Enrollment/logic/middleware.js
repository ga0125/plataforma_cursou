// -----------------------------
// File: src/Components/Enrollment/logic/middleware.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 16 dez 2020
// Brief: Enrollment middleware (Redux saga)
// -----------------------------

import { put, all, takeLatest } from 'redux-saga/effects';
import apiInstance from '../../../drivers/api.server';
import { registerEnrollmentSuccess, registerEnrollmentError } from './actions';

// -----------------------------
// Create Enrollment middleware
function* RegisterEnrollmentMiddleware({ data }) {
  try {
    const response = yield apiInstance.post(`${process.env.REACT_APP_API_VERSION_ROUTE}/enrollments`, data);

    yield put(registerEnrollmentSuccess(response.data));
  } catch (error) {
    yield put(registerEnrollmentError(error.response.status));
  }
}

// -----------------------------
// Joining middleware with their respectives actions
export default all([
  takeLatest('REGISTER_ENROLLMENT_REQUEST', RegisterEnrollmentMiddleware),
]);
