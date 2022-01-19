import React, { useEffect, useState } from "react";
import styled from "styled-components";

//----------------REACT ROUTER--------------
import { NavLink } from "react-router-dom";
//-----------------FIREBASE-----------------
import useGetItems from "../../firebase/hooks/useGetItems";

const NavBarCategoria = () => {
  const [items] = useGetItems();

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    let cat = items.map((item) => {
      return item.categoria;
    });
    cat = cat.filter((categoria, index) => cat.indexOf(categoria) === index);
    return setCategorias(cat);
  }, [items]);

  return (
    <ContainerNavBarCat>
      <ul>
        {categorias.map((categoria, i) => {
          return (
            <li key={i}>
              <NavLink to={`/shop/category/${categoria.toLowerCase()}`}>
                {categoria}
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
