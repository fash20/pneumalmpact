import { Button, Heading, TextInputField } from "evergreen-ui";
import React from "react";
import googleIcon from '../assets/images/icon-google.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import logo from '../assets/images/pneumaImpact-logo.svg';

const Login = () => {
  return (
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img src={logo} className="object-contain h-20 w-20 " alt='Pneumalmpact' />
      </div>
      <div className='flex justify-around '>
        <Button className=" gap-x-1 " appearance="loginIconButton">
            <img src= {googleIcon} alt="googleIcon" />
            Login with Google
        </Button>
        <Button className=" gap-x-1 "  appearance="loginIconButton">
            <img src={facebookIcon} alt="facebookIcon" />
            Login with Google
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
            placeholder={"Email"}
          />
          <TextInputField
            inputHeight={50}
            label="Password"
            placeholder="*****"
            type="password"
          />
          <Button appearance="primary">Login</Button>
        </div>
        <div className="flex flex-row justify-between">
          <Heading>Create an Account</Heading>
          <Heading>Forget Password?</Heading>
        </div>
      </div>
    </div>
  );
};

export default Login;
