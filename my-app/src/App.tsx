import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
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
import MainLayout from './components/MainLayout/MainLayout';
import SearchPage from './components/SearchPage/SearchPage';
import Home from './components/Home/Home';

const App = () => {
  return (
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/signup' element={<SignUpPage/>}/>
  <Route path='/signin' element={<SignPage/>}/>
  <Route path='/search' element={<SearchPage/>}/>
  <Route path='/posts' element={<MainLayout children={<BlogPage/>}/>}/>
  <Route path='/success' element={<MainLayout children={<SuccessfulLoginPage/>}/>}/>
  <Route path='/post/:id' element={<MainLayout children={<PostViewPage/>}/>}/>
 </Routes>
    // <Home/>
    // <Header/>
    //  <MainLayout></MainLayout>
      // <SearchPage/>
  //  <SignPage/>

  );
}

export default App;
