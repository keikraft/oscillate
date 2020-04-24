import React from 'react';
import styled from 'styled-components';

import {usePlayback} from 'context/PlaybackContext';

const TrackInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: rgba(255, 255, 255, 0.5);
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
