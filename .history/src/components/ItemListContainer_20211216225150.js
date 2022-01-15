import React from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  return (
    <ContainerItemList>
      <ItemCount stockProducto={70} />
    </ContainerItemList>
  );
};

const ContainerItemList = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 10% 0;
`;

export default ItemListContainer;
