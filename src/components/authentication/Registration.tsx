import { Button, Heading, TextInputField } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import googleIcon from "../assets/images/icon-google.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useScreenSize } from "../utils/useScreenSize";
import { useDispatch } from "react-redux";
import { clearMessage } from "../utils/message";
import { AppDispatch } from "../utils/store";
import { register } from "../utils/authSlice";

const Registration = () => {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [loading, setLoading] = useState(Boolean);
  const [screenSize, isScreenSmall] = useScreenSize();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMessage());

  },[dispatch]);

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
    setLoading(true);
    dispatch(register(userCred))
      .unwrap()
      .then((data) => {
        navigate("/login")
      })
      .catch((e) => {
        setLoading(false);
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
      <div className="flex justify-around ">
        <Button className="gap-x-1" appearance="loginIconButton">
          <img
            src={googleIcon}
            alt="googleIcon"
            className={`${!isScreenSmall ? "" : `drop-shadow-xl`}`}
          />
          {!isScreenSmall && ` Login with Google`}
        </Button>
        <Button className=" gap-x-1 " appearance="loginIconButton">
          <img src={facebookIcon} alt="facebookIcon" />
          {!isScreenSmall && ` Login with Facebook`}
        </Button>
      </div>
      <div className="text-center">
        <Heading size={800}>OR</Heading>
      </div>
      <div className="grid grid-cols-1 gap-y-4">
        <div className="grid grid-cols-1 gap-x-4">
          <TextInputField
            inputHeight={50}
            label="Email"
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
          <TextInputField
            inputHeight={50}
            label="Confrim Password"
            placeholder="*****"
            type="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onchange(event, "password1")
            }
          />
          <Button
            appearance="primary"
            onClick={() => {
              if (password === password1 && password!=="") {
                setUserCred({ ...userCred, password });
                handleRegistration();
              }
            }}
          >
            Next
          </Button>
        </div>
        <div className="flex flex-row justify-between">
          <Link to="/login">Have an account? Login</Link>
          <Heading>Forget Password?</Heading>
        </div>
      </div>
    </div>
  );
};

export default Registration;
