import React from 'react';
import ReactDOM from 'react-dom';

import {AuthHandler} from 'sdk/auth';

import App from './App';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

try {
  if (AuthHandler.isLoggedIn()) {
    render();
  } else {
    AuthHandler.login();
  }
} catch (error) {
  alert(error);
}
