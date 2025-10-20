import React, { useState, useEffect } from "react";
import "./SolutionPage.css";
import { solutions } from "../data/question";

function SolutionPage({ question, onBack }) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [errorLine, setErrorLine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [runtime, setRuntime] = useState("0s");
  const [memory, setMemory] = useState("0MB");
  const [language, setLanguage] = useState("Java");

  useEffect(() => {
    setCode(solutions[question.title] || "// Write your solution here...");
    setOutput("");
    setErrorLine(null);
    setRuntime("0s");
    setMemory("0MB");
  }, [question]);

  const runCode = () => {
    if (!code.trim()) {
      alert("⚠️ Write code first!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      // Simulate output
      setOutput("✅ Code executed successfully!");
      setRuntime("0.02s");
      setMemory("15MB");

      // Simulate compile error detection
      if (code.toLowerCase().includes("error")) {
        setErrorLine(3);
        setOutput("⚠️ Compilation Error at line 3");
      } else {
        setErrorLine(null);
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="solution-page">
      <div className="header">
        <button className="back-btn" onClick={onBack}>← Back to Questions</button>
      </div>

      <div className="main-content">
        <div className="left-panel">
          <h1 className="question-title">{question.title}</h1>
          <span className={`difficulty ${question.level.toLowerCase()}`}>{question.level}</span>

          <section className="desc-box">
            <h3>📝 Description</h3>
            <p>{question.description || "No description provided."}</p>
          </section>

          <section className="io-section">
            <h3>📥 Input</h3>
            <pre>{question.input || "N/A"}</pre>
            <h3>📤 Output</h3>
            <pre>{question.output || "N/A"}</pre>
          </section>

          {question.example && (
            <section className="example-box">
              <h3>📚 Example</h3>
              <pre>{question.example}</pre>
            </section>
          )}

          {question.hint && (
            <section className="hint-box">
              <h3>💡 Hint</h3>
              <p>{question.hint}</p>
            </section>
          )}
        </div>

        <div className="right-panel">
          <div className="editor-header">
            <h3>💻 Write & Run Code</h3>
            <div className="controls">
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option>Java</option>
                <option>Python</option>
                <option>C++</option>
                <option>JavaScript</option>
              </select>
              <button className="run-btn" onClick={runCode} disabled={loading}>
                {loading ? "⏳ Running..." : "▶️ Run Code"}
              </button>
            </div>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={`code-editor ${errorLine ? "error-border" : ""}`}
            placeholder={`// Write your ${language} code here...`}
          />

          {errorLine && (
            <p className="error-line">⚠️ Compilation Error at Line {errorLine}</p>
          )}

          <div className="result-panel">
            <div className="stats">
              <p><strong>⏱ Runtime:</strong> {runtime}</p>
              <p><strong>🧠 Memory:</strong> {memory}</p>
            </div>

            <div className="output-section">
              <h3>🧾 Output:</h3>
              <pre className={output.toLowerCase().includes("error") ? "error-output" : ""}>
                {output || "Output will appear here."}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionPage;
