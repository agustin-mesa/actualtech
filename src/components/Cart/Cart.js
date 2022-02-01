import React from "react";
import styled from "styled-components";

//---------------- CONTEXT ----------------
import { useCart } from "../../context/CartContext";
import { formatoPeso } from "../../functions/formatoPeso";
//---------------- COMPONENT ----------------
import TuCarrito from "./TuCarrito";
import CustomButton from "../CustomButton/CustomButton";

const Cart = () => {
  const { cart } = useCart();

  return (
    <CartContainer>
      <TuCarrito />
      <div className="info-compra">
        <h3>TOTAL: {formatoPeso(Math.round(cart.totalPrice))}</h3>
        {cart.addedItems.length !== 0 ? (
          <>
            <CustomButton
              text="FINALIZAR COMPRA"
              isLink={true}
              to="/finalizar-compra"
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

  .info-compra {
    background: var(--bg__08);
    width: 100%;
    border-radius: 10px;
    padding: 0 10px 35px;
    max-height: 150px;
  }
`;

export default Cart;
