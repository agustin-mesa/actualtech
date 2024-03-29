import React from "react";
import styled from "styled-components";

//---------------- COMPONENTS ----------------
import Precios from "../Precios/Precios";

const CartWidgetItem = ({ producto, removeItem }) => {
  return (
    <WidgetItem>
      <div className="info">
        <img src={producto.pictureUrl} alt={producto.title} />
        <div>
          <p>{producto.title}</p>
          <Precios
            precio={producto.price}
            descuento={producto.descuento}
            estilo="row-reverse"
          />
        </div>
        <span className="cantidad">{producto.cantidad}</span>
      </div>
      <span
        className="material-icons close"
        onClick={() => removeItem(producto.id)}
      >
        close
      </span>
    </WidgetItem>
  );
};

const WidgetItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transition: all 0.2s ease;
  width: 100%;
  user-select: none;
  margin: 5px 0;

  p {
    font-size: 1em;
    color: var(--text__01);
  }
  &:hover {
    box-shadow: 0px 14px 10px -10px var(--shadow__02);
  }
  .info {
    display: flex;
    align-items: center;
    flex-direction: row;
    text-decoration: none;
    color: var(--text__01);
    padding: 5px 0;
    cursor: pointer;
    flex: 1;
  }
  span.close {
    font-size: 1em;
    cursor: pointer;
    margin: 0 5px;
  }
  .info div {
    flex: 1;
    font-size: 0.9em;
  }
  .info div p {
    margin: 0 0 5px;
  }
  .info div span {
    font-weight: 700;
  }
  .info span.cantidad {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: var(--bg__09);
    color: var(--text__03);
    border-radius: 50px;
    font-size: 0.8em;
    font-weight: 700;
  }

  .info img {
    width: 50px;
    height: 50px;
    margin: 0 5px 0 0;
  }
`;

export default CartWidgetItem;
