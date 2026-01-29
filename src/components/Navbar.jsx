import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const [activeHover, setActiveHover] = useState(null);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" ? "active" : "";
    }
    return location.pathname.startsWith(path) ? "active" : "";
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  // Close navbar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Navigation items with icons
  const navItems = [
    { path: "/", label: "Home", icon: "bi-house-door" },
    { path: "/about", label: "About", icon: "bi-person" },
    { path: "/skills", label: "Skills", icon: "bi-tools" },
    { path: "/projects", label: "Projects", icon: "bi-folder" },
    { path: "/contact", label: "Contact", icon: "bi-envelope" },
  ];

  // Calculate progress indicator
  const currentIndex = navItems.findIndex((item) => {
    if (item.path === "/") return location.pathname === "/";
    return location.pathname.startsWith(item.path);
  });
  const progressPercentage =
    currentIndex >= 0 ? ((currentIndex + 1) / navItems.length) * 100 : 0;

  return (
    <nav
      ref={navbarRef}
      className={`navbar navbar-expand-lg navbar-light fixed-top transition-all ${scrolled ? "scrolled" : ""} ${expanded ? "navbar-expanded" : ""}`}
    >
      <div className="container position-relative">
        {/* Brand/Logo */}
        <Link
          className="navbar-brand d-flex align-items-center fw-bold text-decoration-none"
          to="/"
          onClick={closeNavbar}
          onMouseEnter={() => setActiveHover("brand")}
          onMouseLeave={() => setActiveHover(null)}
        >
          <div className="brand-icon me-3">
            <i className="bi bi-code-slash fs-4"></i>
          </div>
          <div className="d-flex flex-column">
            <span className="text-dark fs-4 fw-bold lh-1">YESHWOND</span>
            <span className="text-gradient fs-6 fw-semibold">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Bootstrap Icons Toggle Button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          {expanded ? (
            <i className="bi bi-x-lg fs-3"></i> /* X icon when expanded */
          ) : (
            <i className="bi bi-list fs-3"></i> /* Hamburger icon when collapsed */
          )}
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse justify-content-between ${expanded ? "show" : ""}`}
          id="navbarContent"
        >
          {/* Navigation Items */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item mx-1">
                <Link
                  className={`nav-link position-relative px-4 py-3 rounded-pill transition-all ${isActive(item.path)}`}
                  to={item.path}
                  onClick={closeNavbar}
                  onMouseEnter={() => setActiveHover(item.path)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <i className={`bi ${item.icon} me-2`}></i>
                  <span className="fw-medium">{item.label}</span>
                  {/* Active indicator dot */}
                  {isActive(item.path) && (
                    <span className="active-dot position-absolute"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Optional: Social icons or CTA button */}
          <div className="d-lg-flex align-items-center mt-3 mt-lg-0">
            <a
              href="https://github.com/yeshumax"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm rounded-circle me-2"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yeshwond-lisanwork-430098397/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm rounded-circle me-2"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="progress-indicator">
        <div
          className="progress-bar"
          style={{
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>
    </nav>
  );
}

export default Navbar;
