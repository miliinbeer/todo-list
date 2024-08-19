import styled, { createGlobalStyle } from "styled-components";
import background from "../shared/images/background.webp";

export const GlobalStyles = createGlobalStyle`
  body {
  height: 100vh;
  background-size: cover;
  background-image: url(${background});
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;