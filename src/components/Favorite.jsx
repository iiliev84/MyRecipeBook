function Favorite({favorite, setFavorite}){

    const handleRemoveFavorite = async (recipeId) => {
        const token = localStorage.getItem("token")
        const confirm = window.confirm("Confirm favorite removal.")
        if (!confirm) return    
        await fetch(`https://fsa-recipe.up.railway.app/api/favorites/${recipeId}`, {
            method: "DELETE",
            headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setFavorite(prev => prev.filter(fav => fav.id !== recipeId))
      }
       
    
        return(
         <div>
            <h1>Favorite Recipes</h1>
        <div>
            {favorite.length === 0 ? (
            <p>No Favorite Recipes Added</p>
          ) : (
            favorite.map((fav) => {
              const recipe = fav.recipe || fav;
              return (
                <div key={recipe.idMeal} className='card'>
                  <h3>{recipe.strMeal}</h3>
                  <img src={recipe.strMealThumb} style={{ height: "200px" }} />
                  <br></br>
                  <button onClick={() => handleRemoveFavorite(fav.id)} > Remove Favorite </button>
                </div>
              );
            })
          )}
        </div>
        </div>
      
        )
    }
    export default Favorite