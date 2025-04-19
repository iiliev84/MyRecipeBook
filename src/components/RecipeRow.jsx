function RecipeRow({selectedRecipe, setselectedRecipe}){
    return(
        <>
        <div>
        <h2>{selectedRecipe.strMeal}</h2>
        <img src={selectedRecipe.strMealThumb} style={{ height: "200px" }}/>
        <p>Category:{selectedRecipe.strCategory}</p>
        <p>Tags: {selectedRecipe.strTags}</p>
        <p>Area:{selectedRecipe.strArea}</p>
        <p>Ingredients: {selectedRecipe.ingredients}</p>
        <p>Instructions: {selectedRecipe.strInstructions}</p>
        <button onClick={()=> setselectedRecipe(null)} className="button">Go Back</button>
        </div>
        </>
    )
}


export default RecipeRow