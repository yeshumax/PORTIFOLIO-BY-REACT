import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const skills = [
    { name: "React", level: 95, icon: "bi-filetype-jsx" },
    { name: "Node.js", level: 90, icon: "bi-filetype-js" },
    { name: "JavaScript", level: 92, icon: "bi-filetype-js" },
    { name: "TypeScript", level: 85, icon: "bi-filetype-tsx" },
    { name: "HTML/CSS", level: 98, icon: "bi-filetype-css" },
    { name: "Bootstrap", level: 95, icon: "bi-bootstrap" },
    { name: "MongoDB", level: 85, icon: "bi-database" },
    { name: "UI/UX", level: 88, icon: "bi-palette" },
  ];

  const experience = [
    {
      year: "2021-Present",
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
    },
    {
      year: "2019-2021",
      role: "Frontend Developer",
      company: "Digital Creative Agency",
    },
    { year: "2018-2019", role: "Junior Developer", company: "Startup Studio" },
  ];

  const certifications = [
    { title: "Meta Front-End Developer", issuer: "Meta", year: "2022" },
    { title: "UI/UX Design Specialization", issuer: "Google", year: "2021" },
    { title: "AWS Certified Developer", issuer: "Amazon", year: "2020" },
    { title: "React Native Certification", issuer: "Meta", year: "2020" },
  ];

  return (
    <div class="page-wrapper">
      <div class="page-background">
        <div className="about-page py-5 mt-5">
          <div className="container">
            {/* Hero Section */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <div className="badge bg-primary bg-gradient rounded-pill px-4 py-2 mb-3 d-inline-block">
                  <i className="bi bi-person-badge me-2"></i>ABOUT ME
                </div>
                <h1 className="display-3 fw-bold mb-4">
                  Crafting Digital{" "}
                  <span className="text-primary">Experiences</span>
                </h1>
                <p className="lead text-muted mb-4">
                  I'm a passionate Full Stack Developer with over 5 years of
                  experience creating innovative web solutions. I specialize in
                  turning complex problems into simple, beautiful, and intuitive
                  designs.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="btn btn-primary btn-lg px-4 rounded-pill"
                  >
                    <i className="bi bi-chat-dots me-2"></i>Let's Talk
                  </Link>
                  <Link
                    to="/projects"
                    className="btn btn-outline-primary btn-lg px-4 rounded-pill"
                  >
                    <i className="bi bi-folder w-auto"></i>My Work
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="card border-0 shadow-lg overflow-hidden rounded-4">
                  <div className="card-body p-5 bg-gradient-primary text-white">
                    <div className="row text-center">
                      <div className="col-4">
                        <h3 className="display-4 fw-bold mb-2">50+</h3>
                        <p className="opacity-90">Projects</p>
                      </div>
                      <div className="col-4 border-start border-end">
                        <h3 className="display-4 fw-bold mb-2">5+</h3>
                        <p className="opacity-90">Years</p>
                      </div>
                      <div className="col-4">
                        <h3 className="display-4 fw-bold mb-2">100%</h3>
                        <p className="opacity-90">Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="row mb-5">
              <div className="col-12">
                <h2 className="display-5 fw-bold text-center mb-5">
                  Technical Skills
                </h2>
                <div className="row g-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card border-0 shadow-sm h-100 hover-lift">
                        <div className="card-body text-center p-4">
                          <div className="icon-wrapper bg-light rounded-circle p-3 mb-3 mx-auto">
                            <i
                              className={`bi ${skill.icon} fs-2 text-primary`}
                            ></i>
                          </div>
                          <h5 className="fw-bold mb-2">{skill.name}</h5>
                          <div
                            className="progress mb-2"
                            style={{ height: "8px" }}
                          >
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="text-muted small">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="row mb-5">
              <div className="col-lg-10 mx-auto">
                <h2 className="display-5 fw-bold text-center mb-5">
                  Work Experience
                </h2>
                <div className="timeline">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                    >
                      <div className="timeline-content card border-0 shadow-sm">
                        <div className="card-body p-4">
                          <span className="badge bg-primary rounded-pill px-3 py-2 mb-3">
                            {exp.year}
                          </span>
                          <h4 className="fw-bold mb-2">{exp.role}</h4>
                          <p className="text-muted mb-0">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="row mb-5">
              <div className="col-12">
                <h2 className="display-5 fw-bold text-center mb-5">
                  What I Do
                </h2>
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="card border-0 shadow-sm h-100 hover-lift">
                      <div className="card-body p-4 text-center">
                        <div className="icon-wrapper bg-primary bg-gradient text-white rounded-circle p-3 mb-4 mx-auto">
                          <i className="bi bi-code-slash fs-2"></i>
                        </div>
                        <h4 className="fw-bold mb-3">Web Development</h4>
                        <p className="text-muted">
                          Building responsive websites and web applications
                          using React, Node.js, and modern frameworks with
                          clean, maintainable code.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card border-0 shadow-sm h-100 hover-lift">
                      <div className="card-body p-4 text-center">
                        <div className="icon-wrapper bg-success bg-gradient text-white rounded-circle p-3 mb-4 mx-auto">
                          <i className="bi bi-palette fs-2"></i>
                        </div>
                        <h4 className="fw-bold mb-3">UI/UX Design</h4>
                        <p className="text-muted">
                          Creating intuitive and beautiful user interfaces with
                          focus on user experience, accessibility, and modern
                          design principles.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="card border-0 shadow-sm h-100 hover-lift">
                      <div className="card-body p-4 text-center">
                        <div className="icon-wrapper bg-warning bg-gradient text-white rounded-circle p-3 mb-4 mx-auto">
                          <i className="bi bi-phone fs-2"></i>
                        </div>
                        <h4 className="fw-bold mb-3">Mobile Development</h4>
                        <p className="text-muted">
                          Developing cross-platform mobile applications using
                          React Native and progressive web apps with native-like
                          performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2 className="display-5 fw-bold text-center mb-5">
                  Certifications
                </h2>
                <div className="row g-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="col-md-6">
                      <div className="card border-0 shadow-sm h-100 hover-lift">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-start">
                            <div className="flex-shrink-0">
                              <div className="bg-light rounded-circle p-3">
                                <i className="bi bi-award fs-3 text-primary"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-4">
                              <h5 className="fw-bold mb-2">{cert.title}</h5>
                              <div className="d-flex justify-content-between text-muted">
                                <span>{cert.issuer}</span>
                                <span>{cert.year}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="row mt-5 pt-5">
              <div className="col-lg-8 mx-auto text-center">
                <div className="card border-0 bg-dark text-white shadow-lg overflow-hidden">
                  <div className="card-body p-5">
                    <h2 className="display-6 fw-bold mb-3">
                      Ready to Build Something Amazing?
                    </h2>
                    <p className="lead mb-4 opacity-90">
                      Let's collaborate on your next project and create
                      something exceptional together.
                    </p>
                    <Link
                      to="/contact"
                      className="btn btn-light btn-lg rounded-pill px-5"
                    >
                      <i className="bi bi-envelope me-2"></i>Get In Touch
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

export default About;
