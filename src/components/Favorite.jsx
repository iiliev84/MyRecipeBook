

function Favorite({favoriteRecipe, setFavRecipe}){
    return(
        <>
        <h3>Favorite Recipes</h3>
        <p>Name: {favoriteRecipe?.strMeal}</p>
        <img src={favoriteRecipe?.strMealThumb} style={{height: "200px"}}/>
        <p>Category: {favoriteRecipe?.strCategory}</p>
        <p>Origin: {favoriteRecipe?.strArea}</p>    
        <button onClick={()=>setFavRecipe(null)}>Delete Favorite</button>
        </>
    )
}

export default Favorite