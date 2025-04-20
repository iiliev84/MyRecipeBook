import { Link, useNavigate } from 'react-router-dom';

function Nav () {
const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
}
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/Favorite">Favorites</Link>
        <Link to="/Random">Random</Link>
        <Link to="/Register">Register</Link>
        <Link to="/LogIn">Log In</Link>
        <Link to="/Authorization">Authorization Info</Link>
        <button onClick={() => {logout(); navigate("/");}}>LogOut</button>
      </nav>
    )

}

export default Nav