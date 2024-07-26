import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat;
    transition: 0.2s all ease-in-out;
  }

  body {
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.black};
    line-height: 1.6;
  }

  button {
      cursor: pointer;
      border: none;
  }
`;
