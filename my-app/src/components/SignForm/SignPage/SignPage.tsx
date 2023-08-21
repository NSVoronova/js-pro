import React, { useState } from "react";
import Title from "src/components/Title/Title";
import SignForm from "../SignForm";
import Input from "../Input/Input";
import SignButton from "../SignButton/SignButton";

const SignPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let user = {
    email: "a",
    password: "1234",
  };
  const handleClick = () => {
    if (email === user.email && password === user.password) {
      console.log("Молодец!");
    } else {
      console.log("Попробуй еще раз");
    }
  };
  return (
    <>
      <div>Back to home...</div>
      <Title text="Sign In"></Title>
      <SignForm customClass="sign-in__form">
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

        <p className="forgot__password">Forgot password?</p>
        <SignButton
          text={"Sign In"}
          onClick={handleClick}
          customClass="sign__button"
        />
      </SignForm>
    </>
  );
};

export default SignPage;
