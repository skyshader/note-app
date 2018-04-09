import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import RouteManager from './RouteManager';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
  (
    <Provider store={store}>
      <App><RouteManager /></App>
    </Provider>
  ),
  document.getElementById('root')
);

registerServiceWorker();
