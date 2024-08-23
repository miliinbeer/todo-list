import styled, { createGlobalStyle } from "styled-components";
import background from "../shared/images/background.webp";
// @ts-ignore
import font from "../shared/fonts/LemonTuesday.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'LemonTuesday';
  src: url(${font}) format("woff"),
}

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

export const Container = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 0 10px;
`;
