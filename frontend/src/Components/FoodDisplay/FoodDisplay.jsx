import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { FaBowlFood } from "react-icons/fa6";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      {/* <h2>
        <FaBowlFood />
        Top food
      </h2> */}

      <input
        type="text"
        placeholder="Search for food..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <div className="food-display-list">
        {currentItems.map((item, index) => {
          const imgPath = "public/" + item.thumbnail + ".jpg";
          return (
            <FoodItem
              key={index}
              id={item.product_id}
              name={item.name}
              price={item.price}
              rate={item.rate}
              image={imgPath}
            />
          );
        })}
      </div>

      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNext}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;
