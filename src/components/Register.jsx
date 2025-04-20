import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch("https://fsa-recipe.up.railway.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const result = await res.json();
      console.log(result);
      setToken(result.token);
      navigate("LogIn");
    } catch (error) {
      setError(error.message);
    }
  }

  return(
    <>
    <h2>Register</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Create Username: <input 
            value = {username}
            required
            onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            Create Password: <input 
            type="password" 
            value={password} 
            minLength={6}
            title="Your password must be at least 6 characters long."
            required 
            onChange={(e) => setPassword(e.target.value)} />
        </label> <br></br><br></br>
        <button>Submit</button>
    </form>
    </>
  );
}

export default Register;