import React from "react";
import styled from "styled-components";

const SpanLabel = styled.span`
  padding: 10px 0px;
  color: black;
`;

const ItemBlock = styled.div`
  height: 45px;
  margin-top: 5px;
  padding: 10px;
  border: solid gray;
  border-width: 1px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const CompleteButton = styled.button`
  height: 20px;
  width: 5px;
  margin: 0px 2px;
  padding: 0px 12px;
  float: left;
  cursor: pointer;
  background-color: white;
  border-width: 1px;
  border-radius: 8px;
`;

const Button = styled.button`
  height: 25px;
  margin: 0px 2px;
  padding: 0px 12px;
  float: right;
  cursor: pointer;
  background-color: #2063c7;
  color: white;
  border-width: 0px;
  border-radius: 8px;
  font: 15x "Fira Sans", sans-serif;
`;
const Item = (props: any) => {
  const { label, onDelete, onComplete } = props;

  return (
    <ItemBlock>
      <SpanLabel>
        <CompleteButton onClick={onComplete}></CompleteButton>
        {label}
      </SpanLabel>
      <Button onClick={onDelete}>Удалить</Button>
      <Button>Изменить </Button>
    </ItemBlock>
  );
};

export default Item;
