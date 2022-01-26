import React from "react";
import styled from "styled-components";

import { TextField } from "@mui/material";

const Input = ({ type, label, id, value, onChange }) => {
  return (
    <InputStandard>
      <TextField
        id={id}
        type={type}
        label={label}
        variant="standard"
        value={value}
        onChange={onChange}
      />
    </InputStandard>
  );
};

const InputStandard = styled.div`
  .MuiTextField-root {
    width: 100%;
    margin: 10px 0;
  }
  .MuiTextField-root .MuiInput-input {
    padding: 5px 15px;
  }
  .MuiTextField-root .MuiInputLabel-root {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    color: var(--text__01);
    margin: 0 15px;
  }
  .MuiTextField-root .MuiInputLabel-root.Mui-focused {
    color: var(--text__03);
    transform: translate(-15px, -1.5px) scale(0.75);
  }
  .MuiTextField-root .MuiInputLabel-root.MuiFormLabel-filled {
    transform: translate(-15px, -1.5px) scale(0.75);
  }
  .MuiTextField-root .MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid var(--border__01);
  }
  .MuiTextField-root .MuiInput-root::after {
    border-bottom: 2px solid var(--border__03);
  }
`;

export default Input;
