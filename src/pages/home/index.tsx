import React, { FunctionComponent, useState } from "react";
import { Root, Title, Items } from "./styles";
import { InputWidget } from "../../shared/ui/input";
import { ButtonWidget } from "../../shared/ui/button";

export const Home: FunctionComponent = () => {
  return (
    <Root>
      <Title>To Do List</Title>
      <Items>
        <InputWidget
          props={{ maxWidth: "500px", borderRight: "none" }}
          onChange={() => {}}
          onKeyDown={() => {}}
          value=""
          type="text"
          placeholder="Введите вашу задачу"
        />
        <ButtonWidget onClick={() => {}} children="Write" />
      </Items>
    </Root>
  );
};
