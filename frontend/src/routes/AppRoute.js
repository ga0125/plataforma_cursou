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

import Main from '../Components/Main/interface/component';

export default function AppRoute() {
  return (
    <Switch>
      <Route from="/home" component={Main} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
}
