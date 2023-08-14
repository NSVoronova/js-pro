import React from 'react';
import Title from './components/Title';
import MenuHamburger from './components/MenuHamburger';
import TabContainer from './components/TabContainer/TabContainer';

import './App.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
    <Header/>
      <Title text="Sign In">
      </Title>
    <TabContainer/>
    </>
  );
}

export default App;
