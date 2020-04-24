import React from 'react';
import styled from 'styled-components';

import {Settings} from './Settings';
import {PlayTrack} from './PlayTrack';
import {TrackInfo} from './TrackInfo';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px;
`;

export const ControlHeader = () => {
  return (
    <HeaderWrapper>
      <Settings />
      <PlayTrack />
      <TrackInfo />
    </HeaderWrapper>
  );
};
