import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #1da1f2;
    --gray: #6e7275;
    --white: #d9d9d9;
    --darkgray: #2f3336;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000;
    font-family: Helvetica, sans-serif;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle