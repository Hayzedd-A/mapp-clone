import React from "react";
import Button from "./Button";

function BannerText() {
  return (
    <div className="bannerText">
      <p className="main">Track, Organise and Transfer your Wealth</p>
      <div className="aside">
        <div className="textContent">
          <p>
            Seamlessly track your assets, designate beneficiaries and access
            estate planning products tailored to your needs.
          </p>
          <div className="button">
            <Button bgColor="#008145" color="white">
              Get Started
            </Button>
          </div>
        </div>
        <div className="action">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.75"
              y="0.75"
              width="58.5"
              height="58.5"
              rx="29.25"
              stroke="#F7FBF9"
              stroke-opacity="0.2"
              stroke-width="1.5"
            />
            <path
              d="M29.9697 46.5303C30.2626 46.8232 30.7374 46.8232 31.0303 46.5303L35.8033 41.7574C36.0962 41.4645 36.0962 40.9896 35.8033 40.6967C35.5104 40.4038 35.0355 40.4038 34.7426 40.6967L30.5 44.9393L26.2574 40.6967C25.9645 40.4038 25.4896 40.4038 25.1967 40.6967C24.9038 40.9896 24.9038 41.4645 25.1967 41.7574L29.9697 46.5303ZM29.75 13L29.75 46L31.25 46L31.25 13L29.75 13Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BannerText;
