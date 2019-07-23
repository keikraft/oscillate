import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import {Canvas} from 'components/Canvas';
import {UriField} from 'components/UriField';

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
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <UriField />
      <Content>
        <Canvas />
      </Content>
    </>
  );
};

export default App;
