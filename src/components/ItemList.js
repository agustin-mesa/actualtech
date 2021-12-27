import React, { useState, useEffect } from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import Item from "./Item";
import Loader from "react-loader-spinner";
//-----------------DATA-----------------
import productos from "../data/productos.js";
//-----------------REACT ROUTER-----------------
import { Link } from "react-router-dom";

const ItemList = ({ soloCategoria }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadItems = async () => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
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
      {soloCategoria
        ? items.map((item) => {
            return (
              item.categoria === soloCategoria && (
                <Link key={item.id} to={`/item/${item.id}`}>
                  <Item item={item} />
                </Link>
              )
            );
          })
        : items.map((item) => {
            return (
              <Link key={item.id} to={`/item/${item.id}`}>
                <Item item={item} />
              </Link>
            );
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
  gap: 45px 30px;
  background: var(--bg__08);
  padding: 50px 40px;
  border-radius: 0 0 10px 10px;
  margin: 0;
  a {
    text-decoration: none;
  }
`;

export default ItemList;
