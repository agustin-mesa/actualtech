import React from 'react';

const ItemListContainer = ({texto}) => {
    return ( <ContainerItemList><p>{texto}</p></ContainerItemList> );
}
 
const ContainerItemList = styled.div`
    display:flex;
    justify-content:center;
`;

export default ItemListContainer;