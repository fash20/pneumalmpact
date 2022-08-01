import { Routes, BrowserRouter, Route } from "react-router-dom";
import AdditionalInfo from "./components/authentication/AdditionalInfo";
import AuthContainer from "./components/authentication/AuthContainer";
import Login from "./components/authentication/Login";
import PasswordReset from "./components/authentication/PasswordReset";
import PersonalInfo from "./components/authentication/PersonalInfo";
import Registration from "./components/authentication/Registration";
import Verification from "./components/authentication/Verification";
import Home from "./components/home/Home";
import UserNav from "./components/nav/UserNav";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import PageNotFound from "./components/pages/PageNotFound";
import Audit from "./components/user/Audit";
import Collection from "./components/user/Collection";
import Course from "./components/user/Course";
import Explore from "./components/user/Explore";
import Dashboard from "./components/user/Library";
import Settings from "./components/user/Settings";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <AuthContainer>
            <Login />
          </AuthContainer>
        }
      />
      <Route path="/settings" element={<UserNav> <Settings /></UserNav> } />
      <Route
        path="/passwordreset"
        element={
          <AuthContainer>
            <PasswordReset />
          </AuthContainer>
        }
      />
      <Route
        path="/personalinfo"
        element={
          <AuthContainer>
            <PersonalInfo />
          </AuthContainer>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthContainer>
            <Registration />
          </AuthContainer>
        }
      />
      <Route
        path="/verification"
        element={
          <AuthContainer>
            <Verification />
          </AuthContainer>
        }
      />
      <Route
        path="/additionalinfo"
        element={
          <AuthContainer>
            <AdditionalInfo />
          </AuthContainer>
        }
      />
      <Route
        path="/personalinfo"
        element={
          <AuthContainer>
            <PersonalInfo />
          </AuthContainer>
        }
      />
      <Route
        path="/user/dashboard"
        element={
          <UserNav>
            <Dashboard />
          </UserNav>
        }
      />
      <Route
        path="/course"
        element={
          <UserNav>
            <Course />
          </UserNav>
        }
      />
      <Route
        path="/library"
        element={
          <UserNav>
            <Collection />
          </UserNav>
        }
      />
      <Route
        path="/audit"
        element={
          <UserNav>
            <Audit />
          </UserNav>
        }
      />
      <Route
        path="/explore"
        element={
          <UserNav>
            <Explore />
          </UserNav>
        }
      />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
