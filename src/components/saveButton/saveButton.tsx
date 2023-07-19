import React, { useState } from "react";
import styled from "styled-components";

const FieldtoButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const SaveButt = styled.button`
  height: 30px;
  width: 150px;
  padding: 0px 12px;
  cursor: pointer;
  background-color: #2063c7;
  color: white;
  border-width: 0px;
  border-radius: 5px;
  font: 1em "Fira Sans", sans-serif;
`;

const SaveButton = ({ onSave }: any) => {
  return (
    <FieldtoButton>
      <SaveButt
        onClick={() => {
          onSave();
        }}
      >
        Сохранить
      </SaveButt>
    </FieldtoButton>
  );
};

export default SaveButton;
