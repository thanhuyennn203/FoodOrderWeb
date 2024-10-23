import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { FaBowlFood } from "react-icons/fa6";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  // console.log(food_list);
  return (
    <div className="food-display" id="food-display">
      <h2>
        <FaBowlFood />
        Top food
      </h2>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || item.category === category) {
            // console.log(item.description);
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                rate={item.rate}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
