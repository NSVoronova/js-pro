import React, {ReactNode, FC, useState, createContext} from 'react'
import Header from '../Header/Header'
import SearchPage from '../SearchPage/SearchPage';
import Input from '../SignForm/Input/Input';
import { useSelector } from 'react-redux';
import { StyledMain, StyledFooter, StyledWrapper } from './styledLayout';


export interface IMainLayout {
  className?: string,
  children?: ReactNode,
}
const MainLayout: FC<IMainLayout> = ({ children }) => {
  const theme = useSelector(({theme}) => theme);

  return (
    <StyledWrapper  theme={theme} className='wrapper'>
      <Header isLight={true}/>
      <StyledMain>
        {children}
      </StyledMain>
      <StyledFooter theme={theme}>
        <span>2022</span>
        <span>All rights reserved</span>
      </StyledFooter>
    </StyledWrapper>
  );
};



export default MainLayout
