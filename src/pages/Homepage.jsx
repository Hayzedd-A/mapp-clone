import React from "react";
import Navbar from "../components/Navbar";
import "../styles/styles.css";
import BannerText from "../components/BannerText";
import Features from "../components/Features";

function Homepage() {
  return (
    <div>
      <div className="banner">
        <Navbar />
        <BannerText />
      </div>
      <div className="keyFeatures">
        <h2>Key Features</h2>
        <div className="content">
          <Features />
          <Features />
          <Features />
          <Features />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
