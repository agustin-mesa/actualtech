import React, { useEffect, useState } from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import ItemDetail from "./ItemDetail";
import Loader from "react-loader-spinner";
//-----------------IMAGES-----------------
import macbook02 from "../assets/images/macbook__02.jpg";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadItems = async () => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "MacBook Air 13''",
            price: 332999,
            pictureUrl: macbook02,
            envioGratis: true,
            cuotas: "",
            sinInteres: false,
            descuento: "",
            stock: 8,
            opiniones: 107,
            promedioOpiniones: 80,
          },
        ]);
      }, 2 * 1000);
    });

    return response;
  };

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);
      const result = await loadItems();
      setIsLoading(false);
      setItem(result);
    };
    getItems();
  }, []);

  return (
    <ContainerItemDetail>
      {isLoading ? (
        <Loader type="TailSpin" color="#fa6647" height={40} width={40} />
      ) : (
        item.map((it) => {
          return <ItemDetail item={it} />;
        })
      )}
    </ContainerItemDetail>
  );
};

const ContainerItemDetail = styled.div``;

export default ItemDetailContainer;
