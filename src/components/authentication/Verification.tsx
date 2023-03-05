import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import ReactCodeInput from "react-code-input";
import VerificationInput from "react-verification-input";
import logo from "../assets/images/pneumaImpact-logo.svg";
import "../styles/General.css";
import { PinInput } from "react-input-pin-code";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BrandButtonStyle } from "../utils/UIThemes";
import OtpInput from "react-otp-input";
import axios from "axios";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Verification = () => {
  const [values, setValues] = React.useState("");
  const navigate = useNavigate();
  const { userData, loading } = useSelector(
    (state: { user: any }) => state.user
  );

  const handleVefrifcation = () => {
    var data = JSON.stringify({
      token: values,
    });

    axios
      .post(
        "https://api.pneumaimpact.ng/v1/api/auth/verify-user-account",
        {
          token: values
        },
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        userData.isverified = true;
        let user = JSON.parse(localStorage.getItem('user'));
        if (user ){
          user.isVerified = true;
          localStorage.clear();
          localStorage.setItem('user',JSON.stringify(user));
          navigate('/explore')
        }
        console.log()
      })
      .catch(err=> {
        toast.error(err.response.data.message)
        console.log(err.response.data.message)
        alert(err.response.data.message)
      })
  };

  useEffect(() => {
    if (userData.user !== null && userData.isVerified === false) {
      toast.success("Verication code was sent to " + userData.user);
      axios
        .post(
          "https://api.pneumaimpact.ng/v1/api/auth/resend-verification-email",
          {},
          { headers: { Authorization: `Bearer ${userData.token}` } }
        )
        .then((res) => toast.success("verifcation code sent to your mail"))
        .catch((err) => toast.error("unable to send verifcation code "));
    } else {
      toast.error("Login or create an account");
      navigate("/login");
    }
  }, []);
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
        <h2 className="font-inter text-sm md:text-xl">
          Copy and paste the code sent to your mail
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-5">
        <div className="grid justify-center items-center grid-cols-1 gap-x-1 w-full">

          <OtpInput
            value={values}
            onChange={(values: any) => setValues(values)}
            numInputs={5}
            separator={<span> </span>}
            inputStyle="input-style"
            containerStyle="container"
            isInputNum={true}
            shouldAutoFocus={true}
          />

       
        </div>
        <Button
          variant="pneumaBlue"
          style={BrandButtonStyle}
          onClick={handleVefrifcation}
        >
          Done
        </Button>
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

export default Verification;