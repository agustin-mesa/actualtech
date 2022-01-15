import React from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import ItemList from "./ItemList";
import NavBarCategoria from "./NavBarCategoria";
//-----------------REACT ROUTER-----------------
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  return (
    <ContainerItemList>
      <NavBarCategoria />
      {categoryId ? <ItemList soloCategoria={categoryId} /> : <ItemList />}
    </ContainerItemList>
  );
};

const ContainerItemList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 60px 0;
  max-width: 1000px;
`;

export default ItemListContainer;
