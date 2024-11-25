import React, { useState } from "react";
import "./Home.css";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  // Hàm để cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt mà
    });
  };

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />

      {/* Nút Go to Top */}
      <button
        className="go-to-top"
        onClick={scrollToTop}
        aria-label="Go to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Home;
