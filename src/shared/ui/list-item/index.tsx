import React, { FunctionComponent } from "react";
import { CheckboxWidget } from "../checkbox";
import {
  Root,
  Items,
  Texts,
  Edditor,
  Cross,
  Buttons,
} from "./styles";

export const ListItemWidget: FunctionComponent = () => {
  return (
    <Root>
      <Items>
        <CheckboxWidget />
        <Texts>
          <span>Loreelwafkmkjnfkjdnjnadjknajknvkjfandjkvnafjkvnfjakdnk</span>
        </Texts>
      </Items>
      <Buttons>
        <Edditor />
        <Cross onClick={() => {}}>×</Cross>
      </Buttons>
    </Root>
  );
};
