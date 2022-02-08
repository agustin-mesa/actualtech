import React, { useEffect, useState } from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import ItemDetail from "./ItemDetail";
//-----------------REACT ROUTER-----------------
import { useParams } from "react-router-dom";
//-----------------FIREBASE-----------------
import useGetItems from "../../firebase/hooks/useGetItems";
import Loader from "react-loader-spinner";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [items] = useGetItems();

  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState();

  useEffect(() => {
    items.map((producto) => {
      if (producto.id === id) {
        return setItem(producto);
      }
      return producto;
    });
    return item && setIsLoading(false);
  }, [items, item, setIsLoading, id]);

  return (
    <ContainerItemDetail>
      {!isLoading ? (
        <ItemDetail item={item} />
      ) : (
        <Loader type="TailSpin" color="#fa6647" height={40} width={40} />
      )}
    </ContainerItemDetail>
  );
};

const ContainerItemDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 10% 0;
  @media only screen and (max-width: 760px) {
    & {
      padding: 120px 20px 0;
    }
  }
`;

export default ItemDetailContainer;
