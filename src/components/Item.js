import React from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import Precios from "./Precios";
import { BtnPrimary } from "./styles/StyledComponentsDefault";
//---------------- CONTEXT ----------------
import { useCart } from "../context/CartContext";

const Item = ({ item }) => {
  const { addItem } = useCart();

  const handleAddItem = (e) => {
    e.preventDefault();
    return addItem(item, 1);
  };

  return (
    <ContainerItem>
      <div className="btn-add-cart" onClick={(e) => handleAddItem(e)}>
        <span className="material-icons">add_shopping_cart</span>
      </div>
      {item.envioGratis && (
        <div className="item__header">
          <span>ENVÍO GRATIS</span>
        </div>
      )}
      <div className="item__body">
        <div className="item__body-img">
          <img src={item.pictureUrl} alt={item.title} />
        </div>
        <div className="item__body-detalles">
          {item.cuotas && (
            <span className="cuotas">
              {item.cuotas} <b>{item.sinInteres && "SIN INTERÉS"}</b>
            </span>
          )}

          <h3>{item.title}</h3>
          <Precios precio={item.price} descuento={item.descuento} />
          <div className="btn-buy">
            <BtnPrimary>VER DETALLES</BtnPrimary>
            <span>
              Stock disponible: <b>{item.stock}</b>
            </span>
          </div>
        </div>
      </div>
    </ContainerItem>
  );
};

const ContainerItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  background: var(--bg__08);
  box-shadow: 0px 2px 8px var(--shadow__01);
  max-width: 280px;
  min-width: 200px;
  height: 330px;
  padding: 40px 10px 20px;
  transition: all 0.2s ease;
  user-select: none;

  &:hover {
    box-shadow: 0px 2px 16px var(--shadow__02);
  }

  .btn-add-cart {
    position: absolute;
    top: -25px;
    right: -25px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: var(--bg__05);
    border-radius: 50px;
    z-index: 99;
    box-shadow: 0px 2px 6px var(--shadow__01);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .btn-add-cart:hover {
    background: var(--bg__06);
    box-shadow: 0px 4px 8px var(--shadow__01);
  }
  .btn-add-cart span {
    color: var(--text__05);
  }

  .item__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 8px 8px 0 0;
    padding: 10px 5px;
    background: var(--bg__10);
    text-align: center;
    color: var(--text__05);
    font-size: 0.9em;
    font-weight: 700;
  }

  .item__body {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
  }
  .item__body-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 230px;
    overflow: hidden;
  }
  .item__body-img img {
    width: 100%;
    max-width: 150px;
  }
  .item__body-detalles {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    padding: 20px 0 0;
  }
  .item__body-detalles span.cuotas {
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    border-bottom: 1px solid #fa6647;
    padding: 5px;
    text-align: center;
    color: var(--text__02);
    font-size: 0.7em;
    font-weight: 700;
    line-height: 12px;
  }
  .item__body-detalles span.cuotas b {
    color: var(--text__03);
  }
  .item__body-detalles h3 {
    color: var(--text__01);
    font-size: 1em;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
  }
  .item__body-detalles .precio {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 0 0 10px;
  }
  .item__body-detalles .precio span.oferta {
    background: var(--bg__10);
    color: var(--text__05);
    border-radius: 50px;
    width: 60px;
    padding: 3px;
    font-size: 0.8em;
    font-weight: 600;
  }
  .item__body-detalles .precio span.precioOriginal {
    color: var(--text__06);
    font-size: 0.9em;
    text-decoration: line-through;
  }
  .item__body-detalles .precio span.precioFinal {
    color: var(--text__01);
    font-size: 1.1em;
    font-weight: 700;
  }
  .item__body-detalles .btn-buy {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item__body-detalles .btn-buy span {
    margin: 10px 0 0;
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

export default Item;
