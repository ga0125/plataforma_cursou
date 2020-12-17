// -----------------------------
// File: src/Components/Enrollment/logic/actions.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 16 dez 2020
// Brief: Enrollment actions
// -----------------------------

// -----------------------------
// Declaring register actions
export function registerEnrollmentRequest(data) {
  return {
    type: 'REGISTER_ENROLLMENT_REQUEST',
    data,
  };
}

export function registerEnrollmentSuccess(response) {
  return {
    type: 'REGISTER_ENROLLMENT_SUCCESS',
    response,
  };
}

export function registerEnrollmentError(error) {
  return {
    type: 'REGISTER_ENROLLMENT_ERROR',
    error,
  };
}

export function registerEnrollmentResetValue() {
  return {
    type: 'REGISTER_ENROLLMENT_RESET_VALUES',
  };
}
