import React, { ReactNode } from "react";
import "./style.css";
import { useSelector } from "react-redux";

export interface ITitle {
  text?: string;
  children?: ReactNode;
  customClass?: string;
}
const Title = ({ text }: ITitle) => {

  const theme = useSelector(({theme}) => theme)
  return <h1 className={theme === "light" ? "light__title" : "dark__theme"}>{text}</h1>;
};

export default Title;
