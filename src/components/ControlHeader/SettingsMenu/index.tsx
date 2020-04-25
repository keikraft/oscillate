import React from 'react';
import styled from 'styled-components';

import {MenuHeader} from './MenuHeader';
import {MenuContent} from './MenuContent';
import {MenuFooter} from './MenuFooter';
import {secondaryColor} from 'components/GlobalStyles';

const SettingsMenuContainer = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 48px 24px;
  width: 248px;
  border-top: 1px solid ${secondaryColor};
  border-right: 1px solid ${secondaryColor};
  border-bottom: 1px solid ${secondaryColor};
  border-radius: 0 8px 8px 0;
  background-color: black;
  transform: ${({isOpen}) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 250ms ease-in-out;
  z-index: 1050;
`;

type SettingsMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SettingsMenu: React.FC<SettingsMenuProps> = ({isOpen, onClose}) => {
  return (
    <SettingsMenuContainer isOpen={isOpen}>
      <MenuHeader onClose={onClose} />
      <MenuContent></MenuContent>
      <MenuFooter onClose={onClose} />
    </SettingsMenuContainer>
  );
};
