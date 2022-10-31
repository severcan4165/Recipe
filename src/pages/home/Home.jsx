import React, { useState, useEffect } from "react";
import Form from "../../components/header/Form";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { FlagDiv, FlagDiv2, StyledDiv, StyledForm } from "./Style";

const Home = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [flag, setFlag] = useState(false);

  let abc = [];

  const appId = "62e033a5";
  const appKey = "729cb6811ead0fa9946909da75941584";
  const getMeal = async (query, mealType) => {
    try {
      const { data } = await axios(
        `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${mealType}`
      );
      console.log(abc);
      setList(data.hits);
      setFlag(true);
    } catch (error) {}
  };

  useEffect(() => {
    getMeal(query, mealType);
  }, []);

  return (
    <StyledDiv flag={flag}>
      <FlagDiv flag={flag}>
        <Form
          flag={flag}
          query={query}
          mealType={mealType}
          setQuery={setQuery}
          setMealType={setMealType}
          getMeal={getMeal}
        />
      </FlagDiv>
      <FlagDiv2 flag={flag}>
        {flag && <RecipeCard list={list} setList={setList} />}
      </FlagDiv2>
    </StyledDiv>
  );
};

export default Home;
