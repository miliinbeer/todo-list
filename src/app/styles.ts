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

  input:focus::-webkit-input-placeholder {
  color: transparent;
  transition: all 0.5s;
}
:focus {
  outline: none;
  outline-offset: 0;
}
button {
  cursor: pointer;
  border: none;
  background: none;
}
`;

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 auto;
  border: 1px red solid;
`;
