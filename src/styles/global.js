import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  
  body {
    font: 14px 'Roboto', sans-serif;
    background: #2FE6DE;
    color: #303030;
  }
`;
