// Recipe.js
import React, { useState } from "react";
import styles from "./styles.css";

const Recipe = ({ title, category, area, image, instructions }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <h2 className="recipe-title">{title}</h2>
      <p className="recipe-category">
        {category} - {area}
      </p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div className="recipe-instructions">
          <h3>Instructions:</h3>
          <p>{instructions}</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;
