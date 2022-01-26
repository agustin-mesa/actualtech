import React, { useState } from "react";
import styled from "styled-components";

import Input from "../components/CustomInput/Input";
import CustomButton from "../components/CustomButton/CustomButton";
import { useToast } from "../context/ToastContext";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { toast } = useToast();
  const { navigate } = useNavigate();

  const [userInputsData, setUserInputsData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    return setUserInputsData({...userInputsData, e.target.id: e.target.value})
  };

  console.log(userInputsData)

  const onSubmit = async (e) => {
    e.preventDefault(userInputsData);

    // Se comprueba el correo ingresado mediante REGEX
    const regexCorreo = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!regexCorreo.test(userInputsData.email)) {
      toast.error("Por favor, ingrese un correo electrónico válido.");
      return;
    }
    // Se comprueba que estén los datos llenos
    if (userInputsData.email === "" || userInputsData.password === "") {
      toast.error("Por favor, llene todos los datos.");
      return;
    }

    // Iniciar sesión con Correo y Contraseña
    try {
      await auth.signInWithEmailAndPassword(
        userInputsData.email,
        userInputsData.password
      );
      navigate("/shop");
    } catch (error) {
      let msg;

      switch (error.code) {
        case "auth/wrong-password":
          msg = "La contraseña no es correcta. Inténtelo otra vez.";
          break;
        case "auth/user-not-found":
          msg = "El correo ingresado no se encuentra registrado.";
          break;
        default:
          msg = "Hubo un error al intentar crear la cuenta.";
          break;
      }
      toast.error(msg);
    }
  };

  return (
    <ContainerLogin>
      <form>
        <h2>Iniciar sesión</h2>
        <div className="inputs">
          <Input
            type="email"
            label="Correo electrónico"
            id="email"
            value={userInputsData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            label="Contraseña"
            id="password"
            value={userInputsData.password}
            onChange={handleChange}
          />
        </div>
        <div className="btn-action">
          <CustomButton
            text="Iniciar sesión"
            onClick={(e) => onSubmit(e)}
            isLink={false}
            className="action"
          />
        </div>
      </form>
    </ContainerLogin>
  );
};

const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 60px 0;
  max-width: 1000px;

  form {
    background: var(--bg__08);
    padding: 20px 30px;
    border-radius: 10px;
    width: 100%;
    max-width: 450px;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  form h2 {
    text-align: center;
    font-size: 1.6em;
    color: var(--text__01);
  }

  form .inputs {
    width: 100%;
  }
`;

export default Login;
