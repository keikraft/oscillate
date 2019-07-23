import React from 'react';
import ReactDOM from 'react-dom';

import {AuthHandler} from './sdk/auth';
import {initPlayback} from './sdk/playback';

import App from './App';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

try {
  if (AuthHandler.isLoggedIn()) {
    initPlayback();
    render();
  } else {
    AuthHandler.login();
  }
} catch (error) {
  alert(error);
}
