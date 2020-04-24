import React, {useReducer, Dispatch} from 'react';

import {PlaybackHandler} from 'sdk/playback';

interface PlaybackState {
  uri: string;
  trackId: string;
  trackInfo: SpotifyApi.TrackObjectSimplified;
  isPlaying: boolean;
}

const initialState: PlaybackState = {
  uri: '',
  trackId: '',
  trackInfo: {} as SpotifyApi.TrackObjectSimplified,
  isPlaying: false,
};

export type Action = {type: 'PLAY_TRACK'; track: SpotifyApi.TrackObjectSimplified};

const reducer = (state: PlaybackState, action: Action): PlaybackState => {
  switch (action.type) {
    case 'PLAY_TRACK':
      PlaybackHandler.play(action.track.uri);
      return {
        ...state,
        uri: action.track.uri,
        trackId: action.track.uri.split(':')[2],
        trackInfo: action.track,
        isPlaying: true,
      };
    default:
      return state;
  }
};

const PlaybackContext = React.createContext<[PlaybackState, Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const PlaybackProvider: React.FC = ({children}) => {
  return (
    <PlaybackContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlayback = () => React.useContext(PlaybackContext);
