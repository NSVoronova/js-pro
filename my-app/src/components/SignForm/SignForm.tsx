import React, { ReactNode, useState } from "react";
import Input from "./Input/Input";
import SignButton from "./SignButton/SignButton";
import "./SignForm.css";

const SignForm = ({
  customClass,
  children,
}: {
  customClass?: string;
  children?: ReactNode;
}) => {
  const [isSignIn, setSignIn] = useState(false);

  return <form className={`form ${customClass}`}>{children}</form>;
};

export default SignForm;
