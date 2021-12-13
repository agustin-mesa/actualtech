import React from "react";
import styled from "styled-components";

import perfilEjemplo from "../assets/images/perfil_ejemplo.jpg";

const PhotoPerfil = () => {
  return (
    <ContainerPhotoPerfil>
      <img src={perfilEjemplo} alt="Agustín Mesa" />
    </ContainerPhotoPerfil>
  );
};

const ContainerPhotoPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: red;
  border-radius: 50px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export default PhotoPerfil;
