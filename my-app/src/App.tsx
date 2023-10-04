import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import SuccessfulLoginPage from "./components/SuccessfulLoginPage/SuccessfulLoginPage";
import SignPage from "./components/SignForm/SignPage/SignPage";
import BlogPage from "./components/Posts/BlogPage/BlogPage";
import PostViewPage from "./components/Posts/PostViewPage/PostViewPage";
import SignUpPage from "./components/SignForm/SignUpPage/SignUpPage";
import MainLayout from "./components/MainLayout/MainLayout";
import SearchPage from "./components/SearchPage/SearchPage";
import Home from "./components/Home/Home";
import ActivateUser from "./components/ActivateUser/ActivateUser";
import { decodeJwt, expToMinutes, updateAccessToken } from "./helpers/helpers";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import MyPosts from "./components/MyPosts/MyPosts";
import AddPost from "./components/AddPost/AddPost";

export let timeUntilExpiration: number;
export let remainingMinutes: number;
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const userInfo: string | null = localStorage.getItem("userInfo");
  const tokenStr: string | null = localStorage.getItem("token");
  if (tokenStr) {
    const token = JSON.parse(tokenStr);
    const decodedToken = decodeJwt(token.access);
    remainingMinutes = expToMinutes(decodedToken.payload.exp);
    console.log(remainingMinutes);

  }
  
  const startTokenRefreshTimer = () => {
    const tokenStr: string | null = localStorage.getItem("token");
    if(tokenStr) {
      const token = JSON.parse(tokenStr);
      const expirationTimestamp = decodeJwt(token.access).payload.exp
      console.log("истечение срока действия "+ expirationTimestamp)
      const currentTime = Date.now();
      console.log("текущее время " + currentTime)
      timeUntilExpiration = expirationTimestamp *1000 - currentTime;
      console.log("время до истечения срока действия " + (timeUntilExpiration-60000))
    
      // setInterval(updateAccessToken, timeUntilExpiration - 60000);
    }
  }

  useEffect(()=> startTokenRefreshTimer(),[]);

  useEffect(() => { 
    window.addEventListener('storage', (e) => {
      console.log(e);
      if (e.key === "token" && e.newValue === null) { 
        navigate('/signin');
      }
    });
  }, []);

  return (
    <>
      <Routes>
        {!(userInfo && JSON.parse(userInfo).username) && (
          <>
            <Route
              path="/activate/:uid/:token"
              element={
                <MainLayout>
                  <ActivateUser />
                </MainLayout>
              }
            />
            <Route
              path="/signup"
              element={
                <MainLayout>
                  <SignUpPage />
                </MainLayout>
              }
            />
            <Route
              path="/signin"
              element={
                <MainLayout>
                  <SignPage />
                </MainLayout>
              }
            />
            <Route
              path="/success"
              element={
                <MainLayout>
                  <SuccessfulLoginPage />
                </MainLayout>
              }
            />
            <Route
              path="/home"
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            />
          </>
        )}
        <Route path="/myposts" element={<MainLayout>
              <MyPosts/>
            </MainLayout>
            }/>
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/posts"
          element={
            <MainLayout>
              <BlogPage />
            </MainLayout>
          }
        />
        <Route path="/addpost" element={<MainLayout>
              <AddPost/>
            </MainLayout>}/>

        <Route
          path="/post/:id"
          element={
            <MainLayout>
              <PostViewPage />
            </MainLayout>
          }
        />
        <Route path="*" element={<Navigate to="/posts" />} />
      </Routes>
      {/* {location.pathname === "/" && <Navigate to="/posts"/>} */}
    </>
  );
};

export default App;
