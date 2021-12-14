import React from "react";
import styled from "styled-components";

const ItemListContainer = ({ texto }) => {
  return (
    <ContainerItemList>
      <p>{texto}</p>
    </ContainerItemList>
  );
};

const ContainerItemList = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 10% 0;
`;

export default ItemListContainer;
