import React from "react";
import { useNavigate} from 'react-router-dom'
import Title from "../Title/Title";
import SignButton from "../SignForm/SignButton/SignButton";
import "../SignForm/SignForm.css";
import SignForm from "../SignForm/SignForm";

const SuccessfulLoginPage = () => {
  const navigate = useNavigate();

  const handleButtonHomeClick = () => {
    navigate("/posts");
  };
  return (
    <>
      <div>Back to home...</div>
      <Title text="Success" />
      <SignForm customClass=" ">
        <p>E-mail confirmed</p>
        <p>Your registration is now completed</p>
        <SignButton
          text="Super!"
          onClick={handleButtonHomeClick}
          customClass="sign__button"
        />
      </SignForm>
    </>
  );
};

export default SuccessfulLoginPage;
