import React, { useState, useEffect } from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import Item from "./Item";
import Loader from "react-loader-spinner";
//-----------------IMAGES-----------------
import macbook00 from "../assets/images/macbook__00.png";
import macbook01 from "../assets/images/macbook__01.png";
import macbook02 from "../assets/images/macbook__02.png";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadItems = async () => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve([
          {
            id: 1,
            title: "MacBook Air 13''",
            price: 199999,
            pictureUrl: macbook00,
            envioGratis: true,
            cuotas: "3 y 6 CUOTAS",
            sinInteres: true,
            descuento: 25,
            stock: 7,
          },
          {
            id: 2,
            title: "MacBook Air 13''",
            price: 278999,
            pictureUrl: macbook01,
            envioGratis: false,
            cuotas: "6 CUOTAS",
            sinInteres: true,
            descuento: 17,
            stock: 10,
          },
          {
            id: 3,
            title: "MacBook Air 13''",
            price: 332999,
            pictureUrl: macbook02,
            envioGratis: false,
            cuotas: "",
            sinInteres: false,
            descuento: "",
            stock: 8,
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
      setItems(result);
    };
    getItems();
  }, []);

  return (
    <ContainerItemList>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
      {isLoading && (
        <Loader type="TailSpin" color="#fa6647" height={40} width={40} />
      )}
    </ContainerItemList>
  );
};

const ContainerItemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  background: var(--bg__08);
  padding: 50px 40px;
  border-radius: 10px;
`;

export default ItemList;
