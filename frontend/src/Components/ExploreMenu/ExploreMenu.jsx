import React, { useEffect, useState } from "react";
import "./ExploreMenu.css";
//import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const [menu_list, setMenuList] = useState([]); // Khai báo state để lưu menu_list

  useEffect(() => {
    fetch("http://localhost:8801/category")
      .then((res) => res.json())
      .then((data) => {
        setMenuList(data); // Cập nhật state với dữ liệu mới
        console.log(data); // Hiển thị dữ liệu
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(menu_list);
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="menu-text">
        Choose from a diverse menu featuring a delectable array
      </p>

      <div className="menu-list">
        {menu_list.map((item, index) => {
          console.log(item.thumnail);
          const menuPath = item.thumnail + ".jpg";
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
                  src={menuPath}
                  alt=""
                />
              </div>

              <p className="menu-name">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
