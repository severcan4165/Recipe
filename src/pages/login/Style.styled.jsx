import styled from 'styled-components';

const StyledDiv = styled.div`
width: 100%;
height: 98vh;
background-image: url("https://picsum.photos/1600/900");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`;



export const StyledInput = styled.input`
display: block;
margin: 1rem auto;
width: 300px;
height: 35px;
border-radius:0.5rem;
padding-left:0.3rem;
border:none;
background-color: rgba(220,220,220,0.8);
color: black;
font-weight:600;
&:focus{
    outline:none;
    background-color: rgb(255,255,255);
}
`;

export const StyledForm = styled.form`
font-size: 1.2rem;
background: rgb(175,168,168);
background: radial-gradient(circle, rgba(30,30,30,0.7) 0%, rgba(20,20,20,0.7) 100%);
padding:3rem;
border-radius:0.7rem;
display: flex;
color:white;
justify-content: center;
align-items: center;
flex-direction: column;
`;
export const StyledButton = styled.button`
margin-top:1rem;
background:rgb(255, 51, 51);
  color: #fefefe;
  font-size: 1.2rem;
  padding: 0.7rem 2rem;
  border:none;
  border-radius:0.5rem;
  cursor: pointer;
  &:hover{
    transform:scale(0.97);
  }
`;

export default StyledDiv;

  
