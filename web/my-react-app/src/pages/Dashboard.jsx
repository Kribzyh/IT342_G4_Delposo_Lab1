import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  const handleViewProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>You are now logged in.</p>
      <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
        <button className="primary-button" onClick={handleViewProfile}>
          View Profile
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

