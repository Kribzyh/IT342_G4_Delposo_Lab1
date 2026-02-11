import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await login({ email, password });

      // Treat any returned user object as a successful login.
      if (res && (res.userID || res.email)) {
        // Persist user so ProtectedRoute can see that we're logged in
        localStorage.setItem("user", JSON.stringify(res));
        setMessage("Login successful. Redirecting...");
        navigate("/dashboard");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <button
          type="button"
          className="link-button"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register
        </button>
      </form>
      {error && <p className="error-text">{error}</p>}
      {message && <p className="success-text">{message}</p>}
    </div>
  );
};

export default Login;
