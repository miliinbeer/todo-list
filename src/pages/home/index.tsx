import React, { FunctionComponent } from "react";
import { Root, Title, Items } from "./styles";
import { InputWidget } from "../../shared/ui/input";
import { ButtonWidget } from "../../shared/ui/button";

export const Home: FunctionComponent = () => {
  return (
    <Root>
      <Title>To Do List</Title>
      <Items>
        <InputWidget />
        <ButtonWidget onClick={() => {}} children="Write" />
      </Items>
    </Root>
  );
};
