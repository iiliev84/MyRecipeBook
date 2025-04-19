import { useEffect, useState } from "react";

function Authorization({ token }) {
  const [auth, setAuth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("https://fsa-recipe.up.railway.app/api/auth/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await res.json();
        setAuth(result);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    }

    if (token) {
      fetchUser();
    }
  }, [token]);

  return (
    <>
      <h2>Log In Information:</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {auth ? (
        <div>
          <h3>Username: {auth.username}</h3>
          <h3>Token {token}</h3>
        </div>
      ) : (
        <h2>Please Register and Log In</h2>
      )}
    </>
  );
}

export default Authorization;