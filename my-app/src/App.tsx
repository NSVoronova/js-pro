import React from 'react';
import Title from './components/Title';
import MenuHamburger from './components/MenuHamburger';
import TabContainer from './components/TabContainer/TabContainer';
import './App.css';
import PostsList from './components/Posts/PostsList';
import Header from './components/Header/Header';
import SignForm from './components/SignForm/SignForm';
import SuccessfulLoginPage from './components/SuccessfulLoginPage/SuccessfulLoginPage';
import SignPage from './components/SignForm/SignPage/SignPage';
import BlogPage from './components/Posts/BlogPage/BlogPage';
import PostViewPage from './components/Posts/PostViewPage/PostViewPage';
import SignUpPage from './components/SignForm/SignUpPage/SignUpPage';

const App = () => {
  return (
    <div className='wrapper'>
    <Header/>
      <main>
        {/* <SignUpPage/> */}
        {/* <SignPage/> */}
        {/* <SuccessfulLoginPage/> */}
        <BlogPage/>
        {/* <PostViewPage/> */}
      </main>
      <footer>
      <span>2022</span>
      <span>All rights reserved</span>
      </footer>
    </div>

  );
}

export default App;
