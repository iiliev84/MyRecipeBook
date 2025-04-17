import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import RecipeRow from "./RecipeRow";

function RecipesList({setselectedRecipe, recipe, setRecipe, favoriteRecipe, setFavRecipe, token }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch("https://fsa-recipe.up.railway.app/api/recipes");
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipes();
  }, [setRecipe]);

  const handleClick = (recipe) => {
    setFavRecipe(recipe);
  }; 
  

  const handleSeeDetails = () =>{
    setselectedRecipe(setselectedRecipe)   
}
    

  return (
    <>
    <h1>Recipes</h1>
      {recipe.map((recipe) => (
        <div key={recipe.idMeal}>
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} style={{ height: "200px" }} />
          <p>Category: {recipe.strCategory}</p>
          <p>Area: {recipe.strArea}</p>
          <p>Instructions: {recipe.strInstructions}</p>
          <p>Ingredients: {recipe.ingredients}</p>
          <button 
            onClick={() => handleClick(recipe)} 
            disabled={!token}>
            {token ? "Add to Favorite" : "Log In to add to Favorite"}
          </button>
          <button 
            onClick={() => handleSeeDetails(setselectedRecipe)} 
            
            disabled={!token}>
            {token ? "See Details" : "See Details"}
          </button>
        </div>
        
      ))}
    
    </>
  );
}

export default RecipesList