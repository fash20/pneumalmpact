import { Button, Heading, TextInputField } from 'evergreen-ui'
import React, { useState } from 'react'
import googleIcon from '../assets/images/icon-google.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import logo from '../assets/images/pneumaImpact-logo.svg';
import { Link } from 'react-router-dom';
import { useScreenSize } from '../utils/useScreenSize';

const Registration = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    email: "",
    cardNumber: 0,
    expirationMonth: 0,
    expirationYear: 0,
    cvc: 0,
  });

  const [screenSize, isScreenSmall] = useScreenSize();

  return (
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img src={logo} className="object-contain h-20 w-20 " alt='Pneumalmpact' />
      </div>
      <div className='flex justify-around '>
        <Button className='gap-x-1' appearance="loginIconButton">
            <img src= {googleIcon} alt="googleIcon" className={`${!isScreenSmall? '': `drop-shadow-xl` }`} />
            { !isScreenSmall && ` Login with Google` }
        </Button>
        <Button className=" gap-x-1 "  appearance="loginIconButton">
            <img src={facebookIcon} alt="facebookIcon" />
            { !isScreenSmall && ` Login with Facebook` }
        </Button>
      </div>
      <div className="text-center">
        <Heading size={800} >OR</Heading>
      </div>
      <div className="grid grid-cols-1 gap-y-4">
        <div className="grid grid-cols-1 gap-x-4">
          <TextInputField
            inputHeight={50}
            label="Email"
            placeholder={"Email"}
          />
          <TextInputField
            inputHeight={50}
            label="Password"
            placeholder="*****"
            type="password"
          />
          <TextInputField
            inputHeight={50}
            label="Confrim Password"
            placeholder="*****"
            type="password"
          />
          <Button appearance="primary">Next</Button>
        </div>
        <div className="flex flex-row justify-between">
          <Link to='/login'>Have an account? Login</Link>
          <Heading>Forget Password?</Heading>
        </div>
      </div>
    </div>
  )
}

export default Registration