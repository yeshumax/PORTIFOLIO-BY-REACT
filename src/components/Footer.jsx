import React from "react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer bg-gradient-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand & Description */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h2
              className="h3 mb-3 text-gradient"
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
            >
              YESHWOND DEV
            </h2>
            <p className="text-light opacity-75 mb-4">
              Full Stack Developer & UI/UX Designer creating beautiful,
              functional websites and applications with modern technologies.
              Passionate about clean code and user-centric design.
            </p>
            <div className="social-icons d-flex flex-wrap gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-light"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-light"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://wa.me/251936825567"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-light"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-light"
                aria-label="Telegram"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-light"
                aria-label="Discord"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-lg-8">
            <div className="row">
              {/* Quick Links */}
              <div className="col-md-4 mb-4 mb-md-0">
                <h4 className="h5 mb-3 text-gradient-accent">QUICK LINKS</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <button
                      className="hover-link text-light opacity-75 text-decoration-none border-0 bg-transparent p-0 text-start"
                      onClick={scrollToTop}
                    >
                      Home
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      className="hover-link text-light opacity-75 text-decoration-none border-0 bg-transparent p-0 text-start"
                      onClick={() => scrollToSection("about")}
                    >
                      About
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      className="hover-link text-light opacity-75 text-decoration-none border-0 bg-transparent p-0 text-start"
                      onClick={() => scrollToSection("skills")}
                    >
                      Skills
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      className="hover-link text-light opacity-75 text-decoration-none border-0 bg-transparent p-0 text-start"
                      onClick={() => scrollToSection("projects")}
                    >
                      Projects
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      className="hover-link text-light opacity-75 text-decoration-none border-0 bg-transparent p-0 text-start"
                      onClick={() => scrollToSection("contact")}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="col-md-4 mb-4 mb-md-0">
                <h4 className="h5 mb-3 text-gradient-accent">SERVICES</h4>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="text-light opacity-75 service-item">
                      Web Development
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-light opacity-75 service-item">
                      UI/UX Design
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-light opacity-75 service-item">
                      Responsive Design
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-light opacity-75 service-item">
                      API Integration
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-light opacity-75 service-item">
                      Performance Optimization
                    </span>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-md-4">
                <h4 className="h5 mb-3 text-gradient-accent">CONTACT</h4>
                <ul className="list-unstyled contact-info">
                  <li className="mb-3">
                    <div className="text-light opacity-75">Email</div>
                    <a
                      href="mailto:lisanwory@gmail.com"
                      className="contact-link text-light text-decoration-none d-block mt-1"
                    >
                      lisanwory@gmail.com
                    </a>
                  </li>
                  <li className="mb-3">
                    <div className="text-light opacity-75">Phone</div>
                    <a
                      href="tel:+251936825567"
                      className="contact-link text-light text-decoration-none d-block mt-1"
                    >
                      +251 936 825567
                    </a>
                  </li>
                  <li className="mb-3">
                    <div className="text-light opacity-75">Location</div>
                    <span className="text-light opacity-75 d-block mt-1 location-text">
                      ETHIOPIA, TEPI CAMPUS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5 opacity-25" />

        {/* Newsletter & Copyright */}
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="newsletter-section">
              <h5 className="mb-3 text-gradient-accent">Stay Updated</h5>
              <p className="text-light opacity-75 mb-3">
                Subscribe to my newsletter for the latest projects and updates.
              </p>
              <form className="d-flex flex-wrap gap-2 newsletter-form">
                <input
                  type="email"
                  className="form-control bg-transparent border-light text-light newsletter-input"
                  placeholder="Your email"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-gradient btn-animated newsletter-btn"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-6 text-lg-end">
            <p className="text-light opacity-75 mb-2 copyright-text">
              © {new Date().getFullYear()} Yeshwond Lismwork. All rights
              reserved.
            </p>
            <p className="text-light opacity-75 tech-stack">
              Made with <span className="text-gradient-accent">React</span> &{" "}
              <span className="text-gradient-accent">Bootstrap</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
