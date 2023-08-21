import React, { useState } from "react";
import Title from "src/components/Title/Title";
import SignForm from "../SignForm";
import Input from "../Input/Input";
import SignButton from "../SignButton/SignButton";
import { StyledA, StyledP } from "./styled";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = () => {
    if (email && name && password) {
      console.log("Зарегестрирован!");
      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("Заполните все поля!");
    }
  };
  return (
    <>
      <StyledA href="#">Back to home...</StyledA>
      <Title text="Sign Up"></Title>
      <SignForm customClass="sign-in__form">
        <Input
          label="Name"
          placeholder="Your Name"
          type="text"
          value={name}
          onChange={setName}
        />
        <Input
          label="E-mail"
          placeholder="Your E-mail"
          type="text"
          value={email}
          onChange={setEmail}
        />
        <Input
          label="Password"
          placeholder="Your password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <Input
          label="Confirm password"
          placeholder="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
        <SignButton
          text={"Sign Up"}
          onClick={handleClick}
          customClass="sign__button"
        />
        <StyledP>
          Already have account? <a href="#">Sign In</a>
        </StyledP>
      </SignForm>
    </>
  );
};

export default SignUpPage;
