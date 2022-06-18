import { Button, Heading, TextInputField } from "evergreen-ui";
import React, { useState } from "react";
import googleIcon from '../assets/images/icon-google.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import logo from '../assets/images/pneumaImpact-logo.svg';
import { Link } from "react-router-dom";
import { useScreenSize } from "../utils/useScreenSize";

const Login = () => {

  const [userCred, setUserCred] = useState({
    email:"",
    password:""
  });

  const [screenSize, isScreenSmall] = useScreenSize();

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

  
  return (
  
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img src={logo} className="object-contain h-20 w-20 " alt='Pneumalmpact' />
      </div>
      <div className='flex justify-around '>
        <Button className='gap-x-1' appearance="loginIconButton">
            <img src= {googleIcon} alt="googleIcon" className={`${!isScreenSmall? '': `drop-shadow-xl` }`} />
            { !isScreenSmall && ` Login with Google` }
        </Button>
        <Button className=" gap-x-1 "  appearance="loginIconButton">
            <img src={facebookIcon} alt="facebookIcon" />
            { !isScreenSmall && ` Login with Facebook` }
        </Button>
      </div>
      <div className="text-center">
        <Heading size={800} >OR</Heading>
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
          <Button appearance="primary"  onClick={() => alert(JSON.stringify(userCred))}>Login</Button>
        </div>
        <div className="flex flex-row justify-between">
          <Link to="/signup">Create an Account</Link>
          <Heading>Forget Password?</Heading>
        </div>
      </div>
    </div>
  );
};

export default Login;
