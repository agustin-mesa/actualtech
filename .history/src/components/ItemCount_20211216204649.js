import React, { useState } from "react";
import styled from "styled-components";

const ItemCount = () => {
  const [contadorProducto, setContadorProducto] = useState(0);
  const [stockProducto, setStockProducto] = useState(7);
  const [alertMsg, setAlertMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
    switch (name) {
      case "contador":
        if (contadorProducto < stockProducto) {
          setContadorProducto(e.target.value);
        }
        break;
      case "btnDisminuir":
        if (contadorProducto > 0) {
          setContadorProducto(contadorProducto - 1);
        }
        break;
      case "btnAumentar":
        if (contadorProducto < stockProducto) {
          setContadorProducto(contadorProducto + 1);
        } else {
          setShowAlert(true);
          setAlertMsg("No puedes superar el stock disponible");
          setTimeout(() => {
            setShowAlert(false);
          }, 2500);
        }
        break;
    }
  };

  return (
    <>
      <ContainerItemCount>
        <div className="item-count__header">
          <p>Cantidad que comprará</p>
          <span>
            Stock disponible: <b>{stockProducto}</b>
          </span>
        </div>
        <div className="item-count__contador">
          <button
            name="btnDisminuir"
            title="Disminuir la cantidad"
            onClick={(e) => handleChange(e)}
          >
            -
          </button>
          <input
            type="number"
            name="contador"
            onChange={(e) => handleChange(e)}
            value={contadorProducto}
            readOnly
          />
          <button
            name="btnAumentar"
            title="Aumentar la cantidad"
            onClick={(e) => handleChange(e)}
          >
            +
          </button>
        </div>
        <div className="item-count__button">
          <button>AGREGAR AL CARRITO</button>
          {showAlert && <p>{alertMsg}</p>}
        </div>
      </ContainerItemCount>
    </>
  );
};

const ContainerItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 10px 15px;
  border-radius: 8px;
  border: solid 1px var(--border__03);
  background: var(--bg__08);
  box-shadow: 0px 2px 8px var(--shadow__01);
  width: 230px;

  div {
    width: 100%;
  }

  .item-count__header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item-count__header p {
    color: var(--text__01);
    font-size: 0.9em;
    font-weight: 600;
    text-align: center;
    margin: 0 0 5px;
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

  .item-count__contador {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 5px;
  }
  .item-count__contador button {
    width: 40px;
    height: 40px;
    background: var(--bg__05);
    color: var(--text__05);
    font-size: 1.2em;
    font-weight: 600;
    border-radius: 50px;
    border: none;
    outline: none;
  }

  .item-count__contador input {
    border-radius: 50px;
    background: var(--bg__09);
    text-align: center;
    width: 50%;
    padding: 10px;
    margin: 10px;
    border: none;
    outline: none;
    user-select: none;
  }
  /* Chrome, Safari, Edge, Opera */
  .item-count__contador input::-webkit-outer-spin-button,
  .item-count__contador input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  .item-count__contador input[type="number"] {
    -moz-appearance: textfield;
  }

  .item-count__button button {
    width: 100%;
    padding: 10px 20px;
    border-radius: 50px;
    border: 1px solid var(--border__03);
    background: transparent;
    color: var(--text__03);
    font-size: 1em;
    font-weight: 700;
    transition: all 0.1s ease;
  }
  .item-count__button button:hover {
    background: var(--bg__05);
    color: var(--text__05);
  }
  .item-count__button p {
    margin: 10px 0 0;
    text-align: center;
    color: var(--text__07);
  }
`;

export default ItemCount;