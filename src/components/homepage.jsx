import React from "react";

function HomePage({ onStart }) {
  return (
    <div className="category-container">
      {/* 🔹 Top Heading with Star Icon */}
      <h1 className="main-heading fade-in">
        <span className="top-icon">
          ⭐
        </span>
        Top 80 Questions for Placement Preparation
      </h1>
      <br />

      {/* 🔹 Sub Heading */}
      <h2 className="sub-heading fade-in-delay">
        Select a <span className="highlight">Data Structure</span> to Begin ✈️
      </h2>

      {/* 🔹 Start Button */}
      <button className="start-btn" onClick={onStart}>
        Start
      </button>
    </div>
  );
}

export default HomePage;
