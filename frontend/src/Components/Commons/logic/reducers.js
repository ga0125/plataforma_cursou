// -----------------------------
// File: src/Components/Commons/interface/Feedback.component.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 15 dez 2020
// Brief: Student reducers (Redux)
// -----------------------------
import lang from '../../../locales/ptBR';

// -----------------------------
// Student reducer function
export default function FeedbackReducers(state = { open: false, type: 'info', message: '' }, action) {
  switch (action.type) {
    case 'REGISTER_STUDENT_ERROR':
      if (action.error === 409) {
        return {
          ...state, open: true, type: 'error', message: lang.studentAlreadyRegistered,
        };
      }
      return {
        ...state, open: true, type: 'error', message: lang.serverError,
      };
    case 'REGISTER_COURSE_ERROR':
      if (action.error === 409) {
        return {
          ...state, open: true, type: 'error', message: lang.courseAlreadyRegistered,
        };
      }
      return {
        ...state, open: true, type: 'error', message: lang.serverError,
      };
    default:
      return state;
  }
}
