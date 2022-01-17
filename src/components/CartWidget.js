import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

//---------------- COMPONENTS ----------------
import CartWidgetItem from "./CartWidgetItem";
//---------------- CONTEXT ----------------
import { useCart } from "../context/CartContext";
//-----------------FUNCTIONS-----------------
import { formatoPeso } from "../functions/formatoPeso";

const CartWidget = () => {
  const { cart, removeItem, clear } = useCart();

  const [showCartList, setShowCartList] = useState(false);
  return (
    <ContainerCartWidget>
      <div
        className="icon__cart"
        onClick={() => setShowCartList(!showCartList)}
      >
        <span className="material-icons">shopping_cart</span>
        <div>{cart.addedItems.length}</div>
      </div>
      {showCartList && (
        <div className="cart__list">
          <p className="limpiar" onClick={clear}>
            Limpiar
          </p>
          <ul>
            {cart.addedItems.length !== 0 ? (
              cart.addedItems.map((producto) => {
                return (
                  <li key={producto.id}>
                    <CartWidgetItem
                      producto={producto}
                      removeItem={removeItem}
                    />
                  </li>
                );
              })
            ) : (
              <p>No hay productos en tu carrito</p>
            )}
          </ul>
          <div className="cart__list-btn">
            <span>TOTAL: {formatoPeso(Math.round(cart.totalPrice))}</span>
            <Link to="/cart">TERMINAR MI COMPRA</Link>
          </div>
        </div>
      )}
    </ContainerCartWidget>
  );
};

const showList = keyframes`
  0%{
    transform: translateY(-10px);
    opacity: 0;
  }
  100%{
    transform: translateY(0px);
    opacity: 1;
  }
`;

const ContainerCartWidget = styled.div`
  position: relative;
  user-select: none;

  .icon__cart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    padding: 5px 10px;
    cursor: pointer;
    color: var(--text__03);
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  .icon__cart:hover {
    background: var(--bg__05);
    color: var(--text__05);
  }

  .icon__cart div {
    position: absolute;
    top: -10px;
    right: -7px;
    width: 17px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    border-radius: 50px;
    border: 2px solid var(--border__03);
    background: var(--bg__08);
    color: var(--text__01);
    font-weight: 700;
  }
  .cart__list {
    position: absolute;
    top: 40px;
    right: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--bg__08);
    border-radius: 8px;
    box-shadow: 0px 14px 40px -10px var(--shadow__02);
    padding: 10px;
    animation: ${showList} 0.5s ease forwards;
  }

  .cart__list p.limpiar {
    margin: 0 0 5px;
    text-align: right;
    color: var(--text__03);
    font-size: 0.8em;
    font-weight: 700;
    cursor: pointer;
  }
  .cart__list ul {
    display: flex;
    justify-content: flex-start;
    list-style: none;
    flex-direction: column;
    padding: 0;
    margin: 0 0 5px;
    min-height: 50px;
    max-height: 250px;
    overflow-y: auto;
  }
  .cart__list ul p {
    font-size: 1em;
    color: var(--text__01);
  }

  .cart__list-btn {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 0 0;
    border-top: 2px solid var(--border__03);
  }

  .cart__list-btn span {
    font-size: 1em;
    color: var(--text__01);
  }
  .cart__list-btn a {
    width: 100%;
    padding: 10px 20px;
    border: none;
    background: transparent;
    color: var(--text__03);
    font-size: 1em;
    font-weight: 700;
    transition: all 0.1s ease;
  }
  .cart__list-btn a:hover {
    text-decoration: underline;
  }
`;

export default CartWidget;
