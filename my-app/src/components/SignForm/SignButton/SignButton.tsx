import React from "react";

interface IButton {
  text: string;
  type?: string;
  onClick?: () => void;
  customClass?: string;
}

const SignButton: React.FC<IButton> = (props) => {
  return (
    <button type="button" className={props.customClass} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default SignButton;
