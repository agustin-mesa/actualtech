import React from "react";
import styled from "styled-components";

//-----------------FUNCTIONS-----------------
import { formatoPeso } from "../functions/formatoPeso";

const Precios = ({ precio, descuento, estilo }) => {
  const formatoDescuento = () => {
    let formulaDescuento = precio - (descuento * precio) / 100;
    return formatoPeso(Math.round(formulaDescuento));
  };

  return (
    <ContainerPrecios className={estilo}>
      {descuento && (
        <>
          {estilo !== "row-reverse" && (
            <span className="oferta">{descuento}% OFF</span>
          )}

          <span className="precioOriginal">{formatoPeso(precio)}</span>
        </>
      )}
      <span className="precioFinal">
        {descuento ? formatoDescuento() : formatoPeso(precio)}
      </span>
    </ContainerPrecios>
  );
};

const ContainerPrecios = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 0 0 10px;

  &.align-left {
    align-items: flex-start;
    span {
      margin: 2px 0;
    }
  }
  &.row-reverse {
    justify-content: flex-end;
    flex-direction: row-reverse;
    span.precioFinal {
      margin: 0 5px 0 0;
    }
  }

  span.oferta {
    background: var(--bg__10);
    color: var(--text__05);
    border-radius: 50px;
    width: 60px;
    padding: 3px;
    font-size: 0.8em;
    font-weight: 600;
  }
  span.precioOriginal {
    color: var(--text__06);
    font-size: 0.9em;
    text-decoration: line-through;
  }
  span.precioFinal {
    color: var(--text__01);
    font-size: 1.1em;
    font-weight: 700;
  }
`;

export default Precios;
