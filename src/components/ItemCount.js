import React, { useState, useEffect } from "react";
import styled from "styled-components";

import toast, { Toaster } from "react-hot-toast";

const ItemCount = ({ stockProducto }) => {
  const [contadorProducto, setContadorProducto] = useState(1);

  const handleChange = (e) => {
    let name = e.target.name;
    switch (name) {
      case "btnDisminuir":
        if (contadorProducto > 1) {
          setContadorProducto(contadorProducto - 1);
        }
        break;
      case "btnAumentar":
        if (stockProducto === 0) {
          return toast.error("No hay más stock.");
        }
        if (contadorProducto < stockProducto) {
          setContadorProducto(contadorProducto + 1);
        } else {
          return toast.error("No puedes superar el stock disponible");
        }
        break;
    }
  };

  const onAdd = () => {
    toast.success(`Cantidad seleccionada: ${contadorProducto}`);
  };

  useEffect(() => {
    if (stockProducto === 0) {
      setContadorProducto(0);
    }
  }, []);

  return (
    <>
      <ContainerItemCount>
        <div className="item-count__header">
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
            min="1"
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
          <button onClick={onAdd} disabled={stockProducto === 0 && true}>
            AGREGAR AL CARRITO
          </button>
          <button onClick={onAdd} disabled={stockProducto === 0 && true}>
            COMPRAR
          </button>
        </div>
      </ContainerItemCount>
      <Toaster />
    </>
  );
};

const ContainerItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  user-select: none;

  div {
    width: 100%;
  }

  .item-count__header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  .item-count__header span {
    color: var(--text__06);
    font-size: 0.8em;
    font-weight: 500;
    text-align: center;
    b {
      color: var(--text__03);
      font-weight: 700;
    }
  }

  .item-count__contador {
    display: flex;
    align-items: center;
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
    background: var(--bg__08);
    text-align: center;
    width: 100px;
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

  .item-count__button {
    display: flex;
    flex-direction: row;
  }
  .item-count__button button {
    padding: 10px 20px;
    border-radius: 50px;
    border: 1px solid var(--border__03);
    background: transparent;
    color: var(--text__03);
    font-size: 1em;
    font-weight: 700;
    transition: all 0.1s ease;
  }

  .item-count__button button:first-child {
    background: var(--bg__05);
    color: var(--text__05);
    width: 60%;
    min-width: 225px;
    margin: 0 5px 0 0;
  }
  .item-count__button button:hover {
    opacity: 0.8;
  }
  .item-count__button button:disabled {
    opacity: 0.5;
  }
  .item-count__button button:disabled:hover {
    color: var(--text__03);
    background: transparent;
  }
`;

export default ItemCount;
