import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
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
`;
