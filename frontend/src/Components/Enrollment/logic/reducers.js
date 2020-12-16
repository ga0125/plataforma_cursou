// -----------------------------
// File: src/Components/Enrollment/logic/reducers.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 16 dez 2020
// Brief: Enrollment reducers (Redux)
// -----------------------------

// -----------------------------
// Student reducer function
export default function EnrollmentReducers(state = { registered: false }, action) {
  switch (action.type) {
    case 'REGISTER_ENROLLMENT_SUCCESS':
      return { ...state, registered: true };
    case 'REGISTER_ENROLLMENT_RESET_VALUES':
      return { ...state, registered: false };
    default:
      return state;
  }
}
