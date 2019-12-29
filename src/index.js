import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './helpers/store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// setup fake backend
import { configureFakeBackend } from './helpers/fakeBackend';
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.register();
