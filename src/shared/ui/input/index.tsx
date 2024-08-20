import React, { FunctionComponent } from "react";
import { InputProps } from "../../types";
import { Input } from "./styles";

export const InputWidget: FunctionComponent<InputProps> = ({
  onChange,
  onKeyDown,
  value,
  type,
  placeholder,
}) => {
  return (
    <Input
      onChange={onChange}
      onKeyDown={onKeyDown}
      type={type}
      placeholder={placeholder}
    />
  );
};
