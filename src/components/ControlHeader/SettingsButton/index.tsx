import React from 'react';
import styled from 'styled-components';

import {ReactComponent as SettingsIcon} from './settings-icon.svg';
import {primaryColor, secondaryColor} from 'components/GlobalStyles';
import {Button} from 'components/Button';

const SettingsButtonWrapper = styled.div`
  flex: 1;
  display: flex;
`;
const IconButton = styled(Button)``;
const StyledSettingsIcon = styled(SettingsIcon)`
  width: 32px;
  height: 32px;
  fill: ${secondaryColor};
  cursor: pointer;
  &:hover {
    fill: ${primaryColor};
  }
`;

export const SettingsButton: React.FC<{onOpen: () => void}> = ({onOpen}) => {
  return (
    <SettingsButtonWrapper>
      <IconButton onClick={onOpen}>
        <StyledSettingsIcon />
      </IconButton>
    </SettingsButtonWrapper>
  );
};
