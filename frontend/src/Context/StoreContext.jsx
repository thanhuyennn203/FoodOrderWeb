import React, { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext({});

const StoreContextProvider = (props) => {
  const [menu_list, setMenuList] = useState([]); // Khai báo state để lưu menu_list

  useEffect(() => {
    fetch("http://localhost:8801/api/category")
      .then((res) => res.json())
      .then((data) => {
        setMenuList(data); // Cập nhật state với dữ liệu mới
        // console.log(data); // Hiển thị dữ liệu
      })
      .catch((err) => console.log(err));
  }, []);

  const [food_list, setFoodList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8801/api/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFoodList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [cartItems, setCartItems] = useState({}); // State to keep track of items in the cart

  const removeFromCart = (food_id) => {
    // setCartItems((prev) => {
    //   const newCart = { ...prev };
    //   if (newCart[food_id]) {
    //     delete newCart[food_id]; // Remove the item if it exists in the cart
    //   }
    //   return newCart;
    // });
  };

  const getTotalCartAmount = () => {
    // return Object.keys(cartItems).reduce((total, food_id) => {
    //   const item = food_list.find((food) => food.food_id === parseInt(food_id));
    //   if (item) {
    //     return total + item.food_price * cartItems[food_id];
    //   }
    //   return total;
    // }, 0);
  };

  const contextValue = {
    food_list,
    cartItems,
    menu_list,
    setCartItems, // This will allow you to update cartItems directly if needed
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
