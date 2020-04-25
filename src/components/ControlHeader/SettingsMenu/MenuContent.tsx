import React from 'react';
import styled from 'styled-components';

import {Slider} from 'components/Slider';

const SettingsMenuContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 48px 0;
  overflow-y: auto;
`;

interface SettingsState {
  genre: string;
  danceability: number;
  energy: number;
  popularity: number;
  instrumentalness: number;
  tempo: number;
  valence: number;
}

const initialState: SettingsState = {
  genre: 'techno',
  danceability: 0.3,
  energy: 0.6,
  popularity: 30,
  instrumentalness: 0.6,
  tempo: 120,
  valence: 0.3,
};

type Action =
  | {type: 'SET_GENRE'; value: string}
  | {type: 'SET_DANCEABILITY'; value: number}
  | {type: 'SET_ENERGY'; value: number}
  | {type: 'SET_POPULARITY'; value: number}
  | {type: 'SET_INSTRUMENTALNESS'; value: number}
  | {type: 'SET_TEMPO'; value: number}
  | {type: 'SET_VALENCE'; value: number};

const reducer = (state: SettingsState, action: Action) => {
  switch (action.type) {
    case 'SET_GENRE':
      return {...state, genre: action.value};
    case 'SET_DANCEABILITY':
      return {...state, danceability: action.value};
    case 'SET_ENERGY':
      return {...state, energy: action.value};
    case 'SET_POPULARITY':
      return {...state, popularity: action.value};
    case 'SET_INSTRUMENTALNESS':
      return {...state, instrumentalness: action.value};
    case 'SET_TEMPO':
      return {...state, tempo: action.value};
    case 'SET_VALENCE':
      return {...state, valence: action.value};
    default:
      return state;
  }
};

type MenuContentProps = {};

export const MenuContent: React.FC<MenuContentProps> = () => {
  const [settingsState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <SettingsMenuContent>
      <Slider
        label="danceability"
        min={0}
        max={1}
        step={0.1}
        value={settingsState.danceability}
        onChange={(value) => dispatch({type: 'SET_DANCEABILITY', value: parseFloat(value)})}
      />
      <Slider
        label="energy"
        min={0}
        max={1}
        step={0.1}
        value={settingsState.energy}
        onChange={(value) => dispatch({type: 'SET_ENERGY', value: parseFloat(value)})}
      />
      <Slider
        label="popularity"
        min={0}
        max={100}
        step={10}
        value={settingsState.popularity}
        onChange={(value) => dispatch({type: 'SET_POPULARITY', value: parseInt(value)})}
      />
      <Slider
        label="instrumentalness"
        min={0}
        max={1}
        step={0.1}
        value={settingsState.instrumentalness}
        onChange={(value) => dispatch({type: 'SET_INSTRUMENTALNESS', value: parseFloat(value)})}
      />
      <Slider
        label="tempo"
        min={120}
        max={360}
        step={30}
        value={settingsState.tempo}
        onChange={(value) => dispatch({type: 'SET_TEMPO', value: parseInt(value)})}
      />
      <Slider
        label="valence"
        min={0}
        max={1}
        step={0.1}
        value={settingsState.valence}
        onChange={(value) => dispatch({type: 'SET_VALENCE', value: parseFloat(value)})}
      />
    </SettingsMenuContent>
  );
};
