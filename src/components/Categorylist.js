import React from "react";
import "./CategoryList.css";
import darkBlueBg from "./darkbluefords.jpg"; // ✅ Make sure image isi folder me ho

function CategoryList({ categories, onSelectCategory }) {
  // Split categories dynamically into 2 rows (4 per row)
  const firstRow = categories.slice(0, 4);
  const secondRow = categories.slice(4, 8);

  return (
    <div
      className="category-bg"
      style={{
        backgroundImage: `url(${darkBlueBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "60px 30px",
      }}
    >
      {/* 🔹 Top Heading */}
      <h1 className="main-heading fade-in">
        Top 80 Questions for Placement Preparation🔝
      </h1>

      {/* 🔹 Sub Heading */}
      <h2 className="sub-heading fade-in-delay">
        Select a <span className="highlight">Data Structure</span> to Begin✈️
      </h2>

      {/* 🔹 Categories Two Rows */}
      <div className="categories-wrapper fade-in-delay2">
        {/* First Row */}
        <div className="category-row">
          {firstRow.map((cat, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="category-row">
          {secondRow.map((cat, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
