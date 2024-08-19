import styled from "styled-components";

export const Input = styled.input`
  max-width: 700px;
  width: 100%;
  padding: 5px 10px;
  color: black;
  font-size: 20px;
  font-family: "LemonTuesday", sans-serif;
  letter-spacing: 3px;
  line-height: 40px;
  text-align: center;
  border: 2px black solid;
  border-right: none;
  background: transparent;

  &::placeholder {
    font-size: 15px;
    font-family: "Inter", sans-serif;
    letter-spacing: 0;
  }
`;
