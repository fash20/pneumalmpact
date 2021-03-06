import React, { ReactNode } from "react";
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

interface Prop{
  children: ReactNode
}

const AuthContainer:React.FC<Prop> = (props) => {
  const [screenSize, isScreenSmall] = useScreenSize();
  return (
    <div className={`grid bg-grdnt ${isScreenSmall? 'grid-cols-1' :'grid-cols-2'} align-middle pt-20`}>
      {
        !isScreenSmall &&
        <div className="flex justify-center px-1.5 side-img ">
          <img src={sideImage} alt="side" />
        </div>
      }
      <div className="">
        {
          props.children
        }
      </div>
    </div>
  );
};

export default AuthContainer;
