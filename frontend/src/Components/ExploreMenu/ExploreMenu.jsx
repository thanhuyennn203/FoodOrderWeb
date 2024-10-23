import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="menu-text">
        Choose from a diverse menu featuring a delectable array
      </p>

      <div className="menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_id ? "All" : item.menu_id
                )
              }
              key={index}
              className="menu-item"
            >
              <div className="menu-img-container">
                <img
                  className={category === item.menu_id ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
              </div>

              <p className="menu-name">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
