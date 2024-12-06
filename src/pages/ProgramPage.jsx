import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { programsData } from "../data/programs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AnimatedBackground } from 'animated-backgrounds';
function ProgramPage() {
  const { programId } = useParams();
  const [studied, setStudied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  let program;

  // Find the program based on programId
  Object.keys(programsData).forEach((category) => {
    programsData[category].forEach((item) => {
      if (item.id === programId) program = item;
    });
  });

  // Load studied status from localStorage
  useEffect(() => {
    const studiedPrograms = JSON.parse(localStorage.getItem("studiedPrograms")) || {};
    if (studiedPrograms[programId]) {
      setStudied(true);
    }
  }, [programId]);

  // Save studied status to localStorage
  const handleStudiedToggle = () => {
    const studiedPrograms = JSON.parse(localStorage.getItem("studiedPrograms")) || {};
    if (studied) {
      delete studiedPrograms[programId];
    } else {
      studiedPrograms[programId] = true;
    }
    localStorage.setItem("studiedPrograms", JSON.stringify(studiedPrograms));
    setStudied(!studied);
  };

  if (!program) {
    return <div className="container">Program not found</div>;
  }

  return (
    <div className="card">
        <AnimatedBackground animationName="starryNight" />
      <h2 className="card-title">{program.name}</h2>
      <div className="card-content">
        <button
          onClick={handleStudiedToggle}
          className={`btn ${studied ? "btn-success" : "btn-default"}`}
        >
          {studied ? "✓ Studied" : "Mark as Studied"}
        </button>
        
        <SyntaxHighlighter className="code" language="python" style={vscDarkPlus}>
          {program.code}
        </SyntaxHighlighter>
        
      </div>
      <div className="card-actions">
        <button
          onClick={() => setShowOutput(!showOutput)}
          className="btn btn-primary"
        >
          {showOutput ? "Hide Output" : "Show Output"}
        </button>
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="btn btn-info"
        >
          {showExplanation ? "Hide Explanation" : "Show Explanation"}
        </button>
      </div>
      {showOutput && (
        <div className="card-output">
          <h3>Output:</h3>
          <pre>{program.output}</pre>
        </div>
      )}
      {showExplanation && (
        <div className="card-explanation">
          <h3>Explanation:</h3>
          <p>{program.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default ProgramPage;
