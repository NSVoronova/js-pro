import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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

const App = () => {
  const location = useLocation();
  const tokenStr: string | null = localStorage.getItem("token");
  let token;
  if (tokenStr) {
    token = JSON.parse(tokenStr).access;
  }

  return (
    <>
      <Routes>
        {!token && (
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
          </>
        )}

        <Route
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/posts"
          element={
            <MainLayout>
              <BlogPage />
            </MainLayout>
          }
        />

        <Route
          path="/post/:id"
          element={
            <MainLayout>
              <PostViewPage />
            </MainLayout>
          }
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      {/* {location.pathname === "/" && <Navigate to="/posts"/>} */}
    </>
  );
};

export default App;
