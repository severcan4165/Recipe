import React from 'react'
import { Navigate } from 'react-router-dom';

const Logout = ({isLogin, setIsLogin}) => {
  
    setIsLogin(false);
    

  return (
    <><Navigate to="/login"/></>
  )
}

export default Logout