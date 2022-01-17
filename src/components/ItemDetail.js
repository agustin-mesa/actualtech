import React, { useEffect, useState } from "react";
import styled from "styled-components";

//-----------------COMPONENTS-----------------
import Precios from "./Precios";
import ItemCount from "./ItemCount";
import toast from "react-hot-toast";
//------------CONTEXT------------
import { useCart } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem, itemsCantidadAlcanzada } = useCart();
  const [contadorProducto, setContadorProducto] = useState(1);
  const [itemCantidadAlcanzada, setItemCantidadAlcanzada] = useState(false);

  const onAdd = (cantidad) => {
    setContadorProducto(cantidad);
    addItem(item, cantidad);
    toast.success("Producto agregado.");
  };
  useEffect(() => {
    if (!itemsCantidadAlcanzada.some((item) => item === undefined || false)) {
      const limit = itemsCantidadAlcanzada.some(
        (producto) => producto.id === item.id && true
      );
      setItemCantidadAlcanzada(limit);
    }
  }, [itemsCantidadAlcanzada, itemCantidadAlcanzada]);

  return (
    <>
      <DetailItem>
        <div className="item__img">
          <img src={item.pictureUrl} alt={item.title} />
        </div>
        <div className="item__detalles">
          <div className="detalles-opiniones">
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star_outline</span>
            <p>{item.opiniones} opiniones</p>
          </div>
          <div className="detalles-body">
            <div className="body__header">
              <h3>{item.title}</h3>
              <Precios
                precio={item.price}
                descuento={item.descuento}
                estilo="align-left"
              />
              {item.cuotas && (
                <p className="cuotas">
                  {item.cuotas} {item.sinInteres && <b>SIN INTERÉS</b>}
                </p>
              )}
              {item.envioGratis && <p className="envio">Envío gratis</p>}
            </div>
            <div className="body__bottom">
              <ItemCount
                stockProducto={item.stock}
                onAdd={onAdd}
                contadorProducto={contadorProducto}
                setContadorProducto={setContadorProducto}
                limit={itemCantidadAlcanzada}
              />
            </div>
          </div>
        </div>
      </DetailItem>
    </>
  );
};

const DetailItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  .item__img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;
    background: var(--bg__08);
    box-shadow: 0px 14px 40px -10px var(--shadow__02);
    border-radius: 8px;
    overflow: hidden;
  }
  .item__img img {
    width: 100%;
  }
  .item__detalles {
    padding: 0 0 0 10%;
    width: 100%;
  }

  .detalles-opiniones {
    display: flex;
    align-items: center;
    color: var(--text__06);
    font-size: 0.9em;
  }
  .detalles-opiniones span {
    color: var(--text__03);
  }
  .detalles-opiniones p {
    margin: 0 0 0 10px;
  }

  .detalles-body {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    height: 70vh;
  }
  .body__header {
    width: 100%;
  }
  .body__header h3 {
    font-size: 1.5em;
    color: var(--text__01);
  }
  .body__header p.cuotas {
    border-bottom: 1px solid #fa6647;
    width: 100%;
    padding: 5px;
    color: var(--text__02);
    font-size: 0.9em;
    font-weight: 700;
    line-height: 12px;
  }
  .body__header p.cuotas b {
    color: var(--text__03);
  }
  .body__header p.envio {
    font-weight: 700;
    color: var(--text__02);
  }
  .body__bottom {
    width: 100%;
  }
`;

export default ItemDetail;
