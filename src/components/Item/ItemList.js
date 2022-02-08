import React, { useEffect, useState } from "react";
import styled from "styled-components";
//-----------------COMPONENTS-----------------
import Item from "./Item";
//-----------------REACT ROUTER-----------------
import { Link } from "react-router-dom";
//-----------------FIREBASE-----------------
import useGetItems from "../../firebase/hooks/useGetItems";
import SkeletonItems from "./SkeletonItems";

const ItemList = ({ soloCategoria }) => {
  const [items] = useGetItems();
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (items.length !== 0) {
      setShowSkeleton(false);
    }
  }, [items]);

  return (
    <ContainerItemList>
      {!showSkeleton ? (
        <>
          {soloCategoria
            ? items.map((item) => {
                return (
                  item.categoria.toLowerCase() === soloCategoria && (
                    <Link key={item.id} to={`/item/${item.id}`}>
                      <Item item={item} />
                    </Link>
                  )
                );
              })
            : items.map((item) => {
                return (
                  <Link key={item.id} to={`/item/${item.id}`}>
                    <Item item={item} />
                  </Link>
                );
              })}
        </>
      ) : (
        <SkeletonItems />
      )}
    </ContainerItemList>
  );
};

const ContainerItemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px 30px;
  background: var(--bg__08);
  padding: 50px 40px;
  border-radius: 0 0 10px 10px;
  margin: 0;
  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 860px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 600px) {
    & {
      gap: 30px 15px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ItemList;
