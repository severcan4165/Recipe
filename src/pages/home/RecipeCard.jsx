import Card, {FlexContainer, CardImage, Image,Button} from "./Style";
    import {useNavigate } from "react-router-dom";

const RecipeCard = ({setList, list}) => {
  const navigate = useNavigate();
  return (
   
        <>
        <FlexContainer>
            {list?.map((item, index)=>{
              console.log(item);
              return(
                <Card key = {index}>
                  <h2>{item.recipe.label}</h2>
                  
                  <p>{item.recipe.title}</p>
                  <CardImage>
                    <Image src={item.recipe.images.REGULAR.url}/>
                  </CardImage>
    
                  <Button onClick={() => navigate(`/details/${index}`, {state:item})}>Details</Button>
                </Card>
              )
            })}
          </FlexContainer>
        </>
  )
}
   


export default RecipeCard;