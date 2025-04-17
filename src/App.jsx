import { useState , useEffect} from 'react'
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import Register from './components/Register';
import LogIn from './components/LogIn';
import RecipeList from './components/RecipeList';
import Authorization from './components/Authorization';
import Favorite from './components/Favorite';

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [recipe, setRecipe] = useState([]);
  const [favoriteRecipe, setFavRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/register");
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorites</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
        <Link to="/auth">Authorization</Link>
        {token && <button onClick={handleLogout}>Logout</button>} 
      </nav>

      <h1>Recipes</h1>

      <Routes>
          <Route
            path="/"
            element={
          <RecipeList recipe={recipe} setRecipe={setRecipe} favoriteRecipe={favoriteRecipe} setFavRecipe={setFavRecipe} token={token} />} /> 
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/login" element={<LogIn token={token} setToken={setToken}/>}/>
          <Route path="/auth" element={<Authorization token={token} />} />
          <Route
            path="/favorite"
            element={token ? <Favorite favoriteRecipe={favoriteRecipe} setFavRecipe={setFavRecipe} /> : <Navigate to="/signup" />}
          />
      </Routes>
    </>
  );
}

export default App;
