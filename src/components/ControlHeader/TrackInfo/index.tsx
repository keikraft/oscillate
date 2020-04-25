import React from 'react';
import styled from 'styled-components';

import {usePlayback} from 'context/PlaybackContext';
import {secondaryColor} from 'components/GlobalStyles';

const TrackInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${secondaryColor};
  font-size: 14px;
  line-height: 16px;
`;

export const TrackInfo: React.FC = () => {
  const [playback] = usePlayback();

  return (
    <TrackInfoWrapper>
      <span>{playback?.trackInfo?.name?.toLowerCase()}</span>
      <span>
        {playback?.trackInfo?.artists?.map((artist) => artist?.name?.toLowerCase()).join(', ')}
      </span>
    </TrackInfoWrapper>
  );
};
