import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "bg-dark-blue shadow-lg" : "bg-semi-transparent"}`}
      style={{
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: 1030,
        padding: "1rem 0",
      }}
    >
      <div className="container">
        {/* Logo/Title with Animation */}
        <div className="navbar-brand d-flex align-items-center">
          <div className="position-relative me-3">
            <i className="bi bi-cloud-lightning-rain-fill fs-1 text-warning"></i>
            <div className="pulse-ring"></div>
          </div>
          <div className="d-flex flex-column">
            <h1 className="h3 mb-0 text-light fw-bold gradient-text">
              WeatherCast Pro
            </h1>
            <small className="text-light opacity-75 d-flex align-items-center">
              <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
              Live Global Updates
            </small>
          </div>
        </div>

        {/* Animated Weather Indicators */}
        <div className="d-none d-lg-flex align-items-center mx-auto">
          <div className="weather-indicators d-flex gap-4">
            <div className="indicator-item text-center px-4 py-3 rounded-pill glow-effect">
              <i className="bi bi-thermometer-sun text-warning fs-4 d-block mb-2"></i>
              <span className="text-light small fw-medium">Real-time</span>
            </div>
            <div className="indicator-item text-center px-4 py-3 rounded-pill glow-effect">
              <i className="bi bi-globe-americas text-info fs-4 d-block mb-2"></i>
              <span className="text-light small fw-medium">Global</span>
            </div>
            <div className="indicator-item text-center px-4 py-3 rounded-pill glow-effect">
              <i className="bi bi-lightning-charge text-success fs-4 d-block mb-2"></i>
              <span className="text-light small fw-medium">Instant</span>
            </div>
          </div>
        </div>

        {/* Source Code Button with Glow */}
        <div className="d-flex align-items-center">
          <a
            href="https://github.com/yeshumax"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow btn btn-lg d-flex align-items-center"
          >
            <i className="bi bi-github fs-5 me-2"></i>
            <span className="fw-semibold">View Source Code</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
