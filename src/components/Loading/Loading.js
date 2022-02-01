import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import logoAT from "../../assets/logos/logo.png";

const Loading = () => {
  return (
    <ContainerLoading>
      <img src={logoAT} alt="Logo Actual Tech" />
      <Loader type="TailSpin" color="#fa6647" height={40} width={40} />
    </ContainerLoading>
  );
};

const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: column;
  img {
    margin: 0 0 10px;
    width: 200px;
  }
`;

export default Loading;
