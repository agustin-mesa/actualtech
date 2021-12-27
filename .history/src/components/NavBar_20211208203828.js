import React from "react";
import styled from "styled-components";

//-----------------IMAGES-----------------
import logo from "../assets/images/logo.png";

const NavBar = () => {
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

  .navbar__menu-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    list-style: none;
  }
  .navbar__menu-list li a {
    padding: ;
  }
`;

export default NavBar;