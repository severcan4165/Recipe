import React from 'react'
import { useState } from 'react';
import {Navigate, useNavigate } from 'react-router-dom';
import AppRouter from '../../router/AppRouter';



import PrivateRouter from '../../router/PrivateRouter';


const Login = ({setIsLogin}) => {
  
  
const [user, setUser] = useState({name:"",
password:""})
  const navigate = useNavigate();



const handleChange = (e) => {
  setUser({...user, [e.target.id]:e.target.value})


}
const handleLog = (e) => {
  e.preventDefault();
  if(user.name==="a" && user.password==="b"){
    setIsLogin(true)
    navigate("/");
  }
 
};
 
 

  return (
    <div>
      <h1>Login Page</h1>
      <input onChange={handleChange} type="text"  id="name"/>
      <input onChange={handleChange} type="password" id="password" />
      <button onClick={handleLog}>Sign In</button>
    </div>
  )
}

export default Login