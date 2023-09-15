import React, { useState, ReactNode, FC } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
import { TOGGLE_THEME_CREATOR } from "src/actions/actions";


export interface IHeader {
  // className?: string,
  children?: ReactNode,
  isLight: boolean,
}

const Header: FC<IHeader> = ({ children }) => {
  //children я использую для Search
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen); //открытие и закрытие бургера
  };

  const handleToggle = () => {
    setIsLight(prevState => !prevState); //цвет кнопок переключения темы
  }

  const theme = useSelector(({theme}) => theme); //стягиваем значение темы из redux

  const dispatch = useDispatch();

  let toggleThemeFunction = (theme : string) => {
    dispatch(TOGGLE_THEME_CREATOR(theme)); // отправка значения темы в redux
    handleToggle();
  }
  const navigate = useNavigate();

  const logOut = (() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate('/signin');
  })

  let userInfo: string | null = localStorage.getItem("userInfo");

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
          {userInfo ? JSON.parse(userInfo).username : <StyledUserImg src="/images/icon.png" alt="user" />}
          
        </div>
      </div>
      <div className={`burger__opened ${isOpen ? "visible" : ""}`}>
        <StyledBurgerUserDiv>{userInfo ? JSON.parse(userInfo).username : `Log In`}</StyledBurgerUserDiv>
        <StyledBurgerHomeDiv theme={theme}>
          <Link to="/"><StyledLinkSpan theme={theme}>Home</StyledLinkSpan></Link>
        </StyledBurgerHomeDiv>
        <StyledBurgerThemeDiv>
          <StyledThemeDiv $isLight={isLight} onClick={() => toggleThemeFunction("light")}>sun</StyledThemeDiv>
          <StyledThemeDiv $isLight={!isLight} onClick={() => toggleThemeFunction("dark")}>moon</StyledThemeDiv>
        </StyledBurgerThemeDiv>
        <StyledInOutDiv onClick={() => logOut()}>Log Out</StyledInOutDiv>
      </div>
    </StyledHeader>
  );
};

export default Header;
