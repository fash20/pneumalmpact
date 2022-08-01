import { Button, Drawer, IconButton } from "@mui/material";
import { Dehaze } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/pneumaImpact-logo.svg";
import "../styles/General.css";
import { BrandButtonStyle } from "../utils/UIThemes";
import { useScreenSize } from "../utils/useScreenSize";

const Navbar = () => {
  const [screenSize, isScreenSmall] = useScreenSize();
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className="navbar navbar-bg">
      <div
        className={`h-16 grid justify-center  items-center ${
          isScreenSmall ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        <a href="/">
          <div className="flex justify-center items-center gap-4 space-x-4 ">
            <img className="w-10 h-10" src={logo} alt="logo" />
            <label className=" font-zcool text-2xl">Pneumalmpact</label>
          </div>
        </a>
        {isScreenSmall && (
          <div className=" text-right pr-10">
            <IconButton onClick={() => setShowDrawer(!showDrawer)}>
              <Dehaze />
            </IconButton>
          </div>
        )}
        {!isScreenSmall && (
          <div className="flex items-center  justify-around p-5 ">
            <Link to="/explore" className="nav-link">
              Explore
            </Link>
            <Link to="/blogs" className="nav-link">
              Blog
            </Link>
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </div>
        )}
        {!isScreenSmall && (
          <div className="flex justify-center gap-4 space-x-4 w-full">
            <Button
              style={BrandButtonStyle}
              className=" shadow-md sm:w-fit lg:w-[120px]"
              href="/login"

            >
              Log In
            </Button>
            <Button
              variant="pneumaBlue"
              style={BrandButtonStyle}
              className="shadow-md bg-white  sm:w-fit lg:w-[120px]"
              href="/signup"
            >
              Sign Up
            </Button>
          </div>
        )}
      </div>
      {
        showDrawer && isScreenSmall &&( 
           < TopDrawer />
           
           )
      }
    </div>
  );
};

export default Navbar;

const TopDrawer = () => {
  return (
  <div className= " bg-white p-5 flex flex-col items-center space-y-4  w-full">
    <span>Explore </span>
    <span>Explore </span>
    <span>Explore </span>
    <div className="flex flex-col text-center  space-y-4 w-full">
            <Button
              color="secondary"
              variant="contained"
              style={BrandButtonStyle}
              className=" max-w-[200px]"
              href="/login"
            >
              Log In
            </Button>
            <Button
              color="primary"
              variant="contained"
              style={BrandButtonStyle}
              className=" max-w-[200px]"
              href="/signup"
            >
              Sign Up
            </Button>
          </div>
  </div>
  );
};
