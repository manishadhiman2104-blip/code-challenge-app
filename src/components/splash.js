import React from "react";
import "./splash.css";
import movingImg from "./hello2.png";
import codingBg from "./codingbackground.jpg";

function Splash({ onStart }) {
  return (
    <div
      className="splash-wrapper"
      style={{ backgroundImage: `url(${codingBg})` }}
    >
      {/* Floating animation image at the top */}
      <img src={movingImg} alt="banner" className="floating-banner" />

      {/* Splash card */}
      <div className="splash-card">
        <h1 className="splash-title">CODE CHALLENGE APP♨️</h1>
        <p className="splash-sub">✈️Are you ready to prepare for your placements?</p>

        <button
          className="splash-start-btn"
          onClick={onStart}
          aria-label="Start preparing for placements"
        >
          Start ▶
        </button>

        <div className="splash-footer">
          <small>Top 80 placement questions • Practice • Compete • Level Up✍️</small>
        </div>
      </div>
    </div>
  );
}

export default Splash;
