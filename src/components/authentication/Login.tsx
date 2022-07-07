import { Alert, Heading, TextInputField } from "evergreen-ui";
import React, { useState, useEffect } from "react";
import googleIcon from "../assets/images/icon-google.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { Link } from "react-router-dom";
import { useScreenSize } from "../utils/useScreenSize";
import { login } from "../utils/authSlice";
import { clearMessage } from "../utils/message";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../utils/store";
import toast, { Toaster } from "react-hot-toast";
import { Button, IconButton } from "@material-ui/core";
import { BrandButtonStyle } from "../utils/UIThemes";

const Login = () => {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector(
    (state: { auth: { isLoggedIn: boolean } }) => state.auth
  );
  const { message } = useSelector(
    (state: { message: { message: string } }) => state.message
  );
  const [screenSize, isScreenSmall] = useScreenSize();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const notifySuccess = () => toast.success(message);
  const notifyFailure = () => toast.error(message);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch, message]);

  const initialValues = {
    username: "",
    password: "",
  };
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
    setLoading(true);

    dispatch(login(userCred))
      .unwrap()
      .then((data) => {
        navigate("/");
        notifySuccess();
      })
      .catch((e) => {
        setLoading(false);
        notifyFailure();
      });
  };

  return (
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      {<Toaster />}
      {isScreenSmall && <div className="flex justify-around ">
        
        <IconButton className="gap-x-1" >
          <img
            src={googleIcon}
            alt="googleIcon"
            className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
          />
        </IconButton>
        <IconButton className=" gap-x-1 " >
          <img src={facebookIcon} alt="facebookIcon" />
        </IconButton>
      </div>}
      {!isScreenSmall && <div className="flex justify-around ">
        
        <Button className="gap-x-1" >
          <img
            src={googleIcon}
            alt="googleIcon"
            className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
          />
           Login with Google
        </Button>
        <Button className=" gap-x-1 " >
          <img src={facebookIcon} alt="facebookIcon" />
          Login with Facebook
        </Button>
      </div>}
      <div className="text-center">
        <Heading size={800}>OR</Heading>
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className="grid grid-cols-1 gap-x-4">
          <TextInputField
            inputHeight={50}
            label="Email"
            className="font-"
            placeholder={"Email"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "email")
            }
          />
          <TextInputField
            inputHeight={50}
            label="Password"
            placeholder="*****"
            type="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "password")
            }
          />
          <Button
            color="primary"
            variant="contained"
            // onClick={() => alert(JSON.stringify(userCred))}
            style={BrandButtonStyle} 
            onClick={() => handleLogin()}
          >
            Login
          </Button>
        </div>
        <div className="flex flex-row justify-between">
          <Link to="/signup">Create an Account</Link>
          <Link to="/forgotpassword">Forget Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
