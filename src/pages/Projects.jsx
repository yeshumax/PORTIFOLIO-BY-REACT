import React, { useState } from "react";
import { Link } from "react-router-dom";
import TMS from "../assets/TMS.png";
import Weather_Dashboard from "../assets/Weather_Dashboard.png";
import Portifolio_Dashboard from "../assets/Portifolio_Dashboard.png";
const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 2,
      title: "Tax Management System",
      category: "Web App",
      description:
        "A comprehensive tax management system with real-time calculations, reporting, and compliance features.",
      image: `${TMS}`,
      technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Design & Development",
      description:
        "Modern, responsive portfolio website with animations, contact form, and project showcase.",
      image: `${Portifolio_Dashboard}`,
      technologies: ["React", "Bootstrap", "EmailJS", "Framer Motion"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      category: "API Integration",
      description:
        "Real-time weather dashboard with location-based forecasts, interactive charts, and alerts.",
      image: `${Weather_Dashboard}`,
      technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet"],
      link: "#",
      github: "https://github.com/yeshumax",
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Get unique categories
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <div className="page-wrapper">
      <div className="page-background">
        <div className="projects-page py-5 mt-5">
          <div className="container">
            {/* Header Section */}
            <div className="row mb-5">
              <div className="col-lg-10 mx-auto text-center">
                <div className="badge bg-primary bg-gradient rounded-pill px-4 py-2 mb-3">
                  <i className="bi bi-stack me-2"></i>PORTFOLIO
                </div>
                <h1 className="display-4 fw-bold mb-3 text-dark">
                  My Projects
                </h1>
                <p className="lead text-muted mb-4">
                  A showcase of my recent work, built with modern technologies
                  and best practices.
                </p>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="row mb-5">
              <div className="col-12">
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`btn ${filter === category ? "btn-primary" : "btn-outline-primary"} rounded-pill px-4`}
                      onClick={() => setFilter(category)}
                    >
                      {category === "all" ? "All Projects" : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="row g-4">
              {filteredProjects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6">
                  <div className="card project-card border-0 shadow-lg h-100 hover-lift overflow-hidden">
                    {/* Project Image with Overlay */}
                    <div className="position-relative overflow-hidden">
                      <img
                        src={project.image}
                        className="card-img-top"
                        alt={project.title}
                        style={{ height: "220px", objectFit: "cover" }}
                      />
                      <div className="image-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-light text-dark rounded-pill px-3 py-2">
                          <i className="bi bi-tag me-1"></i>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="card-body p-4">
                      <h3 className="h4 card-title fw-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="card-text text-muted mb-4">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="d-flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="badge bg-light text-dark border px-3 py-2"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a
                            href={project.link}
                            className="btn btn-primary btn-sm rounded-pill px-4"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-eye me-2"></i>Live Demo
                          </a>
                          <a
                            href={project.github}
                            className="btn btn-outline-dark btn-sm rounded-pill px-4 ms-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-github me-2"></i>Code
                          </a>
                        </div>
                        <Link
                          to={`/project/${project.id}`}
                          className="text-decoration-none text-primary fw-semibold"
                        >
                          Details <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="card-footer bg-transparent border-top-0 py-3 px-4">
                      <div className="d-flex justify-content-between align-items-center text-muted small">
                        <span>
                          <i className="bi bi-calendar me-1"></i>Completed: Dec
                          2023
                        </span>
                        <span>
                          <i className="bi bi-star-fill text-warning me-1"></i>
                          4.8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="row mt-5 pt-5">
              <div className="col-lg-8 mx-auto text-center">
                <div className="card border-0 bg-gradient-primary text-white shadow-lg">
                  <div className="card-body p-5 bg-dark br-8">
                    <h2 className="display-6 fw-bold mb-3">
                      Have a Project in Mind?
                    </h2>
                    <p className="lead mb-4 opacity-90">
                      Let's work together to bring your ideas to life with
                      cutting-edge technology.
                    </p>
                    <Link
                      to="/contact"
                      className="btn btn-light btn-lg rounded-pill px-5"
                    >
                      <i className="bi bi-chat-dots me-2"></i>Start a Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
