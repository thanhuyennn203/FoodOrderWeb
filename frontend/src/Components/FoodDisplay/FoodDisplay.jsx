import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { FaBowlFood } from "react-icons/fa6";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>
        <FaBowlFood />
        Top food
      </h2>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || item.category_id === category) {
            const imgPath = "public/" + item.thumbnail + ".jpg";
            // console.log(item.thumbnail);
            return (
              <FoodItem
                key={index}
                id={item.product_id}
                name={item.name}
                price={item.price}
                //description={item.description}
                rate={item.rate}
                image={imgPath}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
