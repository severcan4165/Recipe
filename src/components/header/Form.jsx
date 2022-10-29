import React from 'react'


const Form = ({query, mealType, setQuery, setMealType, getMeal}) => {


const handleSubmit = (e) => {
    e.preventDefault();
    getMeal(query,mealType);
}
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="query">Food Name</label><br/>
        <input onChange={(e) => setQuery(e.target.value)} type="text" id="food" name="query" /><br/>
        <label htmlFor="mealType">Meal Type</label><br/>
        <select onChange={(e) => setMealType(e.target.value)} name="mealType"  id="mealType">
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="TeaTime">Tea Time</option>
            <option value="Dinner">Dinner</option>
        </select><br/>
        <button type="submit" name="submit">Submit</button>
    </form>
  )
}

export default Form