import React from 'react'
import { useState } from 'react';
import {Navigate, useNavigate } from 'react-router-dom';
import AppRouter from '../../router/AppRouter';



import PrivateRouter from '../../router/PrivateRouter';
import StyledDiv, { StyledButton, StyledForm, StyledInput } from './Style.styled';


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
    <StyledDiv>
      <StyledForm>
          <h1>Login Page</h1>
          <StyledInput onChange={handleChange} type="text"  id="name" placeholder='Username'/>
          <StyledInput onChange={handleChange} type="password" id="password"  placeholder='Password'/>
          <StyledButton onClick={handleLog}>Sign In</StyledButton>
      </StyledForm>
    
     
    </StyledDiv>
  )
}

export default Login