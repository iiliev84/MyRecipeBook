  
    import { Link } from "react-router-dom"

    function RecipeRow({selectedRecipe, setselectedRecipe}){
        return(
            <>
            <h3>Favorite Recipes</h3>
            <p>Name: {selectedRecipe?.strMeal}</p>
            <img src={selectedRecipe?.strMealThumb} style={{height: "200px"}}/>
            <p>Category: {selectedRecipe?.strCategory}</p>
            <p>Origin: {selectedRecipe?.strArea}</p>
            \<button onClick={() => setselectedRecipe(null)}>Back</button>
            </>
        )
    }
    
    export default RecipeRow