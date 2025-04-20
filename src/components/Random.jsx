import React, { useEffect, useState } from "react";

function RandomRecipe() {
  const [recipe, setRecipe] = useState();

  
  useEffect(() => {
    async function fetchRandomRecipe() {
      try {
        const res = await  fetch("https://fsa-recipe.up.railway.app/api/recipes/random");
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRandomRecipe();
  }, [setRecipe]); 

  return recipe ? (
    <div>
      <h1>Random Recipe of the Day </h1>
      <br></br>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} style={{ height: "200px" }}/>
        <p>Category: {recipe.strCategory}</p>
        <p>Tags: {recipe.strTags}</p>
        <p>Area: {recipe.strArea}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Instructions: {recipe.strInstructions}</p>
    </div>
  ) : (
    <h2> No Random Recipe of the Day </h2>
  );
}

export default RandomRecipe