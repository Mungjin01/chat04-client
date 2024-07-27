import { createGlobalStyle } from 'styled-components';

const GlobalFont = createGlobalStyle`    
 
  @font-face {
    font-family: "SUIT";
    src: url("../../src/assets/font/SUIT-Variable") format('woff2'); 
  }

  @font-face {
    font-family: "NanumSquare";
    src: url("../../src/assets/font/NanumSquareAcEB") format('woff2'); 
  }
`;

export default GlobalFont;
