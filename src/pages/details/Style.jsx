import styled from 'styled-components';

const Card = styled.div`
  
background: rgb(149,240,96);
background: linear-gradient(286deg, rgba(149,240,96,0.989233193277311) 0%, rgba(251,214,169,1) 100%);
  padding:2rem;
  display:flex;
  gap:3rem;
  justify-content:center;
  align-items:center;
  flex-direction:row;

  
`;
export const Card2 = styled.div`
width:350px;
height:400px;
font-size:1.3rem;
line-height:1.2;

   
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
