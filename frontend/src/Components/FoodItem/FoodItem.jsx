import React from "react";
import "./FoodItem.css";

const FoodItem = ({ id, name, price, discription, rate, image }) => {
  // console.log(image);
  return (
    <div className="food-item-container">
      <div className="food-item-image-wrapper">
        <img className="food-item-image" src={image} alt="" />
      </div>

      <div className="food-item-info">
        <h4 className="food-item-name">{name}</h4>
        <img className="food-item-rate" src="public/rate.png" />
        <p className="food-item-price">
          {price},000<i>vnd</i>
        </p>
        {/* <p className="food-item-disc">{discription}</p> */}
        <p className="plus">+</p>
      </div>
    </div>
  );
};

export default FoodItem;
