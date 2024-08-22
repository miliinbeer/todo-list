import React from "react";
import { FunctionComponent } from "react";
import { CheckboxContainer, Checkbox, Checkmark } from "./styles";

export const CheckboxWidget: FunctionComponent = () => {
  return (
    <CheckboxContainer>
      <Checkbox onChange={() => {}} type="checkbox" />
      <Checkmark />
    </CheckboxContainer>
  );
};
