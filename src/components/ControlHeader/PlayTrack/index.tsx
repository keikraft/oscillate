import React from 'react';
import styled from 'styled-components';

import {getTrackRecommendations} from 'sdk/recommendations';
import {usePlayback} from 'context/PlaybackContext';
import {useSettings} from 'context/SettingsContext';

import {Button} from 'components/Button';
import {primaryColor, secondaryColor} from 'components/GlobalStyles';

const FieldWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const PlayTrackButton = styled(Button)`
  padding: 8px 16px;
  border: 1px solid ${secondaryColor};
  border-radius: 8px;
  &:hover {
    border: 1px solid ${primaryColor};
  }
`;

export const PlayTrack: React.FC = () => {
  const [, dispatch] = usePlayback();
  const [settingsState] = useSettings();

  const handlePlayTrack = async () => {
    const data = await getTrackRecommendations(settingsState);
    if (data.tracks.length) {
      const randomIndex = Math.floor(Math.random() * Math.floor(data.tracks.length));
      dispatch({type: 'PLAY_TRACK', track: data.tracks[randomIndex]});
    }
  };

  return (
    <FieldWrapper>
      <PlayTrackButton onClick={handlePlayTrack}>plAy</PlayTrackButton>
    </FieldWrapper>
  );
};
