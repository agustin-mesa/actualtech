import React from "react";
import styled from "styled-components";

//-----------------IMAGES-----------------
import logo from "../assets/logos/logo.png";
//-----------------COMPONENTS-----------------
import CartWidget from "./CartWidget";
import PhotoPerfil from "./PhotoPerfil";

const NavBar = ({ sesionIniciada }) => {
  return (
    <header>
      <ContainerNavBar>
        <div className="navbar__logo">
          <a href="#">
            <img src={logo} alt="ActualTech" />
          </a>
        </div>
        <ul className="navbar__menu-list">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Tienda</a>
          </li>
          <li>
            <a href="#">Sobre nosotros</a>
          </li>
        </ul>
        <div className="navbar__menu">
          {sesionIniciada ? (
            <>
              <CartWidget cantidad="7" />
              <PhotoPerfil />
            </>
          ) : (
            <button>Iniciar sesión</button>
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

  .navbar__menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }
  .navbar__menu button {
    color: var(--text__05);
    font-size: 1em;
    font-weight: 700;
    text-align: center;
    border-radius: 50px;
    background: var(--bg__05);
    transition: all 0.2s ease;
    border: none;
    outline: none;
    padding: 10px 20px;
  }
  .navbar__menu button:hover {
    background: var(--bg__06);
    box-shadow: 0px 2px 6px var(--shadow__01);
  }
`;

export default NavBar;
