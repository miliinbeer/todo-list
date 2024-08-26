import React, { FunctionComponent, ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask, clearList, toggleCompleted } from "../../app/api";
import { AppDispatch, DataTypes, StateDataTypes } from "../../shared/types";
import { InputWidget } from "../../shared/ui/input";
import { ButtonWidget } from "../../shared/ui/button";
import { ListItemWidget } from "../../shared/ui/list-item";
import { Root, Title, Items, List, Buttons } from "./styles";

export const Home: FunctionComponent = () => {
  const [value, setValue] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector((state: StateDataTypes) => state.root);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const addTodo = () => {
    const text = value[0].toUpperCase() + value.slice(1);
    const isExist = data.find((el) => el.text === text);
    if (!isExist) {
      if (value.trim().length) {
        dispatch(addTask({ text: text }));
        setValue("");
      }
    }
  };

  console.log(data);

  return (
    <Root>
      <Title>To Do List</Title>
      <Items>
        <InputWidget
          props={{ $primary: true }}
          onChange={handleInput}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
              addTodo();
            }
          }}
          value={value}
          type="text"
          placeholder="Введите вашу задачу"
        />
        <ButtonWidget
          props={{ $primary: true }}
          onClick={() => addTodo()}
          children="Write"
        />
      </Items>
      {data.length === 0 || (
        <List>
          {data.map((el: DataTypes) => (
            <ListItemWidget key={el.id} text={el.text} />
          ))}
          <Buttons>
            <ButtonWidget
              props={{ $primary: true }}
              onClick={() => {}}
              children="Delete Selected"
            />
            <ButtonWidget
              props={{ $primary: true }}
              onClick={() => dispatch(clearList())}
              children="Delete All"
            />
          </Buttons>
        </List>
      )}
    </Root>
  );
};
