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

  h1 {
    color: #9b7f3b;
    font-size: 4.8rem;
    font-style: italic;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export default GlobalStyle;
