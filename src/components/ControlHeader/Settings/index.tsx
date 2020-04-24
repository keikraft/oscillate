import React from 'react';
import styled from 'styled-components';

import {ReactComponent as SettingsIcon} from './settings-icon.svg';
import {Button} from 'components/Button';

const SettingsWrapper = styled.div`
  flex: 1;
  display: flex;
`;
const SettingsButton = styled(Button)``;
const StyledSettingsIcon = styled(SettingsIcon)`
  width: 32px;
  height: 32px;
  fill: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  &:hover {
    fill: rgba(255, 255, 255, 0.5);
  }
`;

export const Settings = () => {
  return (
    <SettingsWrapper>
      <SettingsButton>
        <StyledSettingsIcon />
      </SettingsButton>
    </SettingsWrapper>
  );
};
