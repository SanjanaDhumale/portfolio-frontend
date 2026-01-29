import { useEffect, useState } from "react";
import api from "../services/api";
import "./Home.css";

function Home() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api.get("/profile").then(res => setProfile(res.data));
    api.get("/skills").then(res => setSkills(res.data));
  }, []);

  // group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text animate">
            <h1>{profile?.name || "SANJANA DHUMALE"}</h1>
            <h2>{profile?.title || "Full Stack Developer"}</h2>
            <p>
              {profile?.summary ||
                "I build clean, scalable and secure web applications using modern technologies."}
            </p>

            <div className="hero-actions">
              <a href="/projects" className="btn primary">View Projects</a>
              <a href="#skills" className="btn outline">My Skills</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="value-section section-alt">
        <div className="container">
          <h3 className="section-title">What I Do</h3>
          <div className="value-grid">
            <div className="value-card animate">
              <h4>Backend Development</h4>
              <p>I build robust and scalable backend systems using Java & Spring.</p>
            </div>
            <div className="value-card animate">
              <h4>Secure Applications</h4>
              <p>I implement authentication and authorization using Spring Security & JWT.</p>
            </div>
            <div className="value-card animate">
              <h4>Clean Architecture</h4>
              <p>I focus on maintainable, readable, and production-ready code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT I BUILD ================= */}
      <section className="value-section">
        <div className="container">
          <h3 className="section-title">What I Build</h3>
          <div className="value-grid">
            <div className="value-card animate">
              <h4>Full Stack Applications</h4>
              <p>React frontend with Spring Boot backend.</p>
            </div>
            <div className="value-card animate">
              <h4>REST APIs</h4>
              <p>Well-structured REST APIs connected to databases.</p>
            </div>
            <div className="value-card animate">
              <h4>Admin Dashboards</h4>
              <p>Secure dashboards for managing application data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MY EXPERTISE ================= */}
      <section className="value-section section-alt">
        <div className="container">
          <h3 className="section-title">My Expertise</h3>
          <p className="expertise-text animate">
            I specialize in building real-world applications with a strong focus
            on backend logic, security, and clean UI integration.
          </p>
        </div>
      </section>

      {/* ================= SKILLS (DYNAMIC) ================= */}
      <section className="section container" id="skills">
        <h3 className="section-title">Skills</h3>

        <div className="skills-wrapper">
          {Object.keys(groupedSkills).map(category => (
            <div className="skill-group" key={category}>
              <h4>{category}</h4>
              <div className="skill-chips">
                {groupedSkills[category].map(skill => (
                  <span key={skill.id}>{skill.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
