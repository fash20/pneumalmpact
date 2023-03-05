import axios from 'axios';
import React, { ReactNode, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


interface RenderComponent {
  children?: ReactNode;
}


const ProtectedRoute = ({children}:RenderComponent) => {
  const navigate = useNavigate();
  const { userData, loading } = useSelector(
    (state: { user: any }) => state.user
  );

  useEffect(()=>{

    if (userData == null || userData == undefined || !userData.user){
      navigate('/login')
    }
    else if (userData && userData.user !== null && userData.isVerified === false){
        navigate("/verification");
    }
  },[])
  return (
    <div className=' justify-center items-center'>
      {
        children
      }
    </div>
  )
}

export default ProtectedRoute