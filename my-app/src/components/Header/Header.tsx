import React, { useState, ReactNode, FC } from "react";
import { Link } from "react-router-dom";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import {
  StyledUserImg,
  StyledBurgerUserDiv,
  StyledBurgerHomeDiv,
  StyledBurgerThemeDiv,
  StyledInOutDiv,
  StyledThemeDiv,
  StyledLinkSpan,
  StyledHeader,
} from "./styledHeader";
import { useSelector, useDispatch } from "react-redux";


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
    setIsLight(prevState => !prevState);
  }

  const theme = useSelector(({theme}) => theme);

  const dispatch = useDispatch();

  let toggleThemeFunction = (theme : string) => {
    dispatch({type: "TOGGLE_THEME", payload: theme});
    handleToggle();
  }
  return (
    <StyledHeader>
      <div className="burger__container">
        <MenuHamburger
          customClass="closed"
          text={isOpen ? "╳" : "☰"}
          onClick={handleBurgerClick}
        ></MenuHamburger>
        <div className="search__container">{children}</div>
        <Link to="/search">&#x1f50d;</Link>
        <div className="user">
          <StyledUserImg src="/images/icon.png" alt="user" />
        </div>
      </div>
      <div className={`burger__opened ${isOpen ? "visible" : ""}`}>
        <StyledBurgerUserDiv>Artem Malkin</StyledBurgerUserDiv>
        <StyledBurgerHomeDiv theme={theme}>
          <Link to="/"><StyledLinkSpan theme={theme}>Home</StyledLinkSpan></Link>
        </StyledBurgerHomeDiv>
        <StyledBurgerThemeDiv>
          <StyledThemeDiv isLight={isLight} onClick={() => toggleThemeFunction("light")}>sun</StyledThemeDiv>
          <StyledThemeDiv isLight={!isLight} onClick={() => toggleThemeFunction("dark")}>moon</StyledThemeDiv>
        </StyledBurgerThemeDiv>
        <StyledInOutDiv>Log Out</StyledInOutDiv>
      </div>
    </StyledHeader>
  );
};

export default Header;
