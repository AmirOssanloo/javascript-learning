import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
  };

  body {
    width: inherit;
    height: inherit;
    background-color: #131417;
    font-size: 16px;
  };

  #app-root {
    width: inherit;
    height: inherit;
  };
`;

export default GlobalStyle;
