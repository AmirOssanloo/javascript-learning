import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.main.bg};
    color: ${theme.main.text};
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 1.25;
  }
`;

export default GlobalStyle;
