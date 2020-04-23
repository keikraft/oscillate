import React from 'react';
import styled from 'styled-components';

import {searchTrackRecommendations} from 'sdk/search';
import {usePlayer} from 'context/PlayerContext';

const FieldWrapper = styled.div``;

export const PlayTrack: React.FC = () => {
  const [, dispatch] = usePlayer();

  const handlePlayTrack = async () => {
    const tracks = await searchTrackRecommendations();
    const randomIndex = Math.floor(Math.random() * Math.floor(tracks.length));
    dispatch({type: 'PLAY_TRACK', track: tracks[randomIndex]});
  };

  return (
    <FieldWrapper>
      <button onClick={handlePlayTrack}>PLAY</button>
    </FieldWrapper>
  );
};
