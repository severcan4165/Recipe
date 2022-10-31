import React from 'react'
import cook from "../../assets/cooking.png";
import Nav, { StyledImg, StyledLink } from './Style'

// import home from "../../assets/home.svg";
// import coding from "../../assets/coding.svg";
// import defa from "../../assets/default-image.jpg";
// import diet from "../../assets/diet.svg";
// import mail from "../../assets/mail.svg";
// import meal from "../../assets/meal.svg";
// import meal2 from "../../assets/meal2.svg";

const Navbar = () => {
  return (
    <Nav>
        <div>
          <StyledImg src={cook} alt="cook" />
        </div>
        <div> 
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/login">Log Out</StyledLink>
        </div>
   
    </Nav>
  )
}

export default Navbar