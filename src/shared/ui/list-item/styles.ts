import styled from "styled-components";

export const Root = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "LemonTuesday", sans-serif;
  font-size: 20px;
  letter-spacing: 3px;
  line-height: 40px;
  list-style: none;
  border: 1px red solid;
`;

export const Items = styled.div`
  display: flex;
`;

export const Texts = styled.span`
  margin: 0px 10px 0 25px;
  word-break: break-all;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
