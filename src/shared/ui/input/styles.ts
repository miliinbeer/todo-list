import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  color: black;
  font-size: 20px;
  font-family: "LemonTuesday", sans-serif;
  letter-spacing: 3px;
  line-height: 40px;
  text-align: center;
  border: 2px black solid;
  /* border-right: none; */
  background: transparent;

  &::placeholder {
    font-size: 15px;
    font-family: "Inter", sans-serif;
    letter-spacing: 0;
  }
`;
