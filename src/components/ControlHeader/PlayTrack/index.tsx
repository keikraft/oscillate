import React from 'react';
import styled from 'styled-components';

import {getTrackRecommendations} from 'sdk/recommendations';
import {getTrackAnalysis} from 'sdk/analysis';
import {PlaybackHandler} from 'sdk/playback';
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
    if (data.tracks?.length) {
      const randomIndex = Math.floor(Math.random() * Math.floor(data.tracks.length));
      const track = data.tracks[randomIndex];
      dispatch({type: 'PLAY_TRACK', track});

      PlaybackHandler.play(track.uri).then(() => dispatch({type: 'SET_PLAY_TIME_START'}));

      getTrackAnalysis(track.id).then((trackAnalysis) =>
        dispatch({type: 'SET_TRACK_ANALYSIS', trackAnalysis}),
      );
    }
  };

  return (
    <FieldWrapper>
      <PlayTrackButton onClick={handlePlayTrack}>plAy</PlayTrackButton>
    </FieldWrapper>
  );
};
