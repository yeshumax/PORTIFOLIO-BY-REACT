import { Link } from "react-router-dom";
import YESHWOND from "./YESHWOND.jpg";
function Hero() {
  return (
    <section className="hero-section position-relative overflow-hidden d-flex align-items-center min-vh-100">
      {/* Animated Background Elements */}
      <div className="hero-bg-animation position-absolute w-100 h-100">
        {/* Animated gradient background */}
        <div className="position-absolute w-100 h-100 bg-gradient-primary"></div>

        {/* Floating animated shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>

        {/* Animated grid pattern */}
        <div className="grid-pattern position-absolute w-100 h-100"></div>
      </div>

      {/* Content */}
      <div className="container position-relative z-2">
        <div className="row align-items-center">
          <div className="col-lg-6 text-white">
            {/* Badge */}
            <div className="badge bg-white text-primary rounded-pill px-4 py-2 mb-4 d-inline-flex align-items-center">
              <span className="me-2">🚀</span> Welcome to my Portfolio
            </div>

            {/* Main Heading */}
            <h1 className="display-3 fw-bold mb-3 hero-title">
              Hi, I'm <span className="text-warning">YESHWOND LISANWORK</span>
            </h1>

            {/* Subtitle with animated typing effect */}
            <div className="mb-4">
              <h2 className="h2 mb-2">Full Stack Developer</h2>
              <div className="d-flex align-items-center">
                <div className="typewriter-text me-2">
                  <span className="text-gradient">React</span> •
                  <span className="text-gradient"> Node.js</span> •
                  <span className="text-gradient"> UI/UX</span>
                </div>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="lead mb-4 opacity-90">
              I create <span className="fw-bold">beautiful, functional</span>{" "}
              websites and applications with modern technologies. Passionate
              about <span className="fw-bold">clean code</span>
              and <span className="fw-bold">user-centered design</span>.
            </p>

            {/* Stats */}
            <div className="row mb-4">
              <div className="col-4">
                <div className="text-center">
                  <h3 className="fw-bold display-6 mb-1">5+</h3>
                  <p className="small opacity-90">Projects</p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center">
                  <h3 className="fw-bold display-6 mb-1">0</h3>
                  <p className="small opacity-90">Years Exp</p>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center">
                  <h3 className="fw-bold display-6 mb-1">100%</h3>
                  <p className="small opacity-90">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-5">
              <Link
                to="/projects"
                className="btn btn-light btn-lg px-4 py-3 rounded-pill shadow-lg d-flex align-items-center"
              >
                <span className="me-2">📁</span> View My Work
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill border-2"
              >
                <span className="me-2">📧</span> Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="d-flex gap-3">
              <a
                href="https://github.com"
                className="text-white fs-4 social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-white fs-4 social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-white fs-4 social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://dribbble.com"
                className="text-white fs-4 social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-dribbble"></i>
              </a>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div className="profile-container position-relative">
              {/* Glow effect behind image */}
              <div className="profile-glow position-absolute rounded-circle"></div>

              {/* Main profile image */}
              <div className="profile-image-wrapper position-relative rounded-circle overflow-hidden shadow-lg">
                <img
                  src={YESHWOND}
                  alt="YESHWOND LISANWORK"
                  className="profile-image w-100 h-100 object-fit-cover"
                />
              </div>

              {/* Floating tech icons around profile */}
              <div className="floating-tech-icon react-icon">
                <i className="bi bi-filetype-jsx fs-3 text-warning"></i>
              </div>
              <div className="floating-tech-icon node-icon">
                <i className="bi bi-filetype-js fs-3 text-success"></i>
              </div>
              <div className="floating-tech-icon css-icon">
                <i className="bi bi-filetype-css fs-3 text-info"></i>
              </div>
            </div>

            {/* Experience badge */}
            <div className="experience-badge mt-4 bg-dark text-white rounded-pill px-4 py-2 d-inline-flex align-items-center">
              <i className="bi bi-award-fill me-2 text-warning"></i>
              <span>3 Year Softeware Student</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <div className="d-flex flex-column align-items-center">
            <span className="text-white opacity-75 mb-2">Scroll Down</span>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
