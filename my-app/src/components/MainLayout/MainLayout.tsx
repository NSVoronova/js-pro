import React, {ReactNode, FC, useState, createContext} from 'react'
import Header from '../Header/Header'
import SearchPage from '../SearchPage/SearchPage';
import Input from '../SignForm/Input/Input';


export const ThemeContext = createContext({});

export interface IMainLayout {
  className?: string,
  children?: ReactNode,
}
const MainLayout: FC<IMainLayout> = ({ children }) => {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value ={{theme}}>
    <div className='wrapper'>
      <Header isLight={true}/>
      <main>
        {children}
      </main>
      <footer>
        <span>2022</span>
        <span>All rights reserved</span>
      </footer>
    </div>
    </ThemeContext.Provider>
  );
};



export default MainLayout
