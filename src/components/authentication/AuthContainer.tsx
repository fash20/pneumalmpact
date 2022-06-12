import React from "react";
import sideImage from "../assets/images/auth-side-image.svg";
import Payment from "../payment/Payment";
// import Login from './Login'
import "../styles/General.css";
import { useScreenSize } from "../utils/useScreenSize";
// import PasswordReset from './PasswordReset'
// import AdditionalInfo from './AdditionalInfo'
// import PersonalInfo from './PersonalInfo'
// import Verification from './Verification'
// import Registration from './Registration'

const AuthContainer = () => {
  const [screenSize, isScreenSmall] = useScreenSize();
  return (
    <div className={`grid ${isScreenSmall? 'grid-cols-1' :'grid-cols-2'} align-middle `}>
      {
        !isScreenSmall &&
        <div className="flex justify-center py-20 px-1.5 side-img ">
          <img src={sideImage} alt="side" />
        </div>
      }
      <div className="py-20">
        {/* <Login/> */}
        {/* <Registration /> */}
        {/* <PersonalInfo /> */}
        {/* <AdditionalInfo /> */}
        <Payment />
        {/* <PasswordReset /> */}
        {/* <Verification /> */}
      </div>
    </div>
  );
};

export default AuthContainer;
