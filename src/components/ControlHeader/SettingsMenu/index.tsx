import React from 'react';
import styled from 'styled-components';

import {MenuHeader} from './MenuHeader';
import {MenuContent} from './MenuContent';
import {MenuFooter} from './MenuFooter';

const SettingsMenuContainer = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 48px;
  width: 248px;
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
