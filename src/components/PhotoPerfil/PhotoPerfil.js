import React from "react";
import styled from "styled-components";

const PhotoPerfil = ({ photo, onClick }) => {
  return (
    <ContainerPhotoPerfil onClick={onClick}>
      {photo ? (
        <img src={photo} alt="Foto Perfil" />
      ) : (
        <span className="material-icons">account_circle</span>
      )}
    </ContainerPhotoPerfil>
  );
};

const ContainerPhotoPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  overflow: hidden;
  user-select: none;

  img {
    width: 40px;
    height: 40px;
  }
  span {
    font-size: 2em;
    color: var(--text__01);
    cursor: pointer;
  }
`;

export default PhotoPerfil;
