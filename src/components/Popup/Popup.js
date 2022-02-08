import React from "react";
import styled, { keyframes } from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

const Popup = ({
  onClickOne, // Recibe función para la acción del primer btn
  onClickTwo, // Recibe función para solamente cerrar el popup
  popupText,
  btnTextOne,
  btnTextTwo,
  doubleBtn = true,
}) => {
  return (
    <ContainerPopup>
      <div className="menu">
        <p>{popupText}</p>
        {doubleBtn ? (
          <>
            <CustomButton
              text={btnTextOne}
              onClick={onClickOne}
              className="action fullwidth"
            />
            <CustomButton
              text={btnTextTwo}
              onClick={onClickTwo}
              className="fullwidth"
            />
          </>
        ) : (
          <CustomButton
            text={btnTextOne}
            onClick={onClickOne}
            className="fullwidth"
          />
        )}
      </div>
      <div className="hideMenu" onClick={onClickTwo}></div>
    </ContainerPopup>
  );
};

const showMenu = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-50px);
  }100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContainerPopup = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg__07);
  z-index: 10000;

  .menu p {
    text-align: center;
    color: var(--text__01);
  }
  .menu {
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--bg__08);
    box-shadow: 0px 14px 40px -10px var(--shadow__01);
    z-index: 100;
    animation: ${showMenu} 0.5s ease forwards;
  }

  .hideMenu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
`;

export default Popup;
