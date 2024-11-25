import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import "./Cart.css";

 

const Cart = () => {
  const navigate = useNavigate(); 
  const {
    cartItems,
    food_list,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
  } = useContext(StoreContext);
  // console.log(food_list);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price (VND)</p> <p>Quantity</p>{" "}
          <p>Total (VND)</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item.product_id] > 0) {
            const imgPath = "public/" + item.thumbnail + ".jpg";
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={imgPath} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} VND</p>
                  <div className="quantity">
                    <p
                      className="cart-items-remove-icon"
                      onClick={() => removeFromCart(item.product_id)}
                    >
                      -
                    </p>
                    <p>{cartItems[item.product_id]}</p>
                    <p
                      className="cart-items-remove-icon"
                      onClick={() => addToCart(item.product_id)}
                    >
                      +
                    </p>
                  </div>
                  <p>{item.price * cartItems[item.product_id]},000 VND</p>{" "}
                  {/* Total in VND */}
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()},000 VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>30,000 VND</p> {/* Delivery fee in VND */}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30},000
                VND
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
