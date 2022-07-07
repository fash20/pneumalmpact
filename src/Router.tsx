import { Routes, BrowserRouter, Route } from "react-router-dom";
import AdditionalInfo from "./components/authentication/AdditionalInfo";
import AuthContainer from "./components/authentication/AuthContainer";
import Login from "./components/authentication/Login";
import PasswordReset from "./components/authentication/PasswordReset";
import PersonalInfo from "./components/authentication/PersonalInfo";
import Registration from "./components/authentication/Registration";
import Verification from "./components/authentication/Verification";
import Home from "./components/home/Home";
import Audit from "./components/user/Audit";
import Collection from "./components/user/Collection";
import Course from "./components/user/Course";
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
        <Route
          path="/settings"
          element={
            <Settings />
          }
        />
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
              <Registration/>
            </AuthContainer>
          }
        />
        <Route
          path="/verification"
          element={
            <AuthContainer>
              <Verification/>
            </AuthContainer>
          }
        />
        <Route
          path="/additionalinfo"
          element={
            <AuthContainer>
              <AdditionalInfo/>
            </AuthContainer>
          }
        />
        <Route
          path="/personalinfo"
          element={
            <AuthContainer>
              <PersonalInfo/>
            </AuthContainer>
          }
        />
        <Route
          path="/user/dashboard"
          element={
            <Dashboard />
          }
        />
        <Route
          path="/course"
          element={
            <Course />
          }
        />
        <Route
          path="/library"
          element={
            <Collection />
          }
        />
        <Route
          path="/Audit"
          element={
            <Audit />
          }
        />
      </Routes>
  );
};


