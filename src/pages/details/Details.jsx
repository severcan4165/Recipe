import {useLocation } from "react-router-dom"
import Card,{Card2, Image, listStyle} from "./Style.jsx"

const Details = () => {
  const {state} = useLocation();
  return (
   
      
      <Card>
                 <Card2>
                    <h2>{state.recipe.label}</h2>
                      <div>
                        {state.recipe.ingredientLines?.map((li,index)=>{
                        return(
                            <p key={index}>{li}</p>
                        )
                      } )}
                      </div>
                      <p>{state.recipe.title}</p>
                 </Card2>
                  <Card2>
                    <Image src={state.recipe.images.REGULAR.url}/>
                  </Card2>
    
                
      </Card>


 
  )
}

export default Details