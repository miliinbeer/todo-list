import React, { FunctionComponent } from "react";
import { Button } from "./styles";

interface ButtonProps {
  onClick: () => void;
  children: string;
}

export const ButtonWidget: FunctionComponent<ButtonProps> = ({
  onClick,
  children,
}) => {
  return <Button onClick={onClick}>{children}</Button>;
};
