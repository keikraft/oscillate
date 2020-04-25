import styled from 'styled-components';

import {primaryColor, secondaryColor} from 'components/GlobalStyles';

export const Button = styled.button`
  font-size: 16px;
  font-family: inherit;
  color: ${secondaryColor};
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${primaryColor};
    transform: scale(1.025);
  }
  &:active {
    transform: scale(1);
  }
`;
