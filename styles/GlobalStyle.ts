import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    width: 100%;
    font-family: Noto Sans, Noto Sans KR;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
