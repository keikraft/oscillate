import styled from 'styled-components';

export const Button = styled.button`
  font-size: 16px;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transform: scale(1.025);
  }
  &:active {
    transform: scale(1);
  }
`;
