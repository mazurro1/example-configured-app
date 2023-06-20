import { maxWidthMain } from "@constants/layout";
import CSS from "css.escape";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.background1};
    transition-property: background-color, color, padding, transform;
    transition-duration: 0.1s;
    transition-timing-function: ease;
  }
  main {
    width: ${maxWidthMain}px;
    max-width: 100%;
    margin: 0 auto;
    transition-property: background-color, color, padding, transform;
    transition-duration: 0.1s;
    transition-timing-function: ease;
  }

  content: '${({ theme }) => CSS(theme.defaultValue)}';

  * {
    transition-property: background-color, color, padding, transform;
    transition-duration: 0.1s;
    transition-timing-function: ease;
  }
`;
