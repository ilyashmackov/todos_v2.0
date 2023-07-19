import React, { useState } from "react";
import styled from "styled-components";

const AddingForm = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 7px 12px;
  margin-right: 10px;
  border-width: 1px;
  border-radius: 5px;
`;
const AddButton = styled.button`
  height: 30px;
  padding: 0px 12px;
  cursor: pointer;
  background-color: #2063c7;
  color: white;
  border-width: 0px;
  border-radius: 5px;
  font: 1em "Fira Sans", sans-serif;
`;

const TaskAddingForm = ({ onAdd }: any) => {
  const [task, setTask] = useState("");

  const HandleChange = (event: any) => {
    const input = event.target;
    const value = input.value;
    setTask(value);
  };

  return (
    <AddingForm>
      <Input
        id="input"
        name="task"
        type="text"
        value={task}
        onChange={HandleChange}
      />
      <AddButton
        onClick={() => {
          onAdd(task);
          setTask("");
        }}
      >
        Add
      </AddButton>
    </AddingForm>
  );
};

export default TaskAddingForm;
