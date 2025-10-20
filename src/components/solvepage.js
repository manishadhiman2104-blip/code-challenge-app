import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import Confetti from "react-confetti";
import "./SolvePage.css";

function SolvePage({ question, onBack }) {
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);

  const handleRunCode = () => {
    if (!userCode.trim()) {
      alert("⚠️ Please write some code first!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const cleanUser = userCode.replace(/\s+/g, "");
      const cleanSolution = (question.solution || "").replace(/\s+/g, "");
      if (cleanUser === cleanSolution) {
        setOutput("✅ Your code is correct!");
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        setOutput("❌ There is an error in your code!");
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="solve-page">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      <button className="back-btn" onClick={onBack}>← Back</button>

      <h2 className="question-title">{question.title}</h2>
      <p className="question-desc">{question.description}</p>

      <div className="hint-section">
        <button className="hint-btn" onClick={() => setHintOpen(!hintOpen)}>
          {hintOpen ? "Hide Hint 💡" : "Show Hint 💡"}
        </button>
        {hintOpen && <p className="hint-text">{question.hint}</p>}
      </div>

      <div className="editor-section">
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          placeholder="// Write your code here..."
          className="code-input"
        />
        <button className="run-btn" onClick={handleRunCode} disabled={loading}>
          {loading ? "Running..." : "▶ Run Code"}
        </button>
      </div>

      {output && (
        <div className="output-section">
          <strong>Console Output:</strong>
          <SyntaxHighlighter language="javascript" style={duotoneLight}>
            {output}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}

export default SolvePage;
