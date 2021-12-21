import styled from "styled-components";

const BtnPrimary = styled.button`
  color: var(--text__05);
  font-size: 1em;
  font-weight: 700;
  text-align: center;
  border-radius: 50px;
  background: var(--bg__05);
  transition: all 0.2s ease;
  border: none;
  padding: 10px 20px;
  &:hover {
    background: var(--bg__06);
    box-shadow: 0px 2px 6px var(--shadow__01);
  }
`;

export { BtnPrimary };
