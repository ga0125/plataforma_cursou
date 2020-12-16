// -----------------------------
// File: src/Routes.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 14 dez 2020
// Brief: Route component application
// -----------------------------

// -----------------------------
// Import react libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Student from '../Components/Student/interface/component';
import Course from '../Components/Course/interface/component';
import Enrollment from '../Components/Enrollment/interface/component';

export default function MenuRoute() {
  return (
    <Switch>
      <Route path="/home/register_student/" component={Student} />
      <Route path="/home/register_course/" component={Course} />
      <Route path="/home/register_enrollment/" component={Enrollment} />

      <Route path="*" component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  );
}
