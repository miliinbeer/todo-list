import styled, { css } from "styled-components";
import { ButtonStyledProps } from "../../types";
import edditor from "../../images/icon.webp";

export const Button = styled.button<ButtonStyledProps>`
  cursor: pointer;
  border: none;
  background-color: transparent;
  ${(props) =>
    props.$primary &&
    css`
      padding: 10px 15px;
      color: #e9e9e9;
      font-size: 15px;
      font-family: "LemonTuesday", sans-serif;
      letter-spacing: 5px;
      border: 2px black solid;
      background-color: black;
      transition: all 0.5s;
      &:hover {
        color: black;
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
    `}
      ${(props) =>
    props.$edditor &&
    css`
      width: 25px;
      height: 25px;
      background-image: url(${edditor});
      background-size: cover;
    `}
`;
