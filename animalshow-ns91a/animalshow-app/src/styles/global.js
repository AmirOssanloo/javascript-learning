import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    width: inherit;
    height: inherit;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.text};
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, h4 {
    margin-bottom: 2rem;
  }

  #app {
    width: inherit;
    height: inherit;
  }
`;

export default GlobalStyle;
