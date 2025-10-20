import React, { useState } from "react";
import "./QuestionList.css";
import { solutions } from "../data/question";

function QuestionList({ category, questions, onBack }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [viewSolution, setViewSolution] = useState(false);
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [solvedQuestions, setSolvedQuestions] = useState([]);

  // ----------------- Event Handlers -----------------
  const handleSolve = (q) => {
    setSelectedQuestion(q);
    setViewSolution(false);
    setUserCode("");
    setOutput("");
  };

  const handleViewSolutionClick = (q) => {
    setSelectedQuestion(q);
    setViewSolution(true);
  };

  const handleRunCode = () => {
    if (!userCode.trim()) {
      alert("⚠️ Please write some code first!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const cleanUser = userCode.replace(/\s+/g, "");
      const cleanSolution = (solutions[selectedQuestion.title] || "").replace(/\s+/g, "");
      if (cleanUser === cleanSolution) {
        setOutput("✅ Your code is correct!");
        if (!solvedQuestions.includes(selectedQuestion.title)) {
          setSolvedQuestions([...solvedQuestions, selectedQuestion.title]);
        }
      } else {
        setOutput("❌ Incorrect output. Try again!");
      }
      setLoading(false);
    }, 700);
  };

  // ----------------- Solve / Solution Page -----------------
  if (selectedQuestion) {
    return (
      <div className="challenge-container fade-in">
        <div className="left-panel">
          <button className="back-btn" onClick={() => setSelectedQuestion(null)}>← Back</button>
          <h2 className="question-title">{selectedQuestion.title}</h2>

          <div className="meta">
            <span className={`difficulty ${selectedQuestion.level.toLowerCase()}`}>
              {selectedQuestion.level}
            </span>
          </div>

          <p className="question-description">{selectedQuestion.description}</p>

          <h4>Example:</h4>
          <pre className="example">
            Input: {selectedQuestion.input}
            {"\n"}
            Output: {selectedQuestion.output}
          </pre>

          {!viewSolution && selectedQuestion.hint && (
            <>
              <h4>💡 Hint:</h4>
              <p className="hint">{selectedQuestion.hint}</p>
            </>
          )}
        </div>

        <div className="right-panel">
          {!viewSolution ? (
            <>
              <h3 className="editor-title">🧑‍💻 Code Editor</h3>
              <textarea
                className="code-input"
                rows="12"
                placeholder="// Write your code here..."
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
              />
              <button className="run-btn" onClick={handleRunCode} disabled={loading}>
                {loading ? "⏳ Running..." : "▶ Run Code"}
              </button>

              {output && (
                <div className={`output-section ${output.includes("✅") ? "success" : "error"}`}>
                  <strong>Console Output:</strong>
                  <div className="console">{output}</div>
                </div>
              )}
            </>
          ) : (
            <>
              <h3 className="solution-heading">💡 Official Solution</h3>
              <pre className="solution-box">
                {solutions[selectedQuestion.title] || "Solution not available."}
              </pre>
            </>
          )}
        </div>
      </div>
    );
  }

  // ----------------- Question List Page -----------------
 // ----------------- Question List Page -----------------
return (
  <div className="question-list-container fade-in">
    {/* Back button removed for QuestionList only */}
    {/* <button className="back-btn top" onClick={onBack}>← Back</button> */}

    <h2 className="category-heading-box">{category} Challenges</h2>

    <div className="question-list-vertical">
      {questions.length === 0 ? (
        <p>No questions available in this category.</p>
      ) : (
        questions.map((q, index) => (
          <div key={index} className="question-card pop">
            <div className="question-meta">
              <span className="q-title">{index + 1}. {q.title}</span>
              <span className={`difficulty ${q.level.toLowerCase()}`}>{q.level}</span>
              {solvedQuestions.includes(q.title) && (
                <span className="solved-tick">✔️ Solved</span>
              )}
            </div>

            <div className="action-wrapper">
              <button className="solve-btn" onClick={() => handleSolve(q)}>Solve 🚀</button>
              <button className="solution-btn" onClick={() => handleViewSolutionClick(q)}>View 💡</button>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);

}

export default QuestionList;
