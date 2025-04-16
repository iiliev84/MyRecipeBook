import {useState, useEffect} from 'react';
import RecipeRow from './RecipeRow';

function RecipesList({ setSelectedRecipeId }) {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch("https://fsa-recipe.up.railway.app/api/recipes");
        const result = await response.json();
        setRecipes(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipes();
  }, []);  

  return (
    <table>
      <thead>
        
          <th colSpan="3">Recipe List</th>
        
      </thead>
      <tbody>
        
          <td>Name</td>
          <td>Category</td>
          <td>Area</td>
        
        {recipes.map((recipe) => (
          <RecipeRow
            key={recipe.idMeal}
            recipe={recipe}
            setSelectedRecipeId={setSelectedRecipeId}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RecipesList