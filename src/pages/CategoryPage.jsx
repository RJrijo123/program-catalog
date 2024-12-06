import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { programsData } from "../data/programs";
import "./CategoryPage.css"
import { AnimatedBackground } from "animated-backgrounds";
function CategoryPage() {
  const { category } = useParams();
  const [studiedPrograms, setStudiedPrograms] = useState({});

  // Load studied status from localStorage
  useEffect(() => {
    const studied = JSON.parse(localStorage.getItem("studiedPrograms")) || {};
    setStudiedPrograms(studied);
  }, []);

  if (!programsData[category]) {
    return <div className="container">Category not found</div>;
  }

  return (
    <div className="container">
        <AnimatedBackground animationName="starryNight" />
      <h1>{category}</h1>
      <div className="programs">
        {programsData[category].map((program) => (
          <Link
            to={`/program/${program.id}`}
            key={program.id}
            className="program-card"
            style={{
              textDecoration: "none",
              backgroundColor: studiedPrograms[program.id] ? "#cce5cc" : "#f9f9f9",
              color: "black",
              border: studiedPrograms[program.id] ? "2px solid green" : "1px solid #ddd",
            }}
          >
            <h3>{program.name}</h3>
            {studiedPrograms[program.id] && <span>✓ Studied</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
