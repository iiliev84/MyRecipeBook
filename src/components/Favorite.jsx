import { useState, useEffect } from "react"

function Favorite(){

    const [favorite, setFavorite] = useState([])
    const [token] = useState(() => localStorage.getItem("token"));

    const getFavorites = async () => {
        const res = await fetch("https://fsa-recipe.up.railway.app/api/favorites", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const result = await res.json()
        setFavorite(result.data)
      }
    
      useEffect(() => {
        if (token) {
          getFavorites()
        }
      }, [token])
    


    const removeFavorite = async (recipeId) => {
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
              const setselectedRecipe = fav.recipe || fav;
              return (
                <div key={setselectedRecipe.idMeal} className='card'>
                  <h3>{setselectedRecipe.strMeal}</h3>
                  <img src={setselectedRecipe.strMealThumb} style={{ height: "200px" }} />
                  <br></br>
                  <button onClick={() => removeFavorite(fav.id)} > Remove Favorite </button>
                </div>
              );
            })
          )}
        </div>
        </div>
      
        )
    }
    export default Favorite