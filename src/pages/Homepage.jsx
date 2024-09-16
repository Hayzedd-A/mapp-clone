import React from "react";
import Navbar from "../components/Navbar";
import "../styles/styles.css";
import BannerText from "../components/BannerText";
import Features from "../components/Features";
import feature2 from "../assets/images/Frame2.png";
import feature1 from "../assets/images/track.png";
import feature3 from "../assets/images/Frame3.png";

function Homepage() {
  const keyFeatures = [
    {
      imgSrc: feature1,
      heading: "Keep Track of your Assets",
      body: "Track your assets and monitor their growth seamlessly. With MAPP the total value of your cash, investments, real estate and digital assets are organised and consolidated.",
    },
    {
      imgSrc: feature2,
      heading: "Assign Beneficiaries",
      body: "Wealth Transfer is an essential part of your wealth journey, Don’t leave the individuals who depend on you financially stranded. Designate beneficiaries to receive your assets in your absence. ",
    },
    {
      imgSrc: feature3,
      heading: "Keep Tabs on your Net worth",
      body: "Monitor your wealth with precision. Our intuitive dashboard provides real-time updates on your assets, giving you the insight you need to make informed financial decisions.",
    },
    // Add more features here...
  ];
  return (
    <div>
      <div className="banner">
        <Navbar />
        <BannerText />
      </div>
      <div className="keyFeatures">
        <h2>Key Features</h2>
        <div className="content">
          {keyFeatures.map((feature, index) => (
            <Features
              key={"key" + index}
              imgSrc={feature.imgSrc}
              heading={feature.heading}
              body={feature.body}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
