import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { Routes, Route, Link, Navigate } from "react-router-dom";

// Simple protected route based on localStorage user
const ProtectedRoute = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const isLoggedIn = !!storedUser;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;