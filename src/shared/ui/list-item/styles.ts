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

export const Texts = styled.div`
  margin-left: 2rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Edditor = styled.button`
  cursor: pointer;
  width: 25px;
  height: 25px;
  border: none;
  background: transparent;
  border: 1px red solid;
`;

export const Cross = styled.button`
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  border: none;
  background: transparent;
`;
