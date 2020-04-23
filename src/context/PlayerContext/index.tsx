import React, {useReducer, Dispatch} from 'react';

import {initPlayback} from 'sdk/playback';
import {Track} from 'sdk/types';

interface PlaybackState {
  isPlaying: boolean;
}

const initialState: PlaybackState = {
  isPlaying: false,
};

export type Action = {type: 'PLAY_TRACK'; track: Track};

const reducer = (state: PlaybackState, action: Action): PlaybackState => {
  switch (action.type) {
    case 'PLAY_TRACK':
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
  React.useEffect(() => {
    initPlayback();
  }, []);

  return (
    <PlayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => React.useContext(PlayerContext);
