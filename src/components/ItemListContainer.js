import React from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return (
    <ContainerItemList>
      <ItemList />
    </ContainerItemList>
  );
};

const ContainerItemList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 10% 0;
`;

export default ItemListContainer;
