import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/pneumaImpact-logo.svg";
import "../styles/General.css";
import { BrandButtonStyle } from "../utils/UIThemes";
import { useScreenSize } from "../utils/useScreenSize";

const Navbar = () => {
  const [screenSize, isScreenSmall] = useScreenSize();
  return (
    <div
      className={`navbar h-16 grid justify-center navbar-bg items-center ${
        isScreenSmall ? "grid-cols-2" : "grid-cols-3"
      }`}
    >
      <a href="/">
        <div className="flex justify-center items-center gap-4 ">
          <img className="w-10 h-10" src={logo} alt="logo" />
          <label className=" font-zcool text-2xl">Pneumalmpact</label>
        </div>
      </a>
      {!isScreenSmall && (
        <div className="flex items-center  justify-around ">
          <Link to='/explore' className="nav-link">Explore</Link>
          <Link to='/blogs' className="nav-link">Blog</Link>
          <Link to='/about' className="nav-link">About us</Link>
        </div>
      )}
      <div className="flex justify-center gap-4 w-full">
        <Button color="secondary" variant="contained" style={BrandButtonStyle}  className="sm:w-fit lg:w-[120px]"  href="/login">Log In</Button>
        <Button color='primary' variant="contained" style={BrandButtonStyle}  className="sm:w-fit lg:w-[120px]" href="/signup">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;

