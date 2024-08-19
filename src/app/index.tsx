import React from "react";
import { Home } from "../pages/home";
import { GlobalStyles, Container } from "./styles";
import "../shared/fonts/fonts.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
