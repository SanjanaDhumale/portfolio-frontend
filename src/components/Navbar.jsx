import { Link } from "react-router-dom";
import { useState } from "react";
import { isAuthenticated } from "../utils/auth";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const isAdmin = isAuthenticated();

  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="nav-logo">
          <Link to="/">Sanjana</Link>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>

          <Link
            to={isAdmin ? "/admin/dashboard" : "/admin/login"}
            className="admin-link"
            onClick={() => setOpen(false)}
          >
            Admin
          </Link>
        </nav>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
