import React from 'react';
import styled from 'styled-components';

import {PlaybackProvider} from 'context/PlaybackContext';

import {GlobalStyle} from 'components/GlobalStyles';
import {Canvas} from 'components/Canvas';
import {ControlHeader} from 'components/ControlHeader';
import {Background} from 'components/Background';

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
