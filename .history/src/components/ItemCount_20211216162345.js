import React from "react";
import styled from "styled-components";

const ItemCount = () => {
  return (
    <>
      <ContainerItemCount>
        <div className="item-count__header">
          <p>Cantidad que comprará</p>
          <span>
            Stock disponible: <b>7</b>
          </span>
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
  align-items: center;
  flex-direction: column;
  padding: 5px 10px 10px;
  border-radius: 8px;
  border: solid 1px var(--border__03);
  background: var(--bg__08);
  box-shadow: 0px 2px 8px var(--shadow__01);

  .item-count__header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-count__header p {
    color: var(--text__01);
    font-size: 0.9em;
    font-weight: 600;
    text-align: center;
  }
  .item-count__header span {
    color: var(--text__06);
    font-size: 0.8em;
    font-weight: 500;
    width: 100%;
    text-align: center;
    b {
      color: var(--text__03);
      font-weight: 700;
    }
  }
`;

export default ItemCount;
