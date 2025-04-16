import { useState } from 'react'
import './App.css'
import SelectedRecipe from './components/SelectedRecipe'
import RecipesList from './components/RecipesList'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  return (
    <>
      {selectedRecipeId ? (
        <SelectedRecipe selectedRecipeId={selectedRecipeId} setSelectedRecipeId={setSelectedRecipeId}/>
      ) : (
        <RecipesList setSelectedRecipeId={setSelectedRecipeId} />
      )}
    </>
  )
}

export default App
