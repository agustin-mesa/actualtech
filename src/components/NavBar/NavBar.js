import React, { useState } from "react";
import styled from "styled-components";

//-----------------IMAGES-----------------
import logo from "../../assets/logos/logo.png";
//-----------------COMPONENTS-----------------
import CartWidget from "../Cart/CartWidget";
import PhotoPerfil from "../PhotoPerfil/PhotoPerfil";
import CustomButton from "../CustomButton/CustomButton";
//-----------------REACT ROUTER-----------------
import { NavLink, useNavigate } from "react-router-dom";
//-----------------CONTEXT-----------------
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";
//-----------------FIREBASE-----------------
import { auth } from "../../firebase/firebase";
import Popup from "../Popup/Popup";

const NavBar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPopup, setShowPopup] = useState(false);

  // Función asíncrona para cerrar sesión
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      // Función de Firebase para cerrar sesión con cualquier proveedor
      // (Facebook, Gmail o Email-Password)
      await auth.signOut();
      setShowPopup(false);
      navigate("/");
    } catch (error) {
      let msg;

      switch (error.code) {
        default:
          msg = "Hubo un error al intentar cerrar sesión, inténtalo más tarde.";
          break;
      }
      setShowPopup(false);
      toast.error(msg);
    }
  };

  return (
    <header
      style={{
        background: "var(--bg__09",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        boxShadow: "0px 14px 40px -10px var(--shadow__01)",
        zIndex: 9999,
      }}
    >
      <ContainerNavBar>
        <div className="navbar__logo">
          <NavLink to="/" exact="true">
            <img src={logo} alt="ActualTech" />
          </NavLink>
        </div>
        <ul className="navbar__menu-list">
          {!user && (
            <li>
              <NavLink to="/" exact="true">
                Inicio
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/shop/">Tienda</NavLink>
          </li>
        </ul>
        <div className="navbar__menu">
          <CartWidget />
          {user ? (
            <>
              <PhotoPerfil
                photo={user.photoUrl}
                onClick={() => setShowPopup(!showPopup)}
              />
            </>
          ) : (
            <CustomButton
              text="Iniciar sesión"
              className="action"
              isLink={true}
              link="/"
              minWidth="auto"
              width="110px"
            />
          )}
          {showPopup && (
            <Popup
              onClickOne={handleSignOut}
              onClickTwo={() => setShowPopup(!showPopup)}
              popupText="¿Desea cerrar sesión?"
              btnTextOne="Cerrar sesión"
              btnTextTwo="No, mejor no"
            />
          )}
        </div>
      </ContainerNavBar>
    </header>
  );
};

const ContainerNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px 10% 0;
  max-width: 1100px;
  margin: auto;

  .navbar__logo img {
    width: 130px;
  }

  .navbar__menu-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    list-style: none;
  }
  .navbar__menu-list li a {
    color: var(--text__01);
    font-size: 1.1em;
    font-weight: 700;
    padding: 10px 20px;
    transition: all 0.2s ease;
    text-decoration: none;
  }
  .navbar__menu-list li a:hover {
    color: var(--text__02);
  }
  .navbar__menu-list li a.active {
    color: var(--text__02);
  }

  .navbar__menu {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }
`;

export default NavBar;
