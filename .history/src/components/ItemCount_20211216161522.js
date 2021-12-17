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

const ContainerItemCount = styled.div``;

export default ItemCount;
