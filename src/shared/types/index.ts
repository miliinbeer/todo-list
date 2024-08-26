import React, {ChangeEvent} from "react";
import { store } from "../../app/store";

export type AppDispatch = typeof store.dispatch;

export interface DataTypes {
  id: number;
  text: string;
  completed: boolean;
}

export interface StateTypes {
  data: DataTypes[];
}

export interface StateDataTypes {
  root: {
    data: DataTypes[];
  };
}

export interface ButtonStyledProps {
  $primary?: boolean;
  $cross?: boolean;
  $edditor?: boolean;
}

export interface ButtonProps {
  onClick: () => void;
  children: string;
  props?: ButtonStyledProps;
}

export interface InputStyledProps {
  $primary?: boolean;
}

export interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>)=> void;
  value: string;
  type: string;
  placeholder: string;
  props?: InputStyledProps;
}

export interface ListItemProps {
  text: string;
}
