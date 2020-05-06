import React, {useReducer, Dispatch, useEffect} from 'react';

import {AudioAnalysis} from 'sdk/analysis';
import {PlaybackHandler} from 'sdk/playback';

interface PlaybackState {
  uri: string;
  trackId: string;
  trackInfo: SpotifyApi.TrackObjectSimplified;
  trackAnalysis: AudioAnalysis;
  timeStart: number;
  isPlaying: boolean;
}

const initialState: PlaybackState = {
  uri: '',
  trackId: '',
  trackInfo: {} as SpotifyApi.TrackObjectSimplified,
  trackAnalysis: {} as AudioAnalysis,
  timeStart: 0,
  isPlaying: false,
};

export type Action =
  | {type: 'PLAY_TRACK'; track: SpotifyApi.TrackObjectSimplified}
  | {type: 'SET_TRACK_IS_PLAYING'; isPlaying: boolean}
  | {type: 'SET_TRACK_ANALYSIS'; trackAnalysis: AudioAnalysis}
  | {type: 'SET_PLAY_TIME_START'};

const reducer = (state: PlaybackState, action: Action): PlaybackState => {
  switch (action.type) {
    case 'PLAY_TRACK':
      return {
        ...state,
        uri: action.track.uri,
        trackId: action.track.uri.split(':')[2],
        trackInfo: action.track,
        isPlaying: true,
      };
    case 'SET_TRACK_IS_PLAYING': {
      return {...state, isPlaying: action.isPlaying};
    }
    case 'SET_TRACK_ANALYSIS':
      console.log(action.trackAnalysis);
      return {...state, trackAnalysis: action.trackAnalysis};
    case 'SET_PLAY_TIME_START':
      return {...state, timeStart: performance.now()};
    default:
      return state;
  }
};

const PlaybackContext = React.createContext<[PlaybackState, Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const PlaybackProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const listener = (playbackState: Spotify.PlaybackState) => {
      if (playbackState.paused === state.isPlaying) {
        dispatch({type: 'SET_TRACK_IS_PLAYING', isPlaying: !playbackState.paused});
      }
    };

    PlaybackHandler.listen(listener);

    return () => PlaybackHandler.removeListener(listener);
  }, [state.isPlaying]);

  return <PlaybackContext.Provider value={[state, dispatch]}>{children}</PlaybackContext.Provider>;
};

export const usePlayback = () => React.useContext(PlaybackContext);
