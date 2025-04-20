import { Link, useNavigate } from 'react-router-dom';

function Nav () {
const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
}
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/Favorite" >Favorites</Link>
        <Link to="/Random">Random</Link>
        <Link to="/Register">Register</Link>
        <Link to="/LogIn">Log In</Link>
        <Link to="/Authorization">Authorization Info</Link>
        <button onClick={() => {navigate("/"); logout(); }}>LogOut</button>
      </nav>
    )

}

export default Nav