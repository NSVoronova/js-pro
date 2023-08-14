import React from 'react';
import Title from './components/Title';
import MenuHamburger from './components/MenuHamburger';
import TabContainer from './components/TabContainer/TabContainer';
import './App.css';
import PostsList from './components/Posts/PostsList';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
    <Header/>
      <Title text="Sign In">
      </Title>
    <TabContainer/>
       <PostsList/>
    </>

  );
}

export default App;
