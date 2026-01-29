import { useEffect, useState } from "react";
import api from "../services/api";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/projects")
      .then(res => setProjects(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="projects-section">
      <div className="container">

        {/* Header */}
        <div className="projects-header">
          <h2>Projects</h2>
          <p>
            These projects reflect how I approach real-world problems —
            designing clean architectures, writing maintainable code, and
            building secure full-stack applications.
          </p>
        </div>

        {loading && <p className="projects-state">Loading projects...</p>}

        {!loading && projects.length === 0 && (
          <p className="projects-state">
            Projects will appear here as they are added.
          </p>
        )}

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card animate">

              {/* Card Content */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="project-tags">
                  {project.techStack
                    ?.split(",")
                    .map((tech, index) => (
                      <span key={index} className="tag">
                        {tech.trim()}
                      </span>
                    ))}
                </div>
              </div>

              {/* Actions */}
              <div className="project-footer">
                <a
                  href="https://github.com/SanjanaDhumale"
                  target="_blank"
                  rel="noreferrer"
                  className="btn outline"
                  >
                   GitHub
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
