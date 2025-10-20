
import React, { useState } from "react";
import Splash from "./components/splash";
import CategoryList from "./components/Categorylist";
import QuestionList from "./components/Questionlist";
import SolvePage from "./components/solvepage";
import SolutionPage from "./components/solutionpage";
import Leaderboard from "./components/leaderboard";
import AuthDemo from "./components/authdemo";
import questionsData from "./data/question";
import leaderboardData from "./data/leaderboarddata";
import skyBlueBg from "./data/darkblue.jpg";

import "./App.css";

function App() {
  const [page, setPage] = useState("start");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [viewMode, setViewMode] = useState("");
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // ---------------------- Solution Page ----------------------
  if (selectedQuestion && viewMode === "solution") {
    return (
      <SolutionPage
        question={selectedQuestion}
        onBack={() => {
          setViewMode("");
          setSelectedQuestion(null);
        }}
      />
    );
  }

  // ---------------------- Solve Page ----------------------
  if (selectedQuestion && viewMode === "solve") {
    return (
      <SolvePage
        question={selectedQuestion}
        onBack={() => {
          setSelectedQuestion(null);
          setViewMode("");
        }}
      />
    );
  }

  // ---------------------- Question List Page ----------------------
  if (selectedCategory) {
    const category = questionsData.find((c) => c.category === selectedCategory);
    return (
      <div className="category-page-container">
        <button className="back-btn" onClick={() => setSelectedCategory(null)}>
          ← Back to Categories
        </button>
        <QuestionList
          category={selectedCategory}
          questions={category.questions}
          onSolve={(q) => {
            setSelectedQuestion(q);
            setViewMode("solve");
          }}
          onViewSolution={(q) => {
            setSelectedQuestion(q);
            setViewMode("solution");
          }}
        />
      </div>
    );
  }

  // ---------------------- Start Page ----------------------
  if (page === "start") {
    return <Splash onStart={() => setPage("home")} />;
  }

  // ---------------------- Home Page ----------------------
  // ---------------------- Home Page ----------------------
if (page === "home") {
  return (
    <div
      className="app-home-container"
      style={{
        backgroundImage: `url(${skyBlueBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <header className="header-container">
        <h1 className="main-title">CODE CHALLENGE APP♨️</h1>

        <div className="header-right">
          <button
            className="leaderboard-btn"
            onClick={() => setShowLeaderboard(!showLeaderboard)}
          >
            {showLeaderboard ? "Hide 🏆 Leaderboard" : "Show 🏆 Leaderboard"}
          </button>
          <AuthDemo hideTitle={true} />
        </div>
      </header>

      {showLeaderboard && (
        <div className="leaderboard-wrapper">
          <Leaderboard
            data={leaderboardData}
            onBack={() => setShowLeaderboard(false)}
          />
        </div>
      )}

      <main className="main-content">
        <div className="home-center-wrapper">
          <h1 className="home-heading">
            <span className="top-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="#FFD700"
                stroke="#FFA500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10 12 2" />
              </svg>
            </span>
            Top 80 Questions for Placement Preparation
          </h1>

          {/* 🔹 Key Features Section */}
          <div className="key-features fade-in">
            <h2>✨ Key Features of This App ✨</h2>
            <ul>
              <li>🔥 Important DSA questions for placement preparation.</li>
              <li>🧩 Detailed solutions and hints for every question.</li>
              <li>💡 Input and Output provided for better understanding.</li>
              <li>💻 Run your code directly in the built-in code editor.</li>
              <li>🚀 Master your DSA skills with categorized questions.</li>
              <li>🎯 Questions available from Easy ➤ Medium ➤ Hard levels.</li>
              <li>🧠 Perfect for beginners to advanced learners.</li>
            </ul>
          </div>

          <button
            className="home-start-btn"
            onClick={() => setPage("categories")}
          >
            Start✍️
          </button>
        </div>
      </main>
    </div>
  );
}

    
  

  // ---------------------- Categories Page ----------------------
  if (page === "categories") {
    return (
      <div className="categories-page">
        <button className="back-btn" onClick={() => setPage("home")}>
          ← Back to Home
        </button>
        <CategoryList
          categories={questionsData.map((c) => c.category)}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
    );
  }

  return null;
}

export default App;
