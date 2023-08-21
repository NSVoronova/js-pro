import React, { ReactNode } from "react";
import "./style.css";

export interface ITitle {
  text?: string;
  children?: ReactNode;
  customClass?: string;
}
const Title = ({ text }: ITitle) => {
  return <h1>{text}</h1>;
};

export default Title;
