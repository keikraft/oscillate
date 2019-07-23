import React from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.canvas`
  width: 75vw;
  height: 75vh;
`;

export const Canvas: React.FC = () => {
  return <CanvasWrapper />;
};
