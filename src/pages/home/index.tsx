import React, { FunctionComponent } from "react";
import { Root, Title, Items } from "./styles";
import { InputWidget } from "../../shared/ui/input";

export const Home: FunctionComponent = () => {
  return (
    <Root>
      <Title>To Do List</Title>
      <Items>
        <InputWidget />
      </Items>
    </Root>
  );
};
