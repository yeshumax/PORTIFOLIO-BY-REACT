import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const technicalSkills = [
    {
      name: "React",
      level: 95,
      icon: "bi-filetype-jsx",
      category: "frontend",
      years: 4,
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      level: 92,
      icon: "bi-filetype-js",
      category: "frontend",
      years: 5,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      level: 85,
      icon: "bi-filetype-tsx",
      category: "frontend",
      years: 3,
      color: "#3178C6",
    },
    {
      name: "HTML/CSS",
      level: 98,
      icon: "bi-filetype-css",
      category: "frontend",
      years: 6,
      color: "#E34F26",
    },
    {
      name: "Bootstrap",
      level: 95,
      icon: "bi-bootstrap",
      category: "frontend",
      years: 5,
      color: "#7952B3",
    },
    {
      name: "Node.js",
      level: 88,
      icon: "bi-filetype-js",
      category: "backend",
      years: 4,
      color: "#339933",
    },
    {
      name: "Express",
      level: 85,
      icon: "bi-server",
      category: "backend",
      years: 4,
      color: "#000000",
    },
    {
      name: "MongoDB",
      level: 82,
      icon: "bi-database",
      category: "backend",
      years: 3,
      color: "#47A248",
    },
    {
      name: "Git",
      level: 90,
      icon: "bi-git",
      category: "tools",
      years: 5,
      color: "#F05032",
    },
    {
      name: "Figma",
      level: 85,
      icon: "bi-palette",
      category: "design",
      years: 3,
      color: "#F24E1E",
    },
    {
      name: "UI/UX Design",
      level: 88,
      icon: "bi-brush",
      category: "design",
      years: 4,
      color: "#FF4088",
    },
    {
      name: "REST APIs",
      level: 90,
      icon: "bi-plug",
      category: "backend",
      years: 4,
      color: "#FF6B35",
    },
  ];
  const myJorny = [
    {
      year: "2018",
      title: "Started Web Development",
      description: "Learned HTML, CSS, and JavaScript basics",
    },
    {
      year: "2019",
      title: "Mastered Frontend",
      description: "Deep dive into React, Bootstrap, and modern CSS",
    },
    {
      year: "2020",
      title: "Backend Development",
      description: "Learned Node.js, Express, and MongoDB",
    },
    {
      year: "2021",
      title: "UI/UX Design",
      description: "Studied design principles and tools like Figma",
    },
    {
      year: "2022",
      title: "Full Stack Projects",
      description: "Built complex applications with React & Node.js",
    },
    {
      year: "2023",
      title: "Advanced Concepts",
      description: "TypeScript, Advanced Patterns, Performance Optimization",
    },
  ];
  const categories = [
    {
      id: "all",
      label: "All Skills",
      icon: "bi-grid",
      count: technicalSkills.length,
    },
    {
      id: "frontend",
      label: "Frontend",
      icon: "bi-layout-text-window",
      count: technicalSkills.filter((s) => s.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Backend",
      icon: "bi-server",
      count: technicalSkills.filter((s) => s.category === "backend").length,
    },
    {
      id: "design",
      label: "Design",
      icon: "bi-palette",
      count: technicalSkills.filter((s) => s.category === "design").length,
    },
    {
      id: "tools",
      label: "Tools",
      icon: "bi-tools",
      count: technicalSkills.filter((s) => s.category === "tools").length,
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
      ],
      icon: "bi-layout-text-window",
      color: "primary",
    },
    {
      title: "Backend Development",
      description: "Server-side logic and database management",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "Authentication",
        "WebSockets",
      ],
      icon: "bi-server",
      color: "success",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences",
      skills: [
        "Figma",
        "Adobe XD",
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      icon: "bi-palette",
      color: "warning",
    },
  ];

  const filteredSkills =
    activeTab === "all"
      ? technicalSkills
      : technicalSkills.filter((skill) => skill.category === activeTab);

  return (
    <div className="page-wrapper">
      <div className="page-background">
        <div className="skills-page py-5 mt-5">
          <div className="container">
            {/* Hero Section */}
            <div className="row mb-5">
              <div className="col-lg-10 mx-auto text-center">
                <div className="badge bg-primary bg-gradient rounded-pill px-4 py-2 mb-3">
                  <i className="bi bi-tools me-2"></i>TECHNICAL EXPERTISE
                </div>
                <h1 className="display-3 fw-bold mb-3 text-dark">
                  Skills & Expertise
                </h1>
                <p className="lead text-muted mb-4">
                  Proficient in modern web technologies with hands-on experience
                  in building scalable applications and intuitive user
                  interfaces.
                </p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="row mb-5">
              <div className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold mb-3">Browse by Category</h3>
                    <div className="d-flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className={`btn ${activeTab === category.id ? "btn-primary w-auto" : "btn-outline-primary w-auto"} rounded-pill px-4 d-flex align-items-center gap-2`}
                          onClick={() => setActiveTab(category.id)}
                        >
                          <i className={`bi ${category.icon}`}></i>
                          {category.label}
                          <span className="badge bg-light text-dark rounded-pill ms-1">
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="row mb-5">
              <div className="col-12">
                <div className="row g-4">
                  {filteredSkills.map((skill, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card skill-card border-0 shadow-sm h-100 hover-lift">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-start mb-3">
                            <div
                              className="skill-icon rounded-circle p-3 me-3"
                              style={{
                                backgroundColor: `${skill.color}20`,
                                color: skill.color,
                              }}
                            >
                              <i className={`bi w-auto ${skill.icon} fs-3`}></i>
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="fw-bold mb-1">{skill.name}</h5>
                              <div className="text-muted small">
                                <i className="bi bi-clock me-1"></i>
                                {skill.years}{" "}
                                {skill.years === 1 ? "year" : "years"}
                              </div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="d-flex justify-content-between mb-1">
                              <span className="small">Proficiency</span>
                              <span className="fw-bold">{skill.level}%</span>
                            </div>
                            <div className="progress" style={{ height: "8px" }}>
                              <div
                                className="progress-bar"
                                style={{
                                  width: `${skill.level}%`,
                                  backgroundColor: skill.color,
                                }}
                              ></div>
                            </div>
                          </div>

                          <div className="skill-tags">
                            <span className="badge bg-light text-dark small">
                              {skill.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skill Categories */}
            <div className="row mb-5">
              <div className="col-12">
                <h2 className="display-5 fw-bold text-center mb-5">
                  Skill Categories
                </h2>
                <div className="row g-4">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="card category-card border-0 shadow-lg h-100 hover-lift">
                        <div className="card-body p-4">
                          <div className="text-center mb-4">
                            <div
                              className={`icon-wrapper bg-${category.color} bg-gradient text-white rounded-circle p-3 d-inline-flex align-items-center justify-content-center`}
                            >
                              <i className={`bi ${category.icon} fs-2`}></i>
                            </div>
                          </div>
                          <h3 className="h4 fw-bold text-center mb-3">
                            {category.title}
                          </h3>
                          <p className="text-muted text-center mb-4">
                            {category.description}
                          </p>
                          <div className="d-flex flex-wrap gap-2 justify-content-center">
                            {category.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="badge bg-light text-dark py-2 px-3"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-5">
                    <h2 className="display-5 fw-bold text-center mb-5">
                      Learning Journey
                    </h2>
                    <div className="timeline">
                      {myJorny.map((milestone, index) => (
                        <div key={index} className="timeline-item">
                          <div className="timeline-marker">
                            <i className="bi bi-circle-fill"></i>
                          </div>
                          <div className="timeline-content">
                            <div className="card border-0 shadow-sm">
                              <div className="card-body p-3">
                                <span className="badge bg-primary rounded-pill px-3 py-2 mb-2">
                                  {milestone.year}
                                </span>
                                <h5 className="fw-bold mb-2">
                                  {milestone.title}
                                </h5>
                                <p className="text-muted mb-0 small">
                                  {milestone.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="row mt-5 pt-5">
              <div className="col-lg-8 mx-auto text-center">
                <div className="card border-0 bg-gradient-primary text-white shadow-lg">
                  <div className="card-body p-5">
                    <h2 className="display-6 fw-bold mb-3">
                      Ready to Leverage My Skills?
                    </h2>
                    <p className="lead mb-4 opacity-90">
                      Let's collaborate on your next project and create
                      something exceptional together.
                    </p>
                    <a
                      href="/contact"
                      className="btn btn-light btn-lg rounded-pill px-5"
                    >
                      <i className="bi bi-chat-dots me-2"></i>Start a
                      Conversation
                    </a>
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

export default Skills;
