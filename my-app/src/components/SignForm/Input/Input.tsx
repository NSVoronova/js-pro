import React, { FC, useState } from "react";
import { StyledInput, StyledLabel } from "./styled";

interface IInput {
  label: string;
  placeholder: string;
  type: "password" | "text";
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<IInput> = ({ label, placeholder, type, value, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default Input;
