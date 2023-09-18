import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Title from "src/components/Title/Title";
import SignForm from "../SignForm";
import Input from "../Input/Input";
import SignButton from "../SignButton/SignButton";
import { StyledA, StyledP } from "./styled";
import { useDispatch } from "react-redux";
import { CREATE_USER } from "src/actions/actions";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  const handleClick = () => {
    dispatch(CREATE_USER({username,email,password}));
    console.log({username,email,password})
  };
  return (
    <>
      <Link to='/'>Back to home...</Link>
      <br/>
      <Title text="Sign Up"></Title>
      <SignForm customClass="sign-in__form">
        <Input
          label="Name"
          placeholder="Your Name"
          type="text"
          value={username}
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
         type="button"
          text={"Sign Up"}
          onClick={handleClick}
          customClass="sign__button"
        />
        <StyledP>
          Already have account? <Link to='/signin'>Sign In</Link>
        </StyledP>
      </SignForm>
    </>
  );
};

export default SignUpPage;
