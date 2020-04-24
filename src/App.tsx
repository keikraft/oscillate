import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {PlaybackProvider} from 'context/PlaybackContext';
import {Canvas} from 'components/Canvas';
import {ControlHeader} from 'components/ControlHeader';
import {Background} from 'components/Background';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Major Mono Display', monospace;
  }
  body {
    background-color: black;
  }
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <PlaybackProvider>
        <Content>
          <Background />
          <ControlHeader />
          <Canvas />
        </Content>
      </PlaybackProvider>
    </>
  );
};

export default App;
