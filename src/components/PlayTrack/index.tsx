import React from 'react';
import styled from 'styled-components';

import {searchTrackRecommendations} from 'sdk/search';
import {usePlayer} from 'context/PlayerContext';

const FieldWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const PlayTrackButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  color: lightgray;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 8px;
  cursor: pointer;
  outline: none;

  &:hover {
    color: white;
    border: 1px solid white;
    transform: scale(1.025);
  }
  &:active {
    transform: scale(1);
  }
`;

export const PlayTrack: React.FC = () => {
  const [, dispatch] = usePlayer();

  const handlePlayTrack = async () => {
    const data = await searchTrackRecommendations();
    const randomIndex = Math.floor(Math.random() * Math.floor(data.tracks.length));
    dispatch({type: 'PLAY_TRACK', track: data.tracks[randomIndex]});
  };

  return (
    <FieldWrapper>
      <PlayTrackButton onClick={handlePlayTrack}>PLAY TRACK</PlayTrackButton>
    </FieldWrapper>
  );
};
