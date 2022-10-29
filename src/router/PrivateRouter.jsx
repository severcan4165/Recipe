import React from 'react'

import { Navigate} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';


const PrivateRouter = ({isLogin,page}) => {
  console.log("Private:",isLogin);

    
  return (
    <>
      
        {(isLogin) ?
         (<> <Navbar /> {page} </>) : 
         <Navigate to="/login"/>}

    </>
 
  )
}

export default PrivateRouter