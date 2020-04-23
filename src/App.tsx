import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {Canvas} from 'components/Canvas';
import {PlayTrack} from 'components/PlayTrack';
import {PlayerProvider} from 'context/PlayerContext';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
  body {
    background-color: black;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <PlayerProvider>
        <Content>
          <PlayTrack />
          <Canvas />
        </Content>
      </PlayerProvider>
    </>
  );
};

export default App;
