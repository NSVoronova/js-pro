import React from "react";
import Title from "../Title/Title";
import SignButton from "../SignForm/SignButton/SignButton";
import "../SignForm/SignForm.css";
import SignForm from "../SignForm/SignForm";

const SuccessfulLoginPage = () => {
  const handleButtonHomeClick = () => {
    console.log("Go to home");
  };
  return (
    <>
      <div>Back to home...</div>
      <Title text="Success" />
      <SignForm customClass=" ">
        <p>E-mail confirmed</p>
        <p>Your registration is now completed</p>
        <SignButton
          text="Go to home"
          onClick={handleButtonHomeClick}
          customClass="sign__button"
        />
      </SignForm>
    </>
  );
};

export default SuccessfulLoginPage;
