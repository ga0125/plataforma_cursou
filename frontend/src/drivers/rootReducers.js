// -----------------------------
// File: src/drivers/rootReducer.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Reducer config (Redux)
// -----------------------------

// -----------------------------
// Importing redux libraries
import { combineReducers } from 'redux';

import StudentReducers from '../Components/Student/logic/reducers';
import FeedbackReducers from '../Components/Commons/logic/reducers';
import CourseReducers from '../Components/Course/logic/reducers';
import EnrollmentReducers from '../Components/Enrollment/logic/reducers';

// -----------------------------
// Creating global reducers

export default combineReducers({
  StudentReducers,
  FeedbackReducers,
  CourseReducers,
  EnrollmentReducers,
});
