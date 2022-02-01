import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomButton = ({
  text,
  onClick,
  disabled,
  isLink,
  to = "/",
  className,
  minWidth = "225px",
  width = "60%",
}) => {
  return (
    <Button minWidth={minWidth} width={width}>
      {!isLink ? (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`btn-comprar ${className}`}
        >
          {text}
        </button>
      ) : (
        <Link
          className={`btn-comprar ${className}`}
          to={to}
          disabled={disabled}
        >
          {text}
        </Link>
      )}
    </Button>
  );
};

const Button = styled.div`
  display: flex;
  margin: 10px 5px;
  button,
  .btn-comprar {
    padding: 10px 20px;
    border-radius: 50px;
    border: 1px solid var(--border__03);
    background: transparent;
    color: var(--text__03);
    font-size: 1em;
    font-weight: 700;
    transition: all 0.1s ease;
    text-decoration: none;
    text-align: center;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  button,
  .btn-comprar.action {
    background: var(--bg__05);
    color: var(--text__05);
    width: ${(props) => props.width};
    min-width: ${(props) => props.minWidth};
  }
  .btn-comprar.fullwidth {
    width: 100%;
  }
  button:hover,
  .btn-comprar:hover {
    opacity: 0.8;
  }
  button:disabled,
  .btn-comprar:disabled {
    opacity: 0.5;
  }
  button:disabled:hover,
  .btn-comprar:disabled:hover {
    color: var(--text__03);
    background: transparent;
  }
`;

export default CustomButton;
