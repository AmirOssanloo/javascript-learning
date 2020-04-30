import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    background: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
  }
`;

export default ResetStyle;
