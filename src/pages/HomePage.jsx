import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { programsData } from "../data/programs";
import NumImg from "../assets/num.png";
import StringImg from "../assets/string.png";
import ArrayImg from "../assets/array.png";
import LinkListImg from "../assets/LinkedList.png";
import "./HomePage.css"
import { AnimatedBackground } from 'animated-backgrounds';
function HomePage() {
  const [studiedCategories, setStudiedCategories] = useState({});

  // Mapping of category names to image URLs
  const categoryImages = {
    Numbers: NumImg,  // Match the exact category names in your programsData
    Strings: StringImg,
    Arrays: ArrayImg,
    LinkedList: LinkListImg,
  };

  // Default image for categories without specific mapping
  const defaultImage = "/images/default.jpg";

  // Check studied programs on page load
  useEffect(() => {
    const studiedPrograms = JSON.parse(localStorage.getItem("studiedPrograms")) || {};
    const categoryStatus = {};

    Object.keys(programsData).forEach((category) => {
      console.log("Category:", category);  // Debugging
      const totalPrograms = programsData[category].length;
      const studiedCount = programsData[category].filter((program) => studiedPrograms[program.id]).length;
      categoryStatus[category] = {
        allStudied: studiedCount === totalPrograms,
        progress: `${studiedCount}/${totalPrograms}`,
      };
    });

    setStudiedCategories(categoryStatus);
  }, []);

  return (
    <div className="container">
        <AnimatedBackground animationName="starryNight" />
        <h1 style={{fontSize: "3rem"}}>𝕽𝕵</h1>
      <h1>Program Catalog</h1>
      <div className="categories">
        {Object.keys(programsData).map((category) => {
          const imageSrc = categoryImages[category] || defaultImage;
          console.log("Image for category", category, ":", imageSrc); // Debugging image path

          return (
            <Link
              to={`/category/${category}`}
              key={category}
              className="category-card"
              style={{
                textDecoration: "none",
                backgroundColor: studiedCategories[category]?.allStudied ? "green" : "#f0f0f0",
                color: studiedCategories[category]?.allStudied ? "silver" : "black",
              }}
            >
              <div className="card-content">
                <div className="image">
                <img
                  src={imageSrc}
                  alt={`${category} thumbnail`}
                  className="category-image"
                />
                </div>
                <h2>{category}</h2>
                <p>Progress: {studiedCategories[category]?.progress || "0/0"}</p>
                {studiedCategories[category]?.allStudied && <span>✓ All Studied</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
