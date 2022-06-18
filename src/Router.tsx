import { Routes, BrowserRouter, Route } from "react-router-dom";
import AdditionalInfo from "./components/authentication/AdditionalInfo";
import AuthContainer from "./components/authentication/AuthContainer";
import Login from "./components/authentication/Login";
import PasswordReset from "./components/authentication/PasswordReset";
import PersonalInfo from "./components/authentication/PersonalInfo";
import Registration from "./components/authentication/Registration";
import Verification from "./components/authentication/Verification";
import Home from "./components/home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
};
