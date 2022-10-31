import styled from 'styled-components';
import ff from "../../assets/ed.jpg"

const Card = styled.div`
  

height:88vh;
background-image:url(${ff}) ;
background-repeat: no-repeat;

background-size: cover;
  padding:2rem;
  display:flex;
 
  justify-content:center;
  align-items:center;
  flex-direction:row;

  
`;
export const Card1 = styled.div`
padding:4rem;
background: rgb(175,168,168);
background: radial-gradient(circle, rgba(30,30,30,0.7) 0%, rgba(20,20,20,0.7) 100%);

width:450px;
height:420px;
font-size:1.3rem;
line-height:1.2;
`;

export const Card2 = styled.div`
padding:4rem;
background: rgb(175,168,168);
background: radial-gradient(circle, rgba(30,30,30,0.7) 0%, rgba(20,20,20,0.7) 100%);

width:450px;
height:420px;
font-size:1.3rem;
line-height:1.2;

   
`;
export const Card3 = styled.div`
display:flex;
 border-radius:1rem;
height:auto;
 overflow:hidden;
justify-content:center;
align-items:center;
flex-direction:row;
`;

export const Image = styled.img`
width:300px;
height:300px;
object-fit: cover;
border-radius:0.3rem

   
`;

export const listStyle = styled.li`
list-style-type:none;
`;


export default Card;
