import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

function RecipesList({setselectedRecipe, token }) {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState([])
  const [favorite, setFavorite] = useState([])
  
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
  
  const addFavorites = async (recipe) => {
    if (!token) {
        alert("You're not logged in!")
        return
      }
      try {
        const response = await fetch("https://fsa-recipe.up.railway.app/api/favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            mealId: recipe.idMeal,
            name: recipe.strMeal,
            imageUrl: recipe.strMealThumb,
            strArea: recipe.strArea
          }),
        })  
          const result = await response.json()
          setFavorite((prevFavorites) => [...prevFavorites, result])
      } catch (error) {
        console.error("Error adding favorite:", error)
      }
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
          <button onClick={()=> { setselectedRecipe(recipe) }} className='button'>Recipe Details</button>
          <button onClick={() =>  addFavorites(recipe)}
            disabled={!token}>
            {token ? "Add to Favorites" : "Log In to add to Favorites"}
          </button>
        </div>
        
      ))}
    
    </>
  );
}

export default RecipesList