import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const CartWidget = ({ cantidad }) => {
  const [showCartList, setShowCartList] = useState(false);
  return (
    <ContainerCartWidget>
      <div
        className="icon__cart"
        onClick={() => setShowCartList(!showCartList)}
      >
        <span className="material-icons">shopping_cart</span>
        <div>{cantidad}</div>
      </div>
      {showCartList && (
        <div className="cart__list">
          <ul>
            <li>ITEMS...</li>
          </ul>
          <div className="cart__list-btn">
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
    box-shadow: 0px 2px 16px var(--shadow__02);
    padding: 10px;
    animation: ${showList} 0.5s ease forwards;
  }
  .cart__list ul {
    list-style: none;
    padding: 0;
  }
  .cart__list-btn {
    text-align: center;
  }
  .cart__list-btn a {
    width: 100%;
    padding: 10px 20px;
    border: none;
    background: transparent;
    color: var(--text__03);
    font-size: 0.8em;
    font-weight: 700;
    transition: all 0.1s ease;
  }
  .cart__list-btn a:hover {
    text-decoration: underline;
  }
`;

export default CartWidget;
