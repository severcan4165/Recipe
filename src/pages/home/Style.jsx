import styled from 'styled-components';
import me from "../../assets/47.jpg"



const Card = styled.div`
  padding:1rem !important;
  margin:2rem 1rem;
  width:336px;
  height:460px;
  background-color: #fff;
  border-radius:0.5rem;
  display:flex;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  font-family: 'Fuzzy Bubbles', cursive;
  align-items:center;
  flex-direction:column;
  justify-content:space-evenly;

 

  
`;
export const CardImage = styled.div`
width:300px;
height:300px;

   
`;

export const Image = styled.img`
width:300px;
height:300px;
object-fit: cover;
border-radius:0.3rem;

   
`;

export const FlexContainer = styled.div`
background: ${({flag})=> flag ? "radial-gradient(circle, rgba(30,30,30,0.7) 0%, rgba(20,20,20,0.7) 100%)" :""};
background: ${({flag})=> flag ? "rgb(175,168,168)" :""};
width:100vw;

height:auto;
display:flex;
gap: 2rem;
justify-content:center;
align-items:center;
flex-wrap:wrap;


`;


export const Button = styled.button`
padding: 0.5rem 1rem;
border:none;
border-radius:0.5rem;
background-color: #A5240a;
cursor:pointer;
margin-top: 1rem;
color:white;
font-size:1.1rem;
`;
export const StyledDiv = styled.div`
width: 100%;



background-image: ${({flag})=> flag ? "" :`url(${me})`}; 

background: ${({flag})=> flag ? "radial-gradient(circle, rgba(30,30,30,0.7) 0%, rgba(20,20,20,0.7) 100%)" :""};
background: ${({flag})=> flag ? "rgb(175,168,168)" :""};
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: ${({flag})=> flag ? "column" :"row"};
justify-content: center;
align-items: center;

`;

export const FlagDiv = styled.div`
  height:${({flag})=> flag ? "20vh": "88vh"};
  width: 50vw;
  margin:1rem 0;
  
  overflow:hidden;
`;
export const FlagDiv2 = styled.div`

  height:${({flag})=> flag ? "auto": ""};
`;



export default Card;





