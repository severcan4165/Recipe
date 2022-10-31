import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Nav = styled.nav`
padding: 0 1rem;
 width:100vw;
 height:12vh;
 background: rgb(158,83,126);
background: radial-gradient(circle, rgba(158,83,126,1) 0%, rgba(127,38,82,1) 100%);
align-items:center;
display:flex;
justify-content:space-between;

  
`;
export const StyledImg = styled.img`
width:15vh;
height:11vh;
border-radius:0.5rem;
`;


export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 2rem;
color: white;
margin:0 2rem;
&:hover{
    color:black;
}
`;

export default Nav;
