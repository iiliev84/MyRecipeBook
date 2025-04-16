import { useState, useEffect } from "react";
function SelectedRecipe({ selectedRecipeId, setSelectedRecipeId}){
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
          try {
            const response = await fetch(`https://fsa-recipe.up.railway.app/api/recipes/${selectedRecipeId}`);
            const result = await response.json();
            setRecipe(result);
          } catch (error) {
            console.error("Failed to fetch recipe:", error);
          }
        }
    
        fetchRecipe();
      }, [selectedRecipeId]);

    return (
    <div className="recipe">
    {recipe ? (
      <div>
      <h2>{recipe.strMeal}</h2>
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>
      <p>Instructions: {recipe.strInstructions}</p>
      <p>Ingredients: {recipe.ingredients}</p>
    </div>
    ) : (
      ""
    )}
     <button onClick={() => setSelectedRecipeId(null)}>Back</button>
    </div>
    
  );
}

export default SelectedRecipe