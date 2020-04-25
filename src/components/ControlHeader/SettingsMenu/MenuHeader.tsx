import React from 'react';
import styled from 'styled-components';

import {Button} from 'components/Button';
import {secondaryColor} from 'components/GlobalStyles';

const SettingsMenuHeader = styled.div`
  position: relative;
`;
const SettingsTitle = styled.h2`
  margin-top: 0;
  color: ${secondaryColor};
`;
const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0px;
  font-size: 24px;
`;

type MenuHeaderProps = {
  onClose: () => void;
};

export const MenuHeader: React.FC<MenuHeaderProps> = ({onClose}) => {
  return (
    <SettingsMenuHeader>
      <SettingsTitle>settings</SettingsTitle>
      <CloseButton onClick={onClose}>X</CloseButton>
    </SettingsMenuHeader>
  );
};
