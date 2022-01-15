import React from "react";
import styled from "styled-components";

const CartWidget = () => {
  return (
    <ContainerCartWidget>
      <span class="material-icons">shopping_cart</span>
      <div>5</div>
    </ContainerCartWidget>
  );
};

const ContainerCartWidget = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 50px;
  &:hover {
    background: var(--bg__05);
    color: var(--text__05);
  }

  span {
    color: var(--text__03);
  }
  div {
    position: absolute;
    top: -10px;
    right: -10px;
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
  }
`;

export default CartWidget;
