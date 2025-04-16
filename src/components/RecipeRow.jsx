function RecipeRow({setSelectedRecipeId, recipe}){
   
    return (
        <tr
          onClick={() => {
            setSelectedRecipeId(recipe.idMeal);
          }}
        >
          <td>{recipe.strMeal}</td>
          <td>{recipe.strCategory}</td>
          <td>{recipe.strArea}</td>
        </tr>
      );
}


export default RecipeRow