import React from 'react';
import styled from 'styled-components';

import {Button} from 'components/Button';

const SettingsMenuFooter = styled.div`
  display: flex;
  justify-content: center;
`;
const SaveButton = styled(Button)`
  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 8px;
  &:hover {
    border: 1px solid white;
  }
`;

type MenuFooterProps = {
  onClose: () => void;
};

export const MenuFooter: React.FC<MenuFooterProps> = ({onClose}) => {
  return (
    <SettingsMenuFooter>
      <SaveButton onClick={onClose}>sAve</SaveButton>
    </SettingsMenuFooter>
  );
};
