import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fontSizes.medium};
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.black};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1.2rem;
    font-weight: 600;
    color: #222;
  }

  p {
    margin-bottom: 1rem;
  }


  input, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }


`;
