import React from "react";
import styled from "styled-components";

import { useCart } from "../../context/CartContext";

import CartWidgetItem from "./CartWidgetItem";

const TuCarrito = () => {
  const { cart, removeItem } = useCart();

  return (
    <ContainerTuCarrito>
      <h3>Tu carrito</h3>
      <ul>
        {cart.addedItems.length !== 0 ? (
          cart.addedItems.map((producto) => {
            return (
              <li key={producto.id} style={{ width: "100%" }}>
                <CartWidgetItem producto={producto} removeItem={removeItem} />
              </li>
            );
          })
        ) : (
          <p>No hay productos en tu carrito</p>
        )}
      </ul>
    </ContainerTuCarrito>
  );
};

const ContainerTuCarrito = styled.div`
  border-radius: 10px;
  background: var(--bg__08);
  width: 100%;
  padding: 0 0 35px 10px;

  h3 {
    color: var(--text__01);
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 5px;
  }

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    list-style: none;
    flex-direction: column;
    margin: 0 0 5px;
    min-height: 400px;
    max-height: 450px;
    padding: 0;
    overflow-y: auto;
  }
`;

export default TuCarrito;
