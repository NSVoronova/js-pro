import React from "react";
import "./style.css";

export interface IBurger {
  text: string;
  customClass: string;
  onClick: () => void;
}
const MenuHamburger = ({ text, customClass, onClick }: IBurger) => {
  return (
    <button className={customClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default MenuHamburger;
