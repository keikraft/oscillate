import React from 'react';
import styled from 'styled-components';

import {SettingsButton} from './SettingsButton';
import {SettingsMenu} from './SettingsMenu';
import {PlayTrack} from './PlayTrack';
import {TrackInfo} from './TrackInfo';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px;
`;

export const ControlHeader = () => {
  const [isSettingsOpen, setSettingsOpen] = React.useState(false);
  return (
    <HeaderWrapper>
      <SettingsMenu isOpen={isSettingsOpen} onClose={() => setSettingsOpen(false)} />
      <SettingsButton onOpen={() => setSettingsOpen(true)} />
      <PlayTrack />
      <TrackInfo />
    </HeaderWrapper>
  );
};
