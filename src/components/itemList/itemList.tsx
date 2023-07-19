import React from "react";
import Item from "./item/item";
//import GetLocalData from "../changeData/changeData";
import styled from "styled-components/";

const ItemListDiv = styled.div`
  height: auto;
  padding-top: 5px;
  border-radius: 5px;
`;

const ItemList = ({ items, onDelete, onComplete }: any) => {
  const elements = items.map((element: any) => {
    const { id, ...elementProps } = element;
    return (
      <div key={element.id}>
        <Item
          {...element}
          onComplete={() => onComplete(id)}
          onDelete={() => onDelete(id)}
        />
      </div>
    );
  });

  return <ItemListDiv>{elements}</ItemListDiv>;
};

export default ItemList;
