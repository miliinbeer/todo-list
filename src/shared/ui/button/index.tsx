import React, { FunctionComponent } from "react";
import { ButtonProps } from "../../types";
import { Button } from "./styles";

export const ButtonWidget: FunctionComponent<ButtonProps> = ({ onClick, children, props }) => {
  return (
    <Button {...props} onClick={onClick}>
      {children}
    </Button>
  );
};
