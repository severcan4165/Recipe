import styled from 'styled-components';


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
border-radius:0.3rem

   
`;

export const FlexContainer = styled.div`
background-color: #eee;
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


export default Card;





