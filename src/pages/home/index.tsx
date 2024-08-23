import React, { FunctionComponent } from "react";
import { InputWidget } from "../../shared/ui/input";
import { ButtonWidget } from "../../shared/ui/button";
import { Root, Title, Items } from "./styles";

export const Home: FunctionComponent = () => {
  return (
    <Root>
      <Title>To Do List</Title>
      <Items>
        <InputWidget
          props={{ $primary: true }}
          onChange={() => {}}
          onKeyDown={() => {}}
          value=""
          type="text"
          placeholder="Введите вашу задачу"
        />
        <ButtonWidget
          props={{ $primary: true }}
          onClick={() => {}}
          children="Write"
        />
      </Items>
    </Root>
  );
};
