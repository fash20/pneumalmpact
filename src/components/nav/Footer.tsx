import React from "react";
import { MultiValueContainer } from "react-select/dist/declarations/src/components/MultiValue";
import logo from "../assets/images/pneumaImpact-logo-2.svg";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const openTab = (link:string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className="footer grid grid-cols-1 md:p-5  lg:p-20 space-y-20 text-white">
      <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col space-y-6 m-3">
          <div className="inline-flex space-x-2 items-center">
            <img className="h-[45px] w-[45px]" src={logo} alt="logo" />
            <h3 className="font-zcool text-[22px] text-white">Pnuemalmpact</h3>
          </div>
          <p className="font-dmSansr text-gray">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
          <div className="inline-flex flex-row space-x-2">
            <a href='https://www.google.com' target="_blank">
              <FacebookIcon />
            </a>
            <a href='https://www.google.com' target="_blank">
              <TwitterIcon />
            </a>
            <a href='https://www.google.com' target="_blank">
                <InstagramIcon />
            </a>
            <a href='https://www.google.com' target="_blank">
                <LinkedInIcon />
            </a>
            <a href='https://www.google.com' target="_blank">
                <YouTubeIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4  items-start  px-4  m-3">
          <h3 className="font-dmSans text-[bold]">Company</h3>
          <span className="font-dmSansr flex flex-col space-y-3 text-gray">
            <h4>About us</h4>
            <h4>Contact us</h4>
            <h4>Explore </h4>
          </span>
        </div>
        <div className="flex flex-col space-y-4 items-start px-4  m-3">
          <h3 className="font-dmSans text-[bold]">Support</h3>
          <span className="font-dmSansr flex flex-col space-y-3 text-gray">
            <h4>Getting Started</h4>
            <h4>Help Center</h4>
          </span>
        </div>
        <div className="flex flex-col space-y-4 items-start px-4  m-3">
          <h3 className="font-dmSans text-[bold]">Contact Us</h3>
          <span className="font-dmSansr flex flex-col space-y-3 text-gray">
            <span className="inline-flex space-x-2">
              <MailIcon /> <h4>About us</h4>{" "}
            </span>
            <span className="inline-flex space-x-2">
              <PhoneIcon /> <h4>+234 456 432 4324</h4>{" "}
            </span>
            <span className="inline-flex space-x-2">
              <LocationOnIcon />{" "}
              <h4>Hilltop towers foor 12 V.I Lagos Nigeria</h4>{" "}
            </span>
          </span>
        </div>
      </div>
      <div className="font-dmSansr flex justify-between text-gray">
        <span>{`Copyright © ${year}  BRIX Templates`}</span>
        <span>All Rights Reserved | Terms and Conditions | Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
