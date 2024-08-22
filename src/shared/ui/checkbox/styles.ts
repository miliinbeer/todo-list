import styled from "styled-components";

export const CheckboxContainer = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Checkmark = styled.div`
  position: absolute;
  height: 25px;
  width: 25px;
  border: 2px solid black;
  transition: 0.25s ease;
  border-radius: 5px;
  &::after {
    content: "";
    position: absolute;
    left: 30%;
    width: 5px;
    height: 15px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.25s ease;
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  &:checked ~ ${Checkmark}::after {
    opacity: 1;
  }`