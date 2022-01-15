import React from "react";
import styled from "styled-components";

//----------------REACT ROUTER--------------
import { NavLink } from "react-router-dom";
//----------------DATA--------------
import categorias from "../data/categorias";

const NavBarCategoria = () => {
  return (
    <ContainerNavBarCat>
      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={categoria.id}>
              <NavLink to={`/shop/category/${categoria.name.toLowerCase()}`}>
                {categoria.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </ContainerNavBarCat>
  );
};

const ContainerNavBarCat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg__05);
  border-radius: 8px 8px 0 0;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul li a {
    color: var(--text__05);
    font-size: 1.1em;
    font-weight: 700;
    padding: 10px 20px;
    transition: all 0.2s ease;
    text-decoration: none;
    border-radius: 8px;
    margin: 0 5px;
  }
  ul li a:hover {
    background: var(--bg__03);
  }
  ul li a.active {
    background: var(--bg__02);
  }
`;

export default NavBarCategoria;
