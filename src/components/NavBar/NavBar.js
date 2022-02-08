import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "react-responsive";
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
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
        background: "var(--bg__09)",
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

        {isMobile ? (
          showMenu && (
            <ul
              className="navbar__menu-list"
              onClick={() => setTimeout(() => setShowMenu(!showMenu), 300)}
            >
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
          )
        ) : (
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
        )}
        <div className="navbar__menu">
          {user ? (
            <>
              <PhotoPerfil
                photo={user.photoUrl}
                onClick={() => setShowPopup(!showPopup)}
              />
            </>
          ) : (
            <div className="btn-action">
              <CustomButton
                text="Iniciar sesión"
                className="action"
                isLink={true}
                link="/"
                minWidth="auto"
                width="110px"
              />
            </div>
          )}
          <CartWidget />
          {isMobile && (
            <span
              className="material-icons menu-btn"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? "close" : "menu"}
            </span>
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

const showMenu = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-10px) scaleY(1.5);
  }
  100%{
    opacity: 1;
    transform: translateY(0px) scaleY(1);
  }
`;

const ContainerNavBar = styled.nav`
  position: relative;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 10% 5px;
  max-width: 1100px;
  margin: auto;

  .navbar__logo {
    z-index: 1002;
  }
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
    z-index: 1002;
  }
  .menu-btn {
    font-size: 2em;
    color: var(--text__01);
    margin-left: 10px;
    z-index: 1003;
    cursor: pointer;
  }

  @media only screen and (max-width: 760px) {
    & {
      padding: 10px 3% 5px;
    }
    .navbar__menu-list {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      flex-direction: column;
      z-index: 1001;
      background: var(--bg__08);
      padding: 0;
      margin: 0;
      animation: ${showMenu} 0.5s ease forwards;
    }

    .navbar__menu-list li {
      display: block;
      width: 100%;
      text-align: center;
    }
    .navbar__menu-list li a {
      display: block;
      padding: 25px 0px;
    }
    .btn-action {
      flex: 1;
    }
  }
  @media only screen and (max-width: 460px) {
    & {
      flex-direction: column;
    }
    .navbar__logo {
      padding: 10px 0 0;
    }
    .navbar__menu {
      justify-content: flex-end;
      width: 100%;
    }
  }
`;

export default NavBar;
