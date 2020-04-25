import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;
const BackgroundTitle = styled.span`
  font-family: inherit;
  font-size: 14.5vw;
  color: rgba(255, 255, 255, 0.1);
`;

export const Background = () => {
  return (
    <BackgroundWrapper>
      <BackgroundTitle>oscillAte</BackgroundTitle>
    </BackgroundWrapper>
  );
};
