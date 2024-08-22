import styled, { css } from "styled-components";
import { ButtonStyledProps } from "../../types";

export const Button = styled.button<ButtonStyledProps>`
  cursor: pointer;
  ${(props) =>
    props.$primary &&
    css`
      padding: 10px 15px;
      color: #e9e9e9;
      font-size: 15px;
      font-family: "LemonTuesday", sans-serif;
      letter-spacing: 5px;
      border: none;
      border: 2px black solid;
      background-color: black;
      transition: all 0.5s;
      &:hover {
        color: black;
        background-color: transparent;
        transition: all 0.5s;
      }
    `}
  ${(props) =>
    props.$cross &&
    css`
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      border: none;
      background: transparent;
    `}
`;
