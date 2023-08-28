import React, { useState, ReactNode, FC, createContext } from "react";
import { Link } from "react-router-dom";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import {
  StyledUserImg,
  StyledBurgerUserDiv,
  StyledBurgerHomeDiv,
  StyledBurgerThemeDiv,
  StyledInOutDiv,
  StyledThemeDiv,
} from "./styledHeader";
import { IMainLayout } from "../MainLayout/MainLayout";

export interface IHeader {
  className?: string,
  children?: ReactNode,
  isLight?: boolean,
}

const Header: FC<IHeader> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    setIsLight(prevState => !prevState)
  }
  return (
    <>
      <div className="burger__container">
        <MenuHamburger
          customClass="closed"
          text={isOpen ? "╳" : "☰"}
          onClick={handleBurgerClick}
        ></MenuHamburger>
        <div className="search__container">{children}</div>
        <Link to="/search">&#x1f50d;</Link>
        <div className="user">
          {}
          <StyledUserImg src="images/icon.png" alt="user" />
        </div>
      </div>
      <div className={`burger__opened ${isOpen ? "visible" : ""}`}>
        <StyledBurgerUserDiv>Artem Malkin</StyledBurgerUserDiv>
        <StyledBurgerHomeDiv>
          <Link to="/">Home</Link>
        </StyledBurgerHomeDiv>
        <StyledBurgerThemeDiv>
          <StyledThemeDiv isLight={isLight} onClick={handleToggle}>sun</StyledThemeDiv>
          <StyledThemeDiv isLight={!isLight} onClick={handleToggle}>moon</StyledThemeDiv>
        </StyledBurgerThemeDiv>
        <StyledInOutDiv>Log Out</StyledInOutDiv>
      </div>
    </>
  );
};

export default Header;
