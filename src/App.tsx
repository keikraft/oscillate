import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div />
    </>
  );
};

export default App;
