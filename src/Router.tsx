import { Routes, BrowserRouter, Route } from "react-router-dom";
import AuthContainer from "./components/authentication/AuthContainer";
import Login from "./components/authentication/Login";
import PasswordReset from "./components/authentication/PasswordReset";
import PersonalInfo from "./components/authentication/PersonalInfo";
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
      </Routes>
    </BrowserRouter>
  );
};
