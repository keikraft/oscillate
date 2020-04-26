import {createGlobalStyle} from 'styled-components';

export const primaryColor = 'rgba(255,255,255,0.8)';
export const secondaryColor = 'rgba(255,255,255,0.5)';

export const GlobalStyle = createGlobalStyle`
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
