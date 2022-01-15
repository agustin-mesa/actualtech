import React from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import ItemCount from "./ItemCount";

const ItemListContainer = ({ texto }) => {
  return (
    <ContainerItemList>
      <h2>{texto}</h2>
      <ItemCount stockProducto={0} />
    </ContainerItemList>
  );
};

const ContainerItemList = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 10% 0;
`;

export default ItemListContainer;
