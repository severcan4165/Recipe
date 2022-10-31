import React from 'react'
import StyledForm, { StyledButton, StyledInput, StyledLabel, StyledSelect } from './Style';


const Form = ({query, mealType, setQuery, setMealType, getMeal, flag}) => {


const handleSubmit = (e) => {
    e.preventDefault();
    getMeal(query,mealType);
}
  return (
    <StyledForm flag={flag} onSubmit={handleSubmit}>
      <div> <StyledLabel htmlFor="query">Food Name</StyledLabel><br/>
        <StyledInput onChange={(e) => setQuery(e.target.value)} type="text" id="food" name="query" placeholder='Food name'/><br/></div>
      <div><StyledLabel htmlFor="mealType">Meal Type</StyledLabel><br/>
        <StyledSelect onChange={(e) => setMealType(e.target.value)} name="mealType"  id="mealType">
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="TeaTime">Tea Time</option>
            <option value="Dinner">Dinner</option>
        </StyledSelect><br/></div>
      <div><StyledButton type="submit" name="submit">Search</StyledButton></div>
       
        
        
    </StyledForm>
  )
}

export default Form