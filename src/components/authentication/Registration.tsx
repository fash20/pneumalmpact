import { Heading, TextInputField } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import googleIcon from "../assets/images/icon-google.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useScreenSize } from "../utils/useScreenSize";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { validateEmail } from "../utils/validator";
import toast, { Toaster } from "react-hot-toast";
import { registerUser } from "../store/userAction";
import { Button, Checkbox, FormControlLabel, IconButton, TextField} from "@mui/material";
import { BrandButtonStyle } from "../utils/UIThemes";



interface User{
  loading: boolean;
  userInfo: undefined;
  userToken: string;
  error: string;
  success: boolean;
};

const Registration = () => {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const {loading, userInfo, error, success } = useSelector (
    (state: {user: {loading:boolean,userInfo:{}, error: string, success:boolean }})=> state.user
  )
  // const [loading, setLoading] = useState();
  const [screenSize, isScreenSmall] = useScreenSize();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
      if (success ) navigate('/verify')

  },[navigate, userInfo, success]);

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "email":
        setUserCred({ ...userCred, email: event.target.value });
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "password1":
        setPassword1(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleRegistration = () => {
  //   const validationResult = validateEmail(userCred.email)
  //  if (validationResult !== null )
  //  return
  //  else
    dispatch(registerUser(userCred))
  };
  return (
    <div className="grid grid-cols-1 mx-5 mb:mx-5 md:mx-10 my-10 gap-y-14 ">
      {
        <Toaster toastOptions={{
          className:'toaster'
        }} />
  
      }
     
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      <div className="flex  ">
      {isScreenSmall && (
        <div className="flex justify-around w-full ">
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
              className={`${!isScreenSmall ? " w-[15px]" : `drop-shadow-xl`}`}
            />
          </IconButton>
        </div>
      )}
      {!isScreenSmall && (
        <div className="flex justify-around w-full ">
          <Button className="gap-x-1" variant='outlined'>
            <img
              src={googleIcon}
              alt="googleIcon"
              className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
            />
            Register with Google
          </Button>
          <Button className=" gap-x-1 " variant='outlined'>
            <img src={facebookIcon} alt="facebookIcon" />
            Register with Facebook
          </Button>
        </div>
      )}
      </div>
      <div className="text-center">
        <Heading size={800}>OR</Heading>
        
      </div>
      <div className="grid grid-cols-1 gap-y-4">
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 ">
          <TextField
            label="Email"
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
          <TextField
            label="Confrim Password"
            placeholder="*****"
            type="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "password1")
            }
          />
          <div className='flex justify-between items-center'>
            <div className="flex justify-center items-center">
            <Checkbox defaultChecked />
            <Link to="/termsandconditions" className="font-inter text-[13px] md:text-[15px] text-primaryTextColor hover:underline" >Accept All</Link>
            </div>
          <Link to="/passwordreset" className="font-inter text-[13px] md:text-[15px]" >Forget Password?</Link>
          </div>
          <Button
            variant = 'pneumaBlue'
            style={BrandButtonStyle}
            onClick={() => {
              if (password === '' || password1 === ''){
                toast.error("Password can't be empty string")
              }
             else if (password === password1 && password!=="") {
                setUserCred({ ...userCred, password });
                handleRegistration();
              }
              else{
                toast.error('Password Inconsistent')
              }
            }}
          >
            Next
          </Button>
        </div>
          <span className="font-inter text-[13px] md:text-[15px] text-center">Have an Account?   <Link to="/login" className="text-primaryTextColor hover:underline">Login</Link> </span>
      </div>
    </div>
  );
};

export default Registration;
