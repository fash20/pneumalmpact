import { Button, Heading, TextInputField } from 'evergreen-ui'
import React, { useState } from 'react'
import logo from '../assets/images/pneumaImpact-logo.svg';

const PasswordReset = () => {

  const [email, setEmail] = useState("");
  
  return (
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
    <div className="flex justify-center">
      <img src={logo} className="object-contain h-20 w-20 " alt='Pneumalmpact' />
    </div>
    <div className="text-center">
      <Heading size={800} >Forgot Password</Heading>
      <Heading> </Heading>
    </div>
    <div className="grid grid-cols-1 gap-y-10">
      <div className="grid grid-cols-1 gap-x-4">
        <TextInputField
          inputHeight={50}
          label="Email"
          placeholder={"Email"}
          onChange={(event: React.ChangeEvent<HTMLInputElement>)=> setEmail(event.target.value)}
        />
        <Button appearance="primary" onClick={()=>alert(email)}>Done</Button>
      </div>
      <div className="flex flex-row justify-between">
        <Heading>Create an Account</Heading>
        <Heading>Forget Password?</Heading>
      </div>
    </div>
  </div>
  )
}

export default PasswordReset