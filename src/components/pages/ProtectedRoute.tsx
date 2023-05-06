import axios from 'axios';
import React, { ReactNode, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth/AuthProvider';


interface RenderComponent {
  children?: ReactNode;
}


const ProtectedRoute = ({children}:RenderComponent) => {
  const navigate = useNavigate();
  const { user : {token} } = useAuth();

  useEffect(()=>{

    if (token == null || token == undefined){
      navigate('/login')
    }
    // else if (userData && userData.user !== null && userData.isVerified === false){
    //     navigate("/verification");
    // }
  },[])
  return (
    <div className='justify-center items-center'>
      {
        children
      }
    </div>
  )
}

export default ProtectedRoute