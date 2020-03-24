import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.main.bg};
    width: inherit;
    height: inherit;
    color: ${theme.main.text};
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 1.25;
  }

  #app-root {
    width: inherit;
    height: inherit;
  }

  h1 {
    color: ${theme.brand.primary};
    font-size: 4.8rem;
    font-style: italic;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

export default GlobalStyle;
