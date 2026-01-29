import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard container">

      {/* Header */}
      <div className="admin-header dashboard-header">
        <div>
          <h2>Admin Dashboard</h2>
          <p>Quick access to manage your portfolio content</p>
        </div>

        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Admin Actions */}
      <div className="admin-cards">

        {/* Projects */}
        <div
          className="admin-card animate"
          onClick={() => navigate("/projects")}
        >
          <h3>Projects</h3>
          <p>
            View and manage the projects displayed on your portfolio.
          </p>
          <span className="card-action">Go to Projects →</span>
        </div>

        {/* Skills */}
        <div
          className="admin-card animate"
          onClick={() => navigate("/#skills")}
        >
          <h3>Skills</h3>
          <p>
            Review the skills section shown on the home page.
          </p>
          <span className="card-action">Go to Skills →</span>
        </div>

      </div>

     
    </div>
  );
}

export default AdminDashboard;
