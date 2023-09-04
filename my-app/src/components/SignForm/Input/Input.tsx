import React, { FC } from "react";
import { StyledInput, StyledLabel } from "./styled";

interface IInput {
  label?: string;
  placeholder: string;
  type: "password" | "text";
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<IInput> = ({ label, placeholder, type, value, onChange }) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </>
  );
};

export default Input;
