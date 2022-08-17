import { Link } from "react-router-dom";
import React, { ReactNode, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import squarelogo from "../assets/images/square-logo.svg";
import "../styles/General.css";
import NotificationIcon from "../svgicons/Notification";
import { useScreenSize } from "../utils/useScreenSize";
import avatar from "../assets/images/avatar.svg";
import {
  Avatar,
  InputAdornment,
  TextField,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "../svgicons/SearchIcon";
import SideNav from "./SideNav";
import { useSelector } from "react-redux";

interface RenderComponent {
  children?: ReactNode;
}

const UserNav = ({ children }: RenderComponent) => {
  const [screenSize, isScreenSmall] = useScreenSize();
  const selector = useSelector((state: { user: any }) => state.user);
  const [user, setUser] = useState();

  useEffect(()=>{
    if (selector.userData !== '' && selector.userData !== null){
     setUser(selector.userData.user)
    }
    console.log(selector)
  }, [])
  return (
    <div className="flex ">
      {
        !isScreenSmall && <SideNav />
      }
      <div className="w-full">
        <div
          className={`h-20 top-0 blur-1 flex sm:space-x-10  lg:gap-20 w-[100%]  items-center justify-end ${
            isScreenSmall ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {/* <a href="/">
          <img className="w- h-20" src={squarelogo} alt="logo" />
        </a> */}
          {!isScreenSmall && (
            <div className="">
              <TextField
                variant="outlined"
                placeholder="Search Files"
                className=" md:w-[250px] lg:w-[500px]"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          )}
          <div className="relative ml-auto px-5 flex gap-4 justify-center items-center">
            <IconButton>
              <NotificationIcon />
            </IconButton>

            <div className="flex flex-row gap-3">
              <Link to='/user/dashboard'>
              <div className="">
                {/* <img src={avatar} /> */}
                <Avatar src={avatar} />
              </div>
              </Link>
              <Link to='/user/dashboard'>
              <div className="flex flex-col justify-start">
                <h3 className="font-inter text-primaryTextColor font-bold">
                  Avatar
                </h3>
                <h4 className="font-inter text-primaryTextColor text-sm font-[100] ">
                  {
                    user
                  }
                </h4>
              </div>
              </Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default UserNav;
