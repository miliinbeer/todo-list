import React from "react";

export interface ButtonStyledProps {
  $primary?: boolean;
  $cross?: boolean
}

export interface ButtonProps {
  onClick: () => void;
  children: string;
  props: ButtonStyledProps
}

export interface InputStyledProps {
  $primary?: boolean;
}

export interface InputProps {
  onChange: () => void;
  onKeyDown: () => void;
  value: string;
  type: string;
  placeholder: string;
  props?: InputStyledProps;
}
