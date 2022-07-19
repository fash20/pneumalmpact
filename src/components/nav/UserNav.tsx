import { Link } from "evergreen-ui";
import React from "react";
// import { Link } from "react-router-dom";
import squarelogo from "../assets/images/square-logo.svg";
import "../styles/General.css";
import NotificationIcon from "../svgicons/Notification";
import { useScreenSize } from "../utils/useScreenSize";
import avatar from '../assets/images/avatar.svg'
import { Avatar, InputAdornment, TextField, Button, IconButton } from "@material-ui/core";
import SearchIcon from "../svgicons/SearchIcon";


const UserNav = () => {
  const [screenSize, isScreenSmall] = useScreenSize();
  return (
    <div
      className={`h-20 top-0 blur-1 flex sm:space-x-10  lg:gap-20 w-[100%] navbar-bg items-center ${
        isScreenSmall ? "grid-cols-2" : "grid-cols-3"
      }`}
    >
      <a href="/">
          <img className="w- h-20" src={squarelogo} alt="logo" />
      </a>
      {!isScreenSmall && (
        <div className="">
         <TextField variant="outlined" placeholder="Search Files" className=" md:w-[250px] lg:w-[500px]"  InputProps={{
            startAdornment: <InputAdornment position="start" > <SearchIcon /> </InputAdornment>,
          }} />
        </div>
      )}
      <div
        className="relative ml-auto px-5 flex gap-4 justify-center items-center"
      >
        <IconButton > <NotificationIcon /></IconButton>
        
        <div className="flex flex-row gap-3">
          <div className="">
            {/* <img src={avatar} /> */}
          <Avatar src={avatar} />
          </div>
          <div className="flex flex-col justify-start">
            <h3 className="font-inter text-primaryTextColor font-bold">Avatar</h3>
            <h4  className="font-inter text-primaryTextColor text-sm font-[100] ">avatar@pneummpact.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
