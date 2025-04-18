import { useState , useEffect} from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import Register from './components/Register';
import LogIn from './components/LogIn';
import RecipeList from './components/RecipeList';
import Authorization from './components/Authorization';
import Favorite from './components/Favorite';
import SelectedRecipe from './components/SelectedRecipe';
import RecipeRow from './components/RecipeRow';


function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [recipe, setRecipe] = useState([]);
  const [favoriteRecipe, setFavRecipe] = useState(null);
  const navigate = useNavigate();
  const [selectedRecipe, setselectedRecipe] = useState(null) 
  const [recipes, setRecipes] = useState([])
  const [favorite, setFavorite] = useState([])
  const [username, setUsername] = useState([])


  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Favorite">Favorites</Link>
        <Link to="/Register">Register</Link>
        <Link to="/LogIn">Log In</Link>
        <Link to="/Authorization">Authorization</Link>
      </nav>

      
      
      <Routes>
          <Route path="/Register" element={<Register setToken={setToken} />} />
          <Route path="/LogIn" element={<LogIn token={token} setToken={setToken}/>}/>
          <Route path="/Authorization" element={<Authorization token={token} />} />
          <Route path='/' element={
              <div>
              {selectedRecipe ? <RecipeRow selectedRecipe={selectedRecipe} setselectedRecipe={setselectedRecipe} />
               : <RecipeList recipes={recipes} setRecipes={setRecipes} setselectedRecipe={setselectedRecipe} favorite={favorite} setFavorite={setFavorite} token={token}/>}
               </div>
              }/>
          <Route path='/favorite' element={
            <div>
             {favorite ? <Favorite favorite={favorite} setFavorite={setFavorite}/>
              : <p>No Favorites Saved Yet! Add Favorites!</p>}
              </div>
            }/>
      </Routes>
                
    </>
  );
}

export default App;