import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import Input from "../components/CustomInput/Input";
import CustomButton from "../components/CustomButton/CustomButton";
import { useToast } from "../context/ToastContext";
import { auth } from "../firebase/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import bgInicio from "../assets/images/background__inicio.svg";

const Login = () => {
  const { toast } = useToast();
  const { user } = useAuth();

  const navigate = useNavigate();

  const [isRegister, setisRegister] = useState(false);
  const [userInputsData, setUserInputsData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    return setUserInputsData({
      ...userInputsData,
      [e.target.id]: e.target.value,
    });
  };

  // Función async - se ejecutará de fondo.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se comprueba el correo y la contraseña ingresado mediante REGEX
    const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const regexCorreo = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!regexCorreo.test(userInputsData.email)) {
      toast.error("Por favor, ingrese un correo electrónico válido.");
      return;
    }
    if (isRegister && !regexPassword.test(userInputsData.password)) {
      toast.error(
        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y otra mayúscula. NO puede tener símbolos"
      );
      return;
    }
    // Se comprueba que estén los datos llenos
    if (userInputsData.email === "" || userInputsData.password === "") {
      toast.error("Por favor, llene todos los datos.");
      return;
    }
    if (
      isRegister &&
      userInputsData.password !== userInputsData.repeatPassword
    ) {
      toast.error("Ambas contraseñas deben coincidir.");
      return;
    }

    if (!isRegister) {
      // Iniciar sesión con Correo y Contraseña
      try {
        await auth.signInWithEmailAndPassword(
          userInputsData.email,
          userInputsData.password
        );
        navigate("/shop/");
      } catch (error) {
        let msg;
        console.log(error);
        switch (error.code) {
          case "auth/wrong-password":
            msg = "La contraseña no es correcta. Inténtelo otra vez.";
            break;
          case "auth/user-not-found":
            msg = "El correo ingresado no se encuentra registrado.";
            break;
          default:
            msg = "Hubo un error al intentar iniciar sesión.";
            break;
        }
        toast.error(msg);
      }
    } else {
      // Se crea un usuario con Correo y Contraseña
      try {
        await auth.createUserWithEmailAndPassword(
          userInputsData.email,
          userInputsData.password
        );
        // Enviar email de verificación para cuentas creadas con Correo y Contraseña
        // auth.currentUser.sendEmailVerification();
        navigate("/shop");
      } catch (error) {
        let msg;
        console.log(error);
        switch (error.code) {
          case "auth/invalid-password":
            msg = "La contraseña tiene que ser de al menos 6 caracteres.";
            break;
          case "auth/email-already-in-use":
            msg = "Ya existe una cuenta con el correo proporcionado.";
            break;
          case "auth/invalid-email":
            msg = "El correo electrónico no es válido";
            break;
          default:
            msg = "Hubo un error al intentar crear la cuenta.";
            break;
        }
        toast.error(msg);
      }
    }
  };

  return (
    <>
      {!user ? (
        <ContainerLogin>
          {!isRegister ? (
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
                  onClick={(e) => handleSubmit(e)}
                  isLink={false}
                  className="action"
                />
                <span>
                  Aún no tengo una cuenta.{" "}
                  <b onClick={() => setisRegister(!isRegister)}>
                    Quiero registrarme
                  </b>
                </span>
              </div>
            </form>
          ) : (
            <form>
              <h2>Registrarme</h2>
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
                <Input
                  type="password"
                  label="Repita la contraseña"
                  id="repeatPassword"
                  value={userInputsData.repeatPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="btn-action">
                <CustomButton
                  text="Registrarme"
                  onClick={(e) => handleSubmit(e)}
                  isLink={false}
                  className="action"
                />
                <span>
                  Ya tengo una cuenta.{" "}
                  <b onClick={() => setisRegister(!isRegister)}>
                    Quiero iniciar sesión
                  </b>
                </span>
              </div>
            </form>
          )}
        </ContainerLogin>
      ) : (
        <Navigate to="/shop" />
      )}
    </>
  );
};

const showForm = keyframes`
  0%{
    transform: translateY(50px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;

const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${bgInicio});
  background-size: cover;
  background-position: center;

  form {
    background: var(--bg__09);
    box-shadow: 0px 14px 40px -10px var(--shadow__01);
    padding: 20px 30px;
    border-radius: 10px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation: ${showForm} ease 0.5s forwards;
  }

  form h2 {
    text-align: center;
    font-size: 1.6em;
    color: var(--text__01);
  }

  form .inputs {
    width: 100%;
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
`;

export default Login;
