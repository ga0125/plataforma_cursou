// -----------------------------
// File: src/Components/Student/logic/reducers.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Student reducers (Redux)
// -----------------------------

// -----------------------------
// Student reducer function
export default function StudentReducers(state = { registered: false }, action) {
  switch (action.type) {
    case 'RETRIEVE_STUDENT_SUCCESS':
      return { ...state, data: action.response.listStudent };
    case 'REGISTER_STUDENT_SUCCESS':
      return { ...state, registered: true };
    case 'REGISTER_STUDENT_RESET_VALUES':
      return { ...state, registered: false };
    default:
      return state;
  }
}
