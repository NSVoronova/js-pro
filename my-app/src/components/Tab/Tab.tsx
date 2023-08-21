import React from "react";

interface ITab {
  label: string;
  isActive: boolean;
  onClick: () => void;
}
const Tab = ({ label, isActive, onClick }: ITab) => (
  <div className={`tab${isActive ? " active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

export default Tab;
