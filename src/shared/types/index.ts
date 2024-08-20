import React from "react";

export interface ButtonProps {
  onClick: () => void;
  children: string;
}

export interface InputStyledProps {
  maxWidth: string;
  borderRight: string;
}

export interface InputProps {
  onChange: () => void;
  onKeyDown: () => void;
  value: string;
  type: string;
  placeholder: string;
  props: InputStyledProps;
}
