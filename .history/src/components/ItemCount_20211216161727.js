import React from "react";
import styled from "styled-components";

const ItemCount = () => {
  return (
    <>
      <h2>Stock disponible: 7</h2>
      <ContainerItemCount>
        <div className="item-count__header">
          <p>Cantidad que comprará</p>
        </div>
        <div className="item-count__contador">
          <button>-</button>
          <input type="text" name="contador" />
          <button>+</button>
        </div>
        <div className="item-count__button">
          <button>AGREGAR AL CARRITO</button>
        </div>
      </ContainerItemCount>
    </>
  );
};

const ContainerItemCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: solid 1px var(--border__03);
  background: var(--bg__08);
  box-shadow: 0px 2px 8px var(--shadow__01);

  .item-count__header p {
    color: #444444;
    font-size: 0.9em;
    font-weight: 600;
    text-align: center;
    background: red;
  }
`;

export default ItemCount;
