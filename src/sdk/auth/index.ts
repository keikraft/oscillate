import qs from 'qs';
import {config} from './config';

const LOCALSTORAGE_AUTH_STATE_KEY = 'spotify_auth_state';
const LOCALSTORAGE_TOKEN_KEY = 'access_token';
const LOCALSTORAGE_TOKEN_EXPIRES_KEY = 'token_expires';

class Auth {
  redirect_uri = 'http://localhost:3000';

  generateRandomString(length: number) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let text = '';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  login() {
    const state = this.generateRandomString(16);
    const scope = 'streaming user-read-email user-read-private';
    localStorage.setItem(LOCALSTORAGE_AUTH_STATE_KEY, state);

    const queryString = qs.stringify({
      response_type: 'token',
      client_id: config.client_id,
      scope: scope,
      redirect_uri: this.redirect_uri,
      state: state,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${queryString}`;
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    const tokenExpires = localStorage.getItem(LOCALSTORAGE_TOKEN_EXPIRES_KEY);
    if (token && tokenExpires && parseInt(tokenExpires, 10) > Date.now()) return true;

    const params = qs.parse(window.location.hash.slice(1));
    const storedState = localStorage.getItem(LOCALSTORAGE_AUTH_STATE_KEY);

    if (params.access_token && params.state === storedState) {
      localStorage.removeItem(LOCALSTORAGE_AUTH_STATE_KEY);
      localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, params.access_token);
      localStorage.setItem(
        LOCALSTORAGE_TOKEN_EXPIRES_KEY,
        new Date().setHours(new Date().getHours() + 1).toString(),
      );
      window.history.replaceState({}, '', '/');

      return true;
    } else if (params.access_token && (params.state == null || params.state !== storedState)) {
      throw Error('There was an error during the authentication');
    }

    return false;
  }
}

export const AuthHandler = new Auth();
