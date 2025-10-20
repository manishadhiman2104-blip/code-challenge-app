import React, { useState } from "react";
import "./CodeEditor.css";

function CodeEditor({ question, onBack }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    let result = "";
    try {
      switch (question.functionName) {
        case "reverseString":
          result = input.split("").reverse().join("");
          break;
        case "findMax":
          const arr = JSON.parse(input);
          result = Math.max(...arr);
          break;
        case "isPalindrome":
          const rev = input.split("").reverse().join("");
          result = input === rev ? "true" : "false";
          break;
        default:
          result = "⚠️ Function not implemented.";
      }
    } catch (e) {
      result = "❌ Error: Invalid input format!";
    }
    setOutput(result);
  };

  return (
    <div className="challenge-container">
      {/* Left Panel: Question */}
      <div className="left-panel">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h2 className="question-title">{question.title}</h2>
        <span className={`difficulty ${question.difficulty.toLowerCase()}`}>
          {question.difficulty}
        </span>
        <p className="question-description">{question.description}</p>
        <h4>Example:</h4>
        <pre className="example">
          Input: {question.exampleInput}
          {"\n"}
          Output: {question.exampleOutput}
        </pre>
        {question.hint && (
          <>
            <h4>Hint:</h4>
            <p className="hint">{question.hint}</p>
          </>
        )}
      </div>

      {/* Right Panel: Code Editor */}
      <div className="right-panel">
        <h3>Code Editor</h3>
        <textarea
          className="code-input"
          rows="8"
          placeholder="Enter your input here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="run-btn" onClick={runCode}>
          Run ▶
        </button>
        <div className="output-section">
          <h4>Console Output:</h4>
          <div className="console">{output}</div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
