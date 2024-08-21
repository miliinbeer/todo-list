import React, { FunctionComponent } from "react";
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
