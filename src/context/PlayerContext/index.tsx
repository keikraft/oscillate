import React, {useReducer, Dispatch} from 'react';

import {PlaybackHandler} from 'sdk/playback';

interface PlaybackState {
  isPlaying: boolean;
}

const initialState: PlaybackState = {
  isPlaying: false,
};

export type Action = {type: 'PLAY_TRACK'; track: SpotifyApi.TrackObjectSimplified};

const reducer = (state: PlaybackState, action: Action): PlaybackState => {
  switch (action.type) {
    case 'PLAY_TRACK':
      PlaybackHandler.play(action.track.uri);
      return {...state, isPlaying: true};
    default:
      return state;
  }
};

const PlayerContext = React.createContext<[PlaybackState, Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const PlayerProvider: React.FC = ({children}) => {
  return (
    <PlayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => React.useContext(PlayerContext);
