import React, { FunctionComponent } from "react";
import { ButtonProps } from "../../types";
import { Button } from "./styles";

export const ButtonWidget: FunctionComponent<ButtonProps> = ({
  onClick,
  children,
}) => {
  return <Button onClick={onClick}>{children}</Button>;
};
