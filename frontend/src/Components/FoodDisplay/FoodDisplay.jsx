import React, { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { FaBowlFood } from "react-icons/fa6";

const FoodDisplay = ({ category }) => {
  const [food_list, setFoodList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const itemsPerPage = 8; // Số lượng item mỗi trang

  // Fetch danh sách food từ API
  useEffect(() => {
    fetch("http://localhost:8801/api/products")
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Đặt lại currentPage khi category thay đổi
  useEffect(() => {
    setCurrentPage(1); // Reset về trang đầu
  }, [category]);

  // Lọc danh sách food theo category
  const filteredFoodList = food_list.filter(
    (item) => category === "All" || item.category_id === category
  );

  // Tính toán item cho trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFoodList.slice(indexOfFirstItem, indexOfLastItem);

  // Số trang tổng cộng
  const totalPages = Math.ceil(filteredFoodList.length / itemsPerPage);

  // Hàm chuyển trang
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="food-display" id="food-display">
      <h2>
        <FaBowlFood />
        Top food
      </h2>

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

      {/* Nút điều hướng phân trang */}
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          &lt; {/* Nút trái */}
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNext}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          &gt; {/* Nút phải */}
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;
