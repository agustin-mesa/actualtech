import React, { useEffect, useState } from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import ItemDetail from "./ItemDetail";
import Loader from "react-loader-spinner";
//-----------------REACT ROUTER-----------------
import { useParams, Navigate } from "react-router-dom";
import productos from "../data/productos";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(productos[id - 1]);
  const [isLoading, setIsLoading] = useState(true);

  const loadItems = async () => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos[id - 1]);
      }, 2 * 1000);
    });

    return response;
  };
  useEffect(() => {
    const getItems = async () => {
      const result = await loadItems();
      setIsLoading(false);
      setItem(result);
    };
    getItems();
  }, [loadItems]);

  return (
    <ContainerItemDetail>
      {isLoading ? (
        <Loader
          className="loader"
          type="TailSpin"
          color="#fa6647"
          height={40}
          width={40}
        />
      ) : productos[id - 1] ? (
        <ItemDetail item={item} />
      ) : (
        <Navigate to="/" />
      )}
    </ContainerItemDetail>
  );
};

const ContainerItemDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 10% 0;
`;

export default ItemDetailContainer;
