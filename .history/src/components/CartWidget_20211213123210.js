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
  span {
    color: var(--text__03);
  }
  div {
    position: absolute;
    top: -10px;
    right: -10px;
    background: var(--bg__02);
    color: var(--text__05);
  }
`;

export default CartWidget;
