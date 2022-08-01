import Button from "@mui/material/Button";
import React from "react";
import ReactCodeInput from "react-code-input";
import VerificationInput from "react-verification-input";
import logo from "../assets/images/pneumaImpact-logo.svg";
import "../styles/General.css";
import { PinInput } from "react-input-pin-code";
import { Link } from "react-router-dom";

const Verification = () => {
  const [values, setValues] = React.useState(["", "", "", ""]);
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
      <h2 className="font-inter text-gray2 text-lg md:text-2xl">
          Authentication
        </h2>
        <h2 className="font-inter text-sm md:text-xl" >
        
          Copy and paste the code sent to k****@****.com{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-5">
        <div className="grid justify-center items-center grid-cols-1 gap-x-1 w-full">
          {/* <VerificationInput removeDefaultStyles length={4} classNames={{
            container:'container',
            character:"character"
          }} /> */}
          <PinInput
            values={values}
            size='lg'
            inputClassName="character "
            containerClassName="container"
            onChange={(value, index, values) => setValues(values)}
          />
        </div>
        <Button >Done</Button>
        <div className="flex justify-between text-left">
          <Link to="/signup" className="font-inter text-[13px] md:text-[15px] text-primaryTextColor hover:underline">Create an Account</Link>
          <Link to="/passwordreset" className="font-inter text-[13px] md:text-[15px]" >Forget Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Verification;
