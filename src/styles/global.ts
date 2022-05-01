import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font: 500 1rem Nunito, sans-serif;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Nunito, sans-serif;
  }
  button {
    cursor: pointer;
  }
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

`;
