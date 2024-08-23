import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Home } from "../pages/home";
import { GlobalStyles, Container } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </Provider>
  );
}

export default App;
