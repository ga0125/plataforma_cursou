// -----------------------------
// File: src/Components/Student/logic/actions.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Student actions
// -----------------------------

// -----------------------------
// Declaring register actions
export function retrieveCourseRequest() {
  return {
    type: 'RETRIEVE_COURSE_REQUEST',
  };
}

export function retrieveCourseSuccess(response) {
  return {
    type: 'RETRIEVE_COURSE_SUCCESS',
    response,
  };
}

export function retrieveCourseError(error) {
  return {
    type: 'RETRIEVE_COURSE_ERROR',
    error,
  };
}

export function registerCourseRequest(data) {
  return {
    type: 'REGISTER_COURSE_REQUEST',
    data,
  };
}

export function registerCourseSuccess(response) {
  return {
    type: 'REGISTER_COURSE_SUCCESS',
    response,
  };
}

export function registerCourseError(error) {
  return {
    type: 'REGISTER_COURSE_ERROR',
    error,
  };
}

export function registerCourseResetValue() {
  return {
    type: 'REGISTER_COURSE_RESET_VALUES',
  };
}
