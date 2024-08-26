import React, { FunctionComponent } from "react";
import { ListItemProps } from "../../types";
import { CheckboxWidget } from "../checkbox";
import { ButtonWidget } from "../button";
import { Root, Items, Texts, Buttons } from "./styles";

export const ListItemWidget: FunctionComponent<ListItemProps> = ({ text, handleCheckbox }) => {
  return (
    <Root>
      <Items>
        <CheckboxWidget onChange={handleCheckbox}/>
        <Texts>{text}</Texts>
      </Items>
      <Buttons>
        <ButtonWidget
          props={{ $edditor: true }}
          onClick={() => {}}
          children=""
        />
        <ButtonWidget
          props={{ $cross: true }}
          onClick={() => {}}
          children="×"
        />
      </Buttons>
    </Root>
  );
};
