// -----------------------------
// File: src/Components/Student/logic/actions.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Student actions
// -----------------------------

// -----------------------------
// Declaring register actions
export function retrieveStudentRequest() {
  return {
    type: 'RETRIEVE_STUDENT_REQUEST',
  };
}

export function retrieveStudentSuccess(response) {
  return {
    type: 'RETRIEVE_STUDENT_SUCCESS',
    response,
  };
}

export function retrieveStudentError(error) {
  return {
    type: 'RETRIEVE_STUDENT_ERROR',
    error,
  };
}

export function registerStudentRequest(data) {
  return {
    type: 'REGISTER_STUDENT_REQUEST',
    data,
  };
}

export function registerStudentSuccess(response) {
  return {
    type: 'REGISTER_STUDENT_SUCCESS',
    response,
  };
}

export function registerStudentError(error) {
  return {
    type: 'REGISTER_STUDENT_ERROR',
    error,
  };
}

export function registerStudentResetValue() {
  return {
    type: 'REGISTER_STUDENT_RESET_VALUES',
  };
}
