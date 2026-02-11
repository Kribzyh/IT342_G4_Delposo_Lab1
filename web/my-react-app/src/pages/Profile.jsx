import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }
  }, []);

  if (!user) {
    return (
      <div className="dashboard">
        <h2>Profile</h2>
        <p>Unable to load profile information.</p>
        <button
          className="primary-button"
          onClick={() => navigate("/dashboard")}
          style={{ marginTop: "1rem" }}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h2>Profile</h2>
      <div className="profile-grid">
        <div>
          <strong>First Name:</strong> {user.firstName}
        </div>
        <div>
          <strong>Middle Name:</strong> {user.middleName || "-"}
        </div>
        <div>
          <strong>Last Name:</strong> {user.lastName}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
      </div>
      <button
        className="primary-button"
        onClick={() => navigate("/dashboard")}
        style={{ marginTop: "1.5rem" }}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Profile;

