// -----------------------------
// File: src/Components/Student/logic/middleware.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Student middleware (Redux saga)
// -----------------------------

import { put, all, takeLatest } from 'redux-saga/effects';
import apiInstance from '../../../drivers/api.server';
import { registerStudentSuccess, registerStudentError } from './actions';

// -----------------------------
// Create Main middleware
function* RegisterStudentMiddleware({ data }) {
  try {
    const response = yield apiInstance.post(`${process.env.REACT_APP_API_VERSION_ROUTE}/student`, data);

    yield put(registerStudentSuccess(response.data));
  } catch (error) {
    yield put(registerStudentError(error.response.status));
  }
}

// -----------------------------
// Joining middleware with their respectives actions
export default all([
  takeLatest('REGISTER_STUDENT_REQUEST', RegisterStudentMiddleware),
]);
