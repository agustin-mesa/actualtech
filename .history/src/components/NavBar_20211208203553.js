import React from "react";
import styled from "styled-components";

//-----------------IMAGES-----------------
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <header>
      <ContainerNavBar>
        <div className="navbar__logo">
          <img src={logo} alt="ActualTech" />
        </div>
        <ul className="navbar__menu-list">
          <li>Inicio</li>
          <li>Tienda</li>
          <li>Sobre nosotros</li>
        </ul>
        <div className="navbar__menu">
          <button>Login</button>
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
  background: red;
  padding: 5px 10%;
`;

export default NavBar;
