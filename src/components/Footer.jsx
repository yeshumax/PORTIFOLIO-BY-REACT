const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Personal Information */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h2
              className="h4 mb-3 text-primary fw-bold"
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
            >
              YESHWOND LISNWORK
            </h2>
            <p className="text-light opacity-75 mb-3">
              Full Stack Developer & UI/UX Designer with passion for creating
              beautiful, functional web applications using modern technologies.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/yeshwond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yeshwond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://facebook.com/yeshwond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://t.me/yeshwond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
                aria-label="Telegram"
              >
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>

          {/* Policies & Legal */}
          <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
            <h4 className="h5 mb-3 text-info">Legal</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/terms-of-service"
                  className="text-light opacity-75 text-decoration-none"
                >
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/privacy-policy"
                  className="text-light opacity-75 text-decoration-none"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/cookies"
                  className="text-light opacity-75 text-decoration-none"
                >
                  Cookie Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/disclaimer"
                  className="text-light opacity-75 text-decoration-none"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3">
            <h4 className="h5 mb-3 text-info">Contact</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <div className="text-light opacity-75 small">Email</div>
                <a
                  href="mailto:lisanworky@gmail.com"
                  className="text-light text-decoration-none"
                >
                  lisanworky@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <div className="text-light opacity-75 small">Phone</div>
                <a
                  href="tel:+251936825567"
                  className="text-light text-decoration-none"
                >
                  +251 936 825567
                </a>
              </li>
              <li className="mb-2">
                <div className="text-light opacity-75 small">Location</div>
                <span className="text-light opacity-75">
                  Ethiopia, Tepi Campus
                </span>
              </li>
              <li className="mb-2">
                <div className="text-light opacity-75 small">Portfolio</div>
                <a
                  href="https://yeshwond.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  yeshwond.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 opacity-25" />

        {/* Copyright & Technology */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="text-light opacity-75 mb-0">
              © {new Date().getFullYear()} Yeshwond Lisnwork. All rights
              reserved.
            </p>
            <p className="text-light opacity-75 small mt-1">
              Developed and maintained with passion
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-light opacity-75 mb-0">
              Built with
              <span className="text-info mx-1">React</span>•
              <span className="text-info mx-1">Bootstrap</span>•
              <span className="text-info mx-1">CSS3</span>
            </p>
            <p className="text-light opacity-75 small mt-1">
              <i className="fas fa-heart text-danger me-1"></i>
              Made in Ethiopia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
