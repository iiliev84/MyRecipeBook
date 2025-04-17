import { Link } from "react-router-dom"

function RecipeRow({selectedRecipe, setselectedRecipe}){
    return(
        <>
        <p>Name: {selectedRecipe.strMeal}</p>
        <img src={selectedRecipe.strMealThumb} style={{height: "200px"}} onClick={() => {
             selectedRecipe(setselectedRecipe.idMeal);
           }}/>
        <p>Category: {selectedRecipe.strCategory}</p>
        <p>Origin: {selectedRecipe.strArea}</p>
        \<button onClick={() => setselectedRecipe(null)}>Back</button>
        </>
    )
}

export default RecipeRow