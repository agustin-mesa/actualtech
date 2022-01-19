import React from "react";
import styled from "styled-components";

//-----------------IMAGES-----------------
import logo from "../../assets/logos/logo.png";
//-----------------COMPONENTS-----------------
import CartWidget from "../Cart/CartWidget";
import PhotoPerfil from "../PhotoPerfil/PhotoPerfil";
//-----------------STYLES COMPONENTS-----------------
import { BtnPrimary } from "../styles/StyledComponentsDefault";
//-----------------REACT ROUTER-----------------
import { NavLink } from "react-router-dom";

const NavBar = ({ sesionIniciada }) => {
  return (
    <header>
      <ContainerNavBar>
        <div className="navbar__logo">
          <NavLink to="/" exact="true">
            <img src={logo} alt="ActualTech" />
          </NavLink>
        </div>
        <ul className="navbar__menu-list">
          <li>
            <NavLink to="/" exact="true">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/">Tienda</NavLink>
          </li>
          <li>
            <NavLink to="/sobre-nosotros">Sobre nosotros</NavLink>
          </li>
        </ul>
        <div className="navbar__menu">
          {sesionIniciada ? (
            <>
              <CartWidget />
              <PhotoPerfil />
            </>
          ) : (
            <BtnPrimary>Iniciar sesión</BtnPrimary>
          )}
        </div>
      </ContainerNavBar>
    </header>
  );
};

const ContainerNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px 10%;
  max-width: 1100px;
  z-index: 9999;
  background: var(--bg__09);
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }
`;

export default NavBar;
