import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "../App.css";
import TMS from "../assets/TMS.png";
const Home = () => {
  // Portfolio data for preview
  const portfolioItems = [
    {
      id: 1,
      title: "Web Application",
      category: "Development",
      image: `${TMS}`,
    },
    {
      id: 2,
      title: "UI/UX Design",
      category: "Design",
      image: "https://via.placeholder.com/400x300/6c757d/ffffff?text=Project+2",
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
  ];

  return (
    <div class="page-wrapper">
      <div class="page-background">
        <div className="home-page">
          {/* Hero Section */}
          <Hero />

          {/* About Preview */}
          <section className="py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h2 className="display-6 fw-bold mb-4">About Me</h2>
                  <p className="lead mb-4">
                    With over 5 years of experience in web development, I
                    specialize in creating responsive, user-friendly
                    applications using modern web technologies. I'm passionate
                    about clean code and user-centered design.
                  </p>
                  <Link
                    to="/about"
                    className="btn btn-outline-primary btn-lg w-auto"
                  >
                    Learn More About Me
                  </Link>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body text-center p-4">
                          <div className="text-primary mb-3">
                            <i className="bi bi-code-slash fs-1"></i>
                          </div>
                          <h4>Web Development</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body text-center p-4">
                          <div className="text-success mb-3">
                            <i className="bi bi-palette fs-1"></i>
                          </div>
                          <h4>UI/UX Design</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Preview */}
          <section className="py-5 bg-light">
            <div className="container">
              <div className="row mb-5">
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="display-6 fw-bold mb-3">My Skills</h2>
                  <p className="lead">A quick look at my technical expertise</p>
                </div>
              </div>
              <div className="row g-4">
                {skills.map((skill, index) => (
                  <div key={index} className="col-md-4">
                    <div className="skill-item">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-semibold">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="progress" style={{ height: "10px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-5">
                <Link to="/skills" className="btn btn-primary btn-lg w-auto">
                  View All Skills
                </Link>
              </div>
            </div>
          </section>

          {/* Projects Preview */}
          <section className="py-5">
            <div className="container">
              <div className="row mb-5">
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="display-6 fw-bold mb-3">Featured Projects</h2>
                  <p className="lead">Some of my recent work</p>
                </div>
              </div>
              <div className="row g-4">
                {portfolioItems.map((item) => (
                  <div key={item.id} className="col-md-6">
                    <div className="card portfolio-card border-0 shadow-sm overflow-hidden">
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.title}
                      />
                      <div className="card-body p-4">
                        <span className="badge bg-primary mb-2">
                          {item.category}
                        </span>
                        <h3 className="h5">{item.title}</h3>
                        <Link to="/projects" className="btn btn-link p-0 mt-2">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-5">
                <Link
                  to="/projects"
                  className="btn btn-outline-primary btn-lg w-auto"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-5 bg-primary text-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="display-6 fw-bold mb-4">
                    Let's Work Together
                  </h2>
                  <p className="lead mb-4">
                    Have a project in mind? I'd love to hear about it. Let's
                    create something amazing together!
                  </p>
                  <Link to="/contact" className="btn btn-light btn-lg px-5">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
