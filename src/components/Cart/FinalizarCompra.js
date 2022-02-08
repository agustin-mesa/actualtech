import React, { useState } from "react";
import styled from "styled-components";

// ----------------- CONTEXT -----------------
import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";
// ----------------- COMPONENTS -----------------
import CustomButton from "../CustomButton/CustomButton";
import Input from "../CustomInput/Input";
import TuCarrito from "./TuCarrito";
// ----------------- FIREBASE -----------------
import { db } from "../../firebase/firebase";
import Popup from "../Popup/Popup";
import { useNavigate } from "react-router-dom";

const FinalizarCompra = () => {
  const { cart, clear } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telephone: "",
  });

  const handleChange = (e) => {
    return setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const updateStockProduct = async (item) => {
    let refItem = db.collection("productos-tienda").doc(item.id);
    // Update stock del producto a comprar
    let itemStockUpdated = item.stock - item.cantidad;
    await refItem.update({
      stock: itemStockUpdated,
    });
  };

  const onFinish = async (e) => {
    e.preventDefault();

    // Se comprueba el correo y la contraseña ingresado mediante REGEX
    const regexCorreo = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!regexCorreo.test(userData.email)) {
      toast.error("Por favor, ingrese un correo electrónico válido.");
      return;
    }
    // Se comprueba que estén los datos llenos
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.telephone === ""
    ) {
      toast.error("Por favor, llene todos los datos.");
      return;
    }

    // Add a new document with a generated id.
    await db
      .collection("ventas")
      .add({
        buyer: userData,
        items: cart.addedItems,
        date: Date(),
        total: cart.totalPrice,
      })
      .then((docRef) => {
        setOrderId(docRef.id);
        setShowPopup(!showPopup);
      })
      .catch((error) => {
        let msg;
        console.log(error);
        switch (error.code) {
          default:
            msg = "Hubo un error al intentar finalizar su compra.";
            break;
        }
        toast.error(msg);
      });

    await cart.addedItems.map((item) => updateStockProduct(item));

    setUserData({
      name: "",
      email: "",
      telephone: "",
    });
    clear();
  };

  const onFinishPopup = () => {
    setShowPopup(!showPopup);
    navigate("/shop");
  };

  return (
    <ContainerFinalizarCompra>
      <form>
        <h2>Finalizar compra</h2>
        <p>
          Complete con sus datos para <b>finalizar</b> con el <b>checkout</b> de
          su compra.
          <br />
          <br />
          Al finalizar la compra, le aparecerá un popup con su{" "}
          <b>orden de compra</b>. Guárdelo para seguir su compra.
        </p>
        <div className="inputs">
          <Input
            type="text"
            label="Nombre y apellido"
            id="name"
            value={userData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            label="Correo electrónico"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
          <Input
            type="tel"
            label="Teléfono (ej: +54 11 xxxx-xxxx)"
            id="telephone"
            value={userData.telephone}
            onChange={handleChange}
          />
        </div>
        <div className="btn-action">
          <CustomButton
            text="Finalizar compra"
            onClick={onFinish}
            className="action"
          />
        </div>
      </form>
      <TuCarrito />
      {showPopup && (
        <Popup
          popupText={
            <>
              ¡Gracias por su compra!
              <br />
              Acá tiene su orden:
              <br />
              <br />
              <b>{orderId}</b>
            </>
          }
          doubleBtn={false}
          btnTextOne="Finalizar"
          onClickOne={onFinishPopup}
        />
      )}
    </ContainerFinalizarCompra>
  );
};

const ContainerFinalizarCompra = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 45px 30px;
  padding: 80px 10% 0;
  width: 100%;
  max-width: 1000px;

  form {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  form h2 {
    width: 100%;
    text-align: left;
    font-size: 1.6em;
    padding: 0 0 15px;
    border-bottom: 2px solid var(--border__03);
    color: var(--text__01);
  }

  form p {
    color: var(--text__01);
    font-size: 1em;
  }
  form .inputs {
    margin: 0 0 20px;
    width: 80%;
  }
  form .btn-action {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  form span {
    color: var(--text__01);
    text-align: center;
    margin-top: 20px;
  }
  form span b {
    cursor: pointer;
  }
  @media only screen and (max-width: 760px) {
    & {
      padding: 120px 20px 0;
    }
  }
  @media only screen and (max-width: 660px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default FinalizarCompra;
