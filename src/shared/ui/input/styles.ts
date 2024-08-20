import styled from "styled-components";

export const Input = styled.input`
  max-width: 500px;
  width: 100%;
  padding: 5px 20px;
  color: black;
  font-size: 20px;
  font-family: "LemonTuesday", sans-serif;
  letter-spacing: 3px;
  line-height: 40px;
  border: 2px black solid;
  background: transparent;

  &::placeholder {
    font-size: 15px;
    font-family: "Inter", sans-serif;
    letter-spacing: 0;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
    transition: all 0.5s;
  }
  &:focus {
    outline: none;
    outline-offset: 0;
  }
`;
