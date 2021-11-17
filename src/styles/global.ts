import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  /* defaults */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: #fff;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 400;
  }

  h1 {
    font-weight: 400;
    font-size: 28px;
  }

  button{
    cursor: pointer;
  }

`;
