function Favorite({favoriteRecipe, setFavRecipe}){
    return (
        <div>
            {favoriteRecipe ? (
            <>
            <h2>Favorite Recipes</h2>
            <h3>{favoriteRecipe?.strMeal}</h3>
            <img src={favoriteRecipe?.strMealThumb} style={{height: "200px"}}/>
            <p>Category: {favoriteRecipe?.strCategory}</p>
            <p>Origin: {favoriteRecipe?.strArea}</p>    
            <button onClick={()=>setFavRecipe(null)}>Delete Favorite</button>
            </>               
            ) : (
                <p>No favorite recipes.</p>
            )}
        </div>
    )
}

export default Favorite

