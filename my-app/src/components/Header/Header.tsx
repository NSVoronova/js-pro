import React, { useState, useEffect, ReactNode, FC } from "react";
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
  StyledLastDiv,
} from "./styledHeader";
import { useSelector, useDispatch } from "react-redux";
import { GET_USER, TOGGLE_THEME_CREATOR } from "src/actions/actions";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";


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

  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  let toggleThemeFunction = (theme : string) => {
    dispatch(TOGGLE_THEME_CREATOR(theme)); // отправка значения темы в redux
    handleToggle();
  }
  const navigate = useNavigate();
 
  useEffect(() => {
    dispatch(GET_USER());
  }, []);

  

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
          { userInfo && JSON.parse(userInfo).username? JSON.parse(userInfo).username : <StyledUserImg src="/images/icon.png" alt="user" />}
        </div>
      </div>
      <div className={`burger__opened ${isOpen ? "visible" : ""}`}>
        <StyledBurgerUserDiv>{userInfo && JSON.parse(userInfo).username ? JSON.parse(userInfo).username : <Link to="/signin">Log In</Link>}</StyledBurgerUserDiv>
        <StyledBurgerHomeDiv theme={theme}>
          <Link to="/"><StyledLinkSpan theme={theme}>Home</StyledLinkSpan></Link><br/>
        </StyledBurgerHomeDiv>
        <StyledBurgerHomeDiv theme={theme}>
          <Link to="/posts"><StyledLinkSpan theme={theme}>All posts</StyledLinkSpan></Link><br/>
        </StyledBurgerHomeDiv>
        <StyledBurgerHomeDiv theme={theme}>
          <Link to="/addpost"><StyledLinkSpan theme={theme}>Add post</StyledLinkSpan></Link><br/>
        </StyledBurgerHomeDiv>
        <StyledBurgerHomeDiv theme={theme}>
          <Link to="/myposts"><StyledLinkSpan theme={theme}>My Posts</StyledLinkSpan></Link>
        </StyledBurgerHomeDiv>
        <StyledLastDiv theme={theme}>
          <Link to="/search"><StyledLinkSpan theme={theme}>Search</StyledLinkSpan></Link>
        </StyledLastDiv>
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
