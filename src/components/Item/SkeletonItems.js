import React from "react";
import styled, { keyframes } from "styled-components";

const SkeletonItem = () => (
  <ContainerSkeletonItem>
    <div className="skeleton__body">
      <div className="skeleton__body-img"></div>
      <div className="skeleton__body-detalles">
        <h3></h3>
        <div className="precio">
          <span className="precioOriginal"></span>
          <span className="precioFinal"></span>
        </div>
        <div className="btn-buy"></div>
      </div>
    </div>
  </ContainerSkeletonItem>
);

const SkeletonItems = () => {
  return (
    <>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </>
  );
};

const load = keyframes`
    from {
        left: -150px;
    }
    to {
        left: 100%;
    }
`;

const ContainerSkeletonItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  background: var(--bg__08);
  box-shadow: 0px 14px 40px -10px var(--shadow__01);
  max-width: 280px;
  min-width: 200px;
  height: 330px;
  padding: 40px 10px 20px;
  transition: all 0.2s ease;
  user-select: none;
  overflow: hidden;

  .skeleton__body {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
  }
  .skeleton__body-img {
    position: relative;
    width: 100%;
    height: 230px;
    background: var(--bg__09);
    overflow: hidden;
    border-radius: 8px;
  }

  .skeleton__body-detalles {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 20px 0 0;
  }
  .skeleton__body-detalles h3 {
    overflow: hidden;
    position: relative;
    background: var(--bg__09);
    width: 80%;
    height: 20px;
    border-radius: 50px;
  }
  .skeleton__body-detalles .precio {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skeleton__body-detalles .precio span.precioOriginal {
    background: var(--bg__09);
    overflow: hidden;
    position: relative;
    display: block;
    width: 60px;
    padding: 8px 0;
    margin: 0 0 10px;
    border-radius: 50px;
  }
  .skeleton__body-detalles .precio span.precioFinal {
    position: relative;
    background: var(--bg__09);
    display: block;
    overflow: hidden;
    padding: 10px 50px;
    border-radius: 50px;
  }
  .skeleton__body-detalles .btn-buy {
    background: var(--bg__09);
    position: relative;
    overflow: hidden;
    width: 80%;
    height: 40px;
    border-radius: 50px;
  }

  .skeleton__body-img::after,
  .skeleton__body-detalles h3::after,
  .skeleton__body-detalles .precio span.precioOriginal::after,
  .skeleton__body-detalles .precio span.precioFinal::after,
  .skeleton__body-detalles .btn-buy::after {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

export default SkeletonItems;
