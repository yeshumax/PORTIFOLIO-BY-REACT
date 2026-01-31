import React from "react";
import "./index.css";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Weather />
      <Footer />
    </div>
  );
};

export default App;
