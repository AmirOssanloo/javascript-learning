import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fbfbfb;
    width: inherit;
    height: inherit;
    margin: 0;
    padding: 0;
    color: #1a1a1a;
    font-family: 'Lato', sans-serif;
  }

  #app {
    width: inherit;
    height: inherit;
  }
`;

export default GlobalStyle;
