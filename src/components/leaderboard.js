// Leaderboard.jsx


import React from "react";
import leaderboardData from "../data/leaderboarddata";
import "./leaderboard.css";

function Leaderboard({ data, onBack }) {
  return (
    <div className="leaderboard-container">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>
      <h2 className="leaderboard-heading"> Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr className="table-header">
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className="leaderboard-row">
              <td className="rank">{index + 1}</td>
              <td className="name">{user.name}</td>
              <td className="score">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
