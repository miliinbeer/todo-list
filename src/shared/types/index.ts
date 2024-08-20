export interface ButtonProps {
  onClick: () => void;
  children: string;
}

export interface InputProps {
  onChange: () => void;
  onKeyDown: () => void;
  value: string;
  type: string;
  placeholder: string;
}

