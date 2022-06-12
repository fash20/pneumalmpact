import { Button, Heading, TextInputField } from "evergreen-ui";
import React from "react";
import logo from "../assets/images/pneumaImpact-logo.svg";
import '../styles/General.css'

const Verification = () => {
  return (
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      <div className=" grid text-center gap-y-5">
        <Heading size={800}>Authenticaion</Heading>
        <Heading size={400}> Copy and paste the code sent to k****@****.com </Heading>
      </div>
      <div className="grid grid-cols-1 gap-y-5">
        <div className="grid justify-center grid-cols-4 gap-x-1">
          <TextInputField
            placeholder={"-"}
            className='vrf'
            style={{height:50, width:50, borderRadius:'50%', textAlign:'center'}}
          />
          <TextInputField
            placeholder={"-"}
            style={{height:50, width:50, borderRadius:'50%', textAlign:'center'}}
          />
          <TextInputField
            placeholder={"-"}
            style={{height:50, width:50, borderRadius:'50%', textAlign:'center'}}
          />
          <TextInputField
            placeholder={"-"}
            style={{height:50, width:50, borderRadius:'50%', textAlign:'center'}}
          />
        </div>
          <Button appearance="primary">Done</Button>
        <div className="flex flex-row justify-between">
          <Heading>Create an Account</Heading>
          <Heading>Forget Password?</Heading>
        </div>
      </div>
    </div>
  );
};

export default Verification;
