import React from 'react';
import styled from 'styled-components';

const SettingsMenuContent = styled.div`
  flex: 1;
`;

type MenuContentProps = {};

export const MenuContent: React.FC<MenuContentProps> = () => {
  return <SettingsMenuContent></SettingsMenuContent>;
};
