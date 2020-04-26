const SETTINGS_STORE_KEY = 'oscillate/settings';

export interface SettingsState {
  genre: string;
  danceability: number;
  energy: number;
  popularity: number;
  instrumentalness: number;
  tempo: number;
  valence: number;
}

export const getInitialState = (): SettingsState => {
  const storedSettings = localStorage.getItem(SETTINGS_STORE_KEY);
  if (storedSettings) {
    return JSON.parse(storedSettings) as SettingsState;
  }

  const settings = {
    genre: 'techno',
    danceability: 30,
    energy: 60,
    popularity: 30,
    instrumentalness: 60,
    tempo: 160,
    valence: 30,
  };

  localStorage.setItem(SETTINGS_STORE_KEY, JSON.stringify(settings));
  return settings;
};

export type SettingsAction =
  | {type: 'SET_GENRE'; value: string}
  | {type: 'SET_DANCEABILITY'; value: number}
  | {type: 'SET_ENERGY'; value: number}
  | {type: 'SET_POPULARITY'; value: number}
  | {type: 'SET_INSTRUMENTALNESS'; value: number}
  | {type: 'SET_TEMPO'; value: number}
  | {type: 'SET_VALENCE'; value: number};

export const reducer = (state: SettingsState, action: SettingsAction) => {
  let newState = state;
  switch (action.type) {
    case 'SET_GENRE':
      newState = {...state, genre: action.value};
      break;
    case 'SET_DANCEABILITY':
      newState = {...state, danceability: action.value};
      break;
    case 'SET_ENERGY':
      newState = {...state, energy: action.value};
      break;
    case 'SET_POPULARITY':
      newState = {...state, popularity: action.value};
      break;
    case 'SET_INSTRUMENTALNESS':
      newState = {...state, instrumentalness: action.value};
      break;
    case 'SET_TEMPO':
      newState = {...state, tempo: action.value};
      break;
    case 'SET_VALENCE':
      newState = {...state, valence: action.value};
      break;
  }
  localStorage.setItem(SETTINGS_STORE_KEY, JSON.stringify(newState));
  return newState;
};
