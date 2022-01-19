import React from "react";
import styled from "styled-components";

//---------------- CONTEXT ----------------
import { useCart } from "../../context/CartContext";
import { formatoPeso } from "../../functions/formatoPeso";
//---------------- COMPONENT ----------------
import CartWidgetItem from "./CartWidgetItem";
import CustomButton from "../CustomButton/CustomButton";

const Cart = () => {
  const { cart, removeItem } = useCart();

  return (
    <CartContainer>
      <div className="cart__items">
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
      </div>
      <div className="info-compra">
        <h3>TOTAL: {formatoPeso(Math.round(cart.totalPrice))}</h3>
        {cart.addedItems.length !== 0 ? (
          <>
            <CustomButton
              text="FINALIZAR COMPRA"
              isLink={true}
              className="action fullwidth"
            />
            <CustomButton
              text="CONTINUAR COMPRANDO"
              isLink={true}
              to="/shop"
              className="fullwidth"
            />
          </>
        ) : (
          <CustomButton
            text="IR A LA TIENDA"
            isLink={true}
            to="/shop"
            className="fullwidth"
          />
        )}
      </div>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 45px 30px;
  margin: 80px 60px 0;
  width: 100%;
  max-width: 1000px;

  span {
    margin: 0;
    text-align: right;
    color: var(--text__03);
    font-size: 0.8em;
    font-weight: 700;
    cursor: pointer;
  }

  p {
    font-size: 1em;
    color: var(--text__01);
  }

  .cart__items {
    border-radius: 10px;
    background: var(--bg__08);
    width: 100%;
    padding: 0 0 35px 10px;
  }

  h3 {
    color: var(--text__01);
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .cart__items ul {
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

  .info-compra {
    background: var(--bg__08);
    width: 100%;
    border-radius: 10px;
    padding: 0 10px 35px;
    max-height: 150px;
  }
`;

export default Cart;
