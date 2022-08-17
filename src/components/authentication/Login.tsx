import { Heading, TextInputField } from "evergreen-ui";
import React, { useState, useEffect } from "react";
import googleIcon from "../assets/images/icon-google.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useScreenSize } from "../utils/useScreenSize";
import { Button, IconButton, TextField } from "@mui/material";
import { BrandButtonStyle } from "../utils/UIThemes";
import { validateEmail } from "../utils/validator";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/userAction";
import { AppDispatch } from "../store/store";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const selector = useSelector((state: { user: any }) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [screenSize, isScreenSmall] = useScreenSize();
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Pneumalmpact - Login";
     if(selector.userData !== null){
       navigate('/explore')
     } 

  }, []);

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "email":
        setUserCred({ ...userCred, email: event.target.value });
        break;
      case "password":
        setUserCred({
          ...userCred,
          password: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  const handleLogin = () => {
    const validationResult = validateEmail(userCred.email);
    if (validationResult !== null) return;
    else {
      dispatch(loginUser(userCred));
    }
  };

  return (
    <div className="grid grid-cols-1 mx-5 mb:mx-5 md:mx-10 my-10 gap-y-14">
      <Toaster
        toastOptions={{
          className: "toaster",
        }}
      />
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      {<Toaster />}
      {isScreenSmall && (
        <div className="flex justify-around ">
          <IconButton className="gap-x-1">
            <img
              src={googleIcon}
              alt="googleIcon"
              className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
            />
          </IconButton>
          <IconButton className="flex gap-x-1 ">
            <img
              src={facebookIcon}
              alt="facebookIcon"
              className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
            />
          </IconButton>
        </div>
      )}
      {!isScreenSmall && (
        <div className="flex justify-around ">
          <Button className="gap-x-1" variant="outlined">
            <img
              src={googleIcon}
              alt="googleIcon"
              className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
            />
            Login with Google
          </Button>
          <Button className=" gap-x-1 " variant="outlined">
            <img src={facebookIcon} alt="facebookIcon" />
            Login with Facebook
          </Button>
        </div>
      )}
      <div className="text-center">
        <Heading size={800}>OR</Heading>
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
          <TextField
            label="Email"
            className=""
            placeholder={"Email"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "email")
            }
          />
          <TextField
            label="Password"
            placeholder="*****"
            type="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "password")
            }
          />
          <Button
            variant="pneumaBlue"
            onClick={() => handleLogin()}
            style={BrandButtonStyle}
          >
            Login
          </Button>
        </div>
        <div className="flex justify-between text-left">
          <Link
            to="/signup"
            className="font-inter text-[13px] md:text-[15px] text-primaryTextColor hover:underline"
          >
            Create an Account
          </Link>
          <Link
            to="/passwordreset"
            className="font-inter text-[13px] md:text-[15px]"
          >
            Forget Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
