import React, {ReactNode, FC} from 'react'
import Header from '../Header/Header'
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { StyledMain, StyledFooter, StyledWrapper } from './styledLayout';


export interface IMainLayout {
  className?: string,
  children: ReactNode,
}
const MainLayout: FC<IMainLayout> = ({ children }) => {
  const theme = useSelector(({theme}) => theme);
  const isLoading = useSelector(({isLoading}) => isLoading);

  return (
    <StyledWrapper  theme={theme} className='wrapper'>
      <Header isLight={true}/>
      <StyledMain>
        {children}
      </StyledMain>
      {isLoading ? <Loader/> : null}
      <StyledFooter theme={theme}>
        <span>2022</span>
        <span>All rights reserved</span>
      </StyledFooter>
    </StyledWrapper>
  );
};



export default MainLayout
