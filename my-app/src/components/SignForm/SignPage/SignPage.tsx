import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import Title from "src/components/Title/Title";
import SignForm from "../SignForm";
import Input from "../Input/Input";
import SignButton from "../SignButton/SignButton";
import MainLayout from "src/components/MainLayout/MainLayout";

const SignPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  let user = {
    email: "a",
    password: "1234",
  };
  const handleClick = () => {
    if (email === user.email && password === user.password) {
      navigate("/success");
    } else {
      alert("Попробуй еще раз");
    }
  };
  return (
    <>
    <MainLayout>
      <Link to='/'>Back to home...</Link>
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
      </MainLayout>
    </>
  );
};

export default SignPage;
