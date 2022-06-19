import { Button, Link } from "evergreen-ui";
import React from "react";
// import { Link } from "react-router-dom";
import logo from "../assets/images/pneumaImpact-logo.svg";
import "../styles/General.css";
import { useScreenSize } from "../utils/useScreenSize";

const Navbar = () => {
  const [screenSize, isScreenSmall] = useScreenSize();
  return (
    <div
      className={`navbarh h-16 grid justify-center navbar-bg items-center ${
        isScreenSmall ? "grid-cols-2" : "grid-cols-3"
      }`}
    >
      <div className="flex justify-center items-center gap-4 ">
        <img className="w-10 h-10" src={logo} alt="logo" />
        <label className="logo-txt">Pneumalmpact</label>
      </div>
      {!isScreenSmall && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-evenly",
          }}
        >
          <Link className="nav-link">Home</Link>
          <Link className="nav-link">careers</Link>
          <Link className="nav-link">Blogs</Link>
          <Link className="nav-link">About us</Link>
        </div>
      )}
      <div
        className="flex gap-4"
        style={{ display: "flex", alignItems: "flex-end", textAlign: "center" }}
      >
       <Link href='/login'>  <Button appearance="loginButton1" >Login</Button> </Link>
        <Button appearance="loginButton2">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
