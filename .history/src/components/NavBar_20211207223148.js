import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <header>
      <ContainerNavBar></ContainerNavBar>
    </header>
  );
};

const ContainerNavBar = styled.nav`
  background: red;
`;

export default NavBar;
