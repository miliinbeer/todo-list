import React, { FunctionComponent } from "react";
import { InputProps } from "../../types";
import { Input } from "./styles";

export const InputWidget: FunctionComponent<InputProps> = ({
  onChange,
  onKeyDown,
  // value,
  type,
  placeholder,
  props
}) => {
  return (
    <Input
      {...props}
      onChange={onChange}
      onKeyDown={onKeyDown}
      // value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};
