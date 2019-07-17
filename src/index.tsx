import React from 'react';
import ReactDOM from 'react-dom';

import {Auth} from './api/auth';
import App from './App';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

if (Auth.isAuthenticated()) {
  render();
} else {
  Auth.login();
}
