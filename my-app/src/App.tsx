import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
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
  <Route path='/' element={<MainLayout><Home/></MainLayout>}/>
  <Route path='/signup' element={<MainLayout><SignUpPage/></MainLayout>}/>
  <Route path='/signin' element={<MainLayout><SignPage/></MainLayout>}/>
  <Route path='/search' element={<SearchPage/>}/>
  <Route path='/posts' element={<MainLayout><BlogPage/></MainLayout>}/>
  <Route path='/success' element={<MainLayout><SuccessfulLoginPage/></MainLayout>}/>
  <Route path='/post/:id' element={<MainLayout><PostViewPage/></MainLayout>}/>
 </Routes>
  );
}

export default App;
