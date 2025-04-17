import { useState , useEffect} from 'react'
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import Register from './components/Register';
import LogIn from './components/LogIn';
import RecipeList from './components/RecipeList';
import Authorization from './components/Authorization';
import Favorite from './components/Favorite';
import SelectedRecipe from './components/SelectedRecipe';

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [recipe, setRecipe] = useState([]);
  const [favoriteRecipe, setFavRecipe] = useState(null);
  const navigate = useNavigate();
  const [ selectedRecipeId, setSelectedRecipeId] = useState(null)

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
          <Route
            path="/"
            element={
          <RecipeList recipe={recipe} setRecipe={setRecipe} favoriteRecipe={favoriteRecipe} setFavRecipe={setFavRecipe}  token={token} />} /> 
          <Route path="/Register" element={<Register setToken={setToken} />} />
          <Route path="/LogIn" element={<LogIn token={token} setToken={setToken}/>}/>
          <Route path="/Authorization" element={<Authorization token={token} />} />
          <Route
            path="/Favorite"
            element={token ? <Favorite favoriteRecipe={favoriteRecipe} setFavRecipe={setFavRecipe} /> : <Navigate to="/signup" />}
          />
          <Route path="/SelectedRecipe" element={<SelectedRecipe />} />
      </Routes>
                
    </>
  );
}

export default App;