import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import logo from "../assets/images/pneumaImpact-logo.svg";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    document.title = "Pneumalmpact - Reset Password";
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
      <div className="text-center">
        <h2 className="font-inter text-gray2 text-lg md:text-2xl">
          Forgot Password
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-y-4">
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
          <TextField
            label="Email"
            placeholder={"Email"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <Button variant="pneumaBlue" onClick={() => alert("hello")}>
            Login
          </Button>
        </div>
        <span className="font-inter text-[13px] md:text-[15px] text-center">
          Have an Account? {" "}
          <Link to="/login" className="text-primaryTextColor hover:underline">
             Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default PasswordReset;
