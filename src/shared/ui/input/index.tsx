import React, { FunctionComponent } from "react";
import { InputContainer, Input } from "./styles";

export const InputWidget: FunctionComponent = () => {
  return (
    <InputContainer>
      <Input type="text" placeholder="Введите задачу" />
    </InputContainer>
  );
};
