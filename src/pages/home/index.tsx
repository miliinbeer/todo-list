import React, { FunctionComponent, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask, handleInput } from "../../app/api";
import { AppDispatch, DataTypes, StateDataTypes } from "../../shared/types";
import { InputWidget } from "../../shared/ui/input";
import { ButtonWidget } from "../../shared/ui/button";
import { ListItemWidget } from "../../shared/ui/list-item";
import { Root, Title, Items, List } from "./styles";

export const Home: FunctionComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, value } = useSelector((state: StateDataTypes) => state.root);

  const addTodo = () => {
    if (value.trim().length) {
      dispatch(addTask({ text: value }));
    }
  };

  console.log(data);

  return (
    <Root>
      <Title>To Do List</Title>
      <Items>
        <InputWidget
          props={{ $primary: true }}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            dispatch(handleInput(event.target.value))
          }
          onKeyDown={() => {}}
          value=""
          type="text"
          placeholder="Введите вашу задачу"
        />
        <ButtonWidget
          props={{ $primary: true }}
          onClick={() => addTodo()}
          children="Write"
        />
      </Items>
      <List>
        {data.map((el: DataTypes) => (
          <ListItemWidget key={el.id} text={el.text} />
        ))}
      </List>
    </Root>
  );
};
