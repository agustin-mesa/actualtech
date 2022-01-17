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
}) => {
  return (
    <Button>
      {!isLink ? (
        <button onClick={onClick} disabled={disabled}>
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
  }

  button,
  .btn-comprar.action {
    background: var(--bg__05);
    color: var(--text__05);
    width: 60%;
    min-width: 225px;
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
  .btn-comprar:hover {
    color: var(--text__03);
    background: transparent;
  }
`;

export default CustomButton;
