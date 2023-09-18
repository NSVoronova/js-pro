import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import Title from "src/components/Title/Title";
import SignForm from "../SignForm";
import Input from "../Input/Input";
import SignButton from "../SignButton/SignButton";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import { GET_USER, SIGN_IN } from "src/actions/actions";

const SignPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();



  const handleClick = async () => {
   await dispatch(SIGN_IN(navigate,{email,password}));
   await dispatch(GET_USER());
  };


  return (
    <>
      <Link to='/'>Back to home...</Link>
      <br/>
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
