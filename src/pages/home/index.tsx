import React, {
  FunctionComponent,
  ChangeEvent,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "../../app/api";
import { AppDispatch, DataTypes, StateDataTypes } from "../../shared/types";
import { InputWidget } from "../../shared/ui/input";
import { ButtonWidget } from "../../shared/ui/button";
import { ListItemWidget } from "../../shared/ui/list-item";
import { Root, Title, Items, List } from "./styles";

export const Home: FunctionComponent = () => {
  const [value, setValue] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector((state: StateDataTypes) => state.root);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const addTodo = () => {
    if (value.trim().length) {
      dispatch(addTask({ text: value }));
      setValue("");
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
          onKeyDown={() => {}}
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
      <List>
        {data.map((el: DataTypes) => (
          <ListItemWidget key={el.id} text={el.text} />
        ))}
      </List>
    </Root>
  );
};
