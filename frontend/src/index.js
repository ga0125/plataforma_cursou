import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoute from './routes/AppRoute';
import store from './drivers/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
