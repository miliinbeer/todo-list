import React from "react";
import { FunctionComponent } from "react";
import { CheckboxProps } from "../../types";
import { CheckboxContainer, Checkbox, Checkmark } from "./styles";

export const CheckboxWidget: FunctionComponent<CheckboxProps> = ({
  onChange,
}) => {
  return (
    <CheckboxContainer>
      <Checkbox onChange={onChange} type="checkbox" />
      <Checkmark />
    </CheckboxContainer>
  );
};
