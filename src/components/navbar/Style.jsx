import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
 width:100vw;
 height:12vh;
 background: rgb(195,142,34);
background: linear-gradient(0deg, rgba(195,142,34,1) 0%, rgba(255,190,23,0.6615021008403361) 100%);
align-items:center;
display:flex;
justify-content:flex-end;

  
`;

export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 2rem;
color: white;
margin:0 1rem;
&:hover{
    color:black;
}
`;

export default Nav;
