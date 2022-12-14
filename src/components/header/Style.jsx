import styled from 'styled-components';

export const StyledInput = styled.input`
display: block;
margin: 0.8rem auto;
width: 300px;
height: 40px;
border-radius:0.5rem;
padding-left:0.3rem;
font-size:1.2rem;
border:none;
background-color: rgba(220,220,220,0.8);
color: black;

&:focus{
    outline:none;
    background-color: rgb(255,255,255);
}
`;

const StyledForm = styled.form`
height:${({flag})=> flag ? "20vh": "50vh"};
gap:${({flag})=> flag ? "2rem": ""};

font-size: 1.4rem;
background: rgb(175,168,168);
background: radial-gradient(circle, rgba(30,30,30,0.7) 0%, rgba(20,20,20,0.7) 100%);
padding:3rem;
color:white;
border-radius:0.7rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: ${({flag})=> flag ? "row": "column"};

`;
export const StyledButton = styled.button`

background:rgb(255, 51, 51);
    margin-top:1rem;
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

export const StyledSelect = styled.select`
display: block;
margin: 0.8rem auto;
width: 300px;
height: 40px;
font-size:1.2rem;
border-radius:0.5rem;
padding-left:0.3rem;
border:none;
background-color: rgba(220,220,220,0.8);
color: black;
text-align:center;
&:focus{
    outline:none;
    background-color: rgb(255,255,255);
}
`;

export const StyledLabel = styled.label`
font-size:2.2rem;

`;

export default StyledForm;
