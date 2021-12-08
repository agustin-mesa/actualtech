import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <header>
      <ContainerNavBar>
        <span className="material-icons large">shopping_cart</span>
      </ContainerNavBar>
    </header>
  );
};

const ContainerNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NavBar;
