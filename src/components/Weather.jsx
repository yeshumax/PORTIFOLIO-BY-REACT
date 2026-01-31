import { useState } from "react";
import searchIcon from "../assets/image.png";

const API_KEY = "67c12e0b547a4d31946171f54d28d2af";

const Weather = () => {
  const [weather, setWeather] = useState({
    icon: "https://openweathermap.org/img/wn/01d@4x.png",
    temperature: "24",
    city: "Bahir Dar",
    humidity: "65",
    windSpeed: "12",
    description: "Sunny",
    feelsLike: "25",
    pressure: "1013",
    visibility: "10",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.city.value.trim();
    const searchCity = city || "Addis Ababa";

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&APPID=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      setWeather({
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
        temperature: Math.round(data.main.temp),
        city: data.name,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6),
        description: data.weather[0].description,
        feelsLike: Math.round(data.main.feels_like),
        pressure: data.main.pressure,
        visibility: Math.round(data.visibility / 1000) || "10",
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(
        "Unable to fetch weather data. Please check the city name and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="weather container-fluid py-4 py-md-5"
      style={{ paddingTop: "80px" }}
    >
      {/* Main Weather Card */}
      <div className="weather-card mx-auto p-3 p-md-4 p-lg-5 rounded-4">
        {/* Header */}
        <div className="weather-header mb-4 mb-md-5">
          <h1 className="h2 h1-md fw-bold text-light mb-2 mb-md-3">
            <i className="bi bi-cloud-sun-fill me-2 me-md-3 text-warning"></i>
            Weather Dashboard
          </h1>
          <p className="text-light opacity-75 fs-6 fs-md-5">
            Get accurate, real-time weather information for any location
          </p>
        </div>

        {/* Search Section */}
        <div className="search-container mb-4 mb-md-5">
          <form onSubmit={handleSubmit} className="position-relative">
            <div className="input-group input-group-lg search-glow">
              <input
                type="search"
                className="form-control form-control-lg px-3 px-md-4 py-2 py-md-3 fw-medium"
                placeholder="Enter city name (e.g., Adis Abeba, Bahir Dar, New York)..."
                name="city"
                disabled={loading}
                style={{
                  borderRadius: "50px 0 0 50px",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              />
              <button
                className="btn btn-primary px-3 px-md-4 d-flex align-items-center"
                type="submit"
                disabled={loading}
                style={{
                  borderRadius: "0 50px 50px 0",
                  background: "linear-gradient(135deg, #0d6efd, #00b4d8)",
                }}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    <span className="d-none d-md-inline">Loading...</span>
                  </>
                ) : (
                  <>
                    <img
                      src={searchIcon}
                      alt="Search"
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <span className="d-none d-md-inline">Search</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {error && (
            <div
              className="alert alert-danger mt-3 fade-in w-100 w-md-75 mx-auto"
              role="alert"
            >
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {error}
            </div>
          )}
        </div>

        {/* Current Weather Display */}
        <div className="weather-display">
          {/* Location and Temperature */}
          <div className="location-temp mb-4 mb-md-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-6 col-lg-5 mb-4 mb-md-0">
                <div className="d-flex justify-content-center justify-content-md-end">
                  <img
                    src={weather.icon}
                    alt="Weather Icon"
                    className="weather-icon-responsive img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <div className="text-center text-md-start">
                  <h2 className="display-3 display-md-1 fw-bold text-light mb-2">
                    {weather.temperature}°C
                  </h2>
                  <h3 className="h3 h2-md text-light fw-bold mb-2">
                    <i className="bi bi-geo-alt-fill me-2 text-info"></i>
                    {weather.city}
                  </h3>
                  <p className="text-light text-capitalize fs-5 fs-md-4 opacity-75 mb-2">
                    {weather.description}
                  </p>
                  <p className="text-light opacity-75 fs-6">
                    Feels like {weather.feelsLike}°C
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Stats Grid */}
          <div className="weather-stats-grid row g-3 g-md-4 mb-4 mb-md-5">
            <div className="col-6 col-md-3">
              <div className="stat-card-responsive p-3 p-md-4 rounded-4 text-center h-100">
                <div className="stat-icon mb-2 mb-md-3">
                  <i className="bi bi-droplet-fill fs-3 fs-md-1 text-info"></i>
                </div>
                <h4 className="h6 h5-md text-light mb-1 mb-md-2">Humidity</h4>
                <p className="display-4 display-md-5 fw-bold text-light mb-0">
                  {weather.humidity}%
                </p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card-responsive p-3 p-md-4 rounded-4 text-center h-100">
                <div className="stat-icon mb-2 mb-md-3">
                  <i className="bi bi-wind fs-3 fs-md-1 text-primary"></i>
                </div>
                <h4 className="h6 h5-md text-light mb-1 mb-md-2">Wind Speed</h4>
                <p className="display-4 display-md-5 fw-bold text-light mb-0">
                  {weather.windSpeed} km/h
                </p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card-responsive p-3 p-md-4 rounded-4 text-center h-100">
                <div className="stat-icon mb-2 mb-md-3">
                  <i className="bi bi-speedometer2 fs-3 fs-md-1 text-warning"></i>
                </div>
                <h4 className="h6 h5-md text-light mb-1 mb-md-2">Pressure</h4>
                <p className="display-4 display-md-5 fw-bold text-light mb-0">
                  {weather.pressure} hPa
                </p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="stat-card-responsive p-3 p-md-4 rounded-4 text-center h-100">
                <div className="stat-icon mb-2 mb-md-3">
                  <i className="bi bi-eye-fill fs-3 fs-md-1 text-success"></i>
                </div>
                <h4 className="h6 h5-md text-light mb-1 mb-md-2">Visibility</h4>
                <p className="display-4 display-md-5 fw-bold text-light mb-0">
                  {weather.visibility} km
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="additional-info-section p-3 p-md-4 rounded-4">
            <div className="row g-2 g-md-3">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-clock-history fs-4 fs-md-2 text-info me-2 me-md-3"></i>
                  <div>
                    <p className="text-light opacity-75 small mb-1">
                      Last Updated
                    </p>
                    <p className="text-light fw-medium mb-0">
                      {new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3 mb-md-0">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-shield-check fs-4 fs-md-2 text-success me-2 me-md-3"></i>
                  <div>
                    <p className="text-light opacity-75 small mb-1">
                      Data Accuracy
                    </p>
                    <p className="text-light fw-medium mb-0">High Precision</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-database fs-4 fs-md-2 text-warning me-2 me-md-3"></i>
                  <div>
                    <p className="text-light opacity-75 small mb-1">Source</p>
                    <p className="text-light fw-medium mb-0">OpenWeatherMap</p>
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

export default Weather;
