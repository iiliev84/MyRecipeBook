import { useState , useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './components/Register';
import LogIn from './components/LogIn';
import RecipeList from './components/RecipeList';
import Authorization from './components/Authorization';
import Favorite from './components/Favorite';
import RecipeRow from './components/RecipeRow';
import RandomRecipe from './components/Random';
import Nav from './components/Nav';

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [selectedRecipe, setselectedRecipe] = useState(null) 
  const [recipes, setRecipes] = useState([])
  const [favorite, setFavorite] = useState([])

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(()=>{
    const getFav = async ()=> {
      if(!token) return
  
    try{
      const response = await fetch ("https://fsa-recipe.up.railway.app/api/favorites", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      const result = await response.json()
      setFavorite(result.data)
    }catch(error){
      console.log("error")
    }
  }
  getFav()}, [token]) 


  return (
    <>
      <Nav />
      
      <Routes>
          <Route path="/Random" element={<RandomRecipe />} />
          <Route path="/Register" element={<Register setToken={setToken} />} />
          <Route path="/LogIn" element={<LogIn token={token} setToken={setToken}/>}/>
          <Route path="/Authorization" element={<Authorization token={token} />} />
          <Route path='/' element={
              <div>
              {selectedRecipe ? <RecipeRow selectedRecipe={selectedRecipe} setselectedRecipe={setselectedRecipe} />
               : <RecipeList recipes={recipes} setRecipes={setRecipes} setselectedRecipe={setselectedRecipe} favorite={favorite} setFavorite={setFavorite} token={token}/>}
               </div> }/>
          <Route path='/Favorite' element={<Favorite favorite={favorite} setFavorite={setFavorite}/>}/>
      </Routes>
                
    </>
  );
}

export default App;