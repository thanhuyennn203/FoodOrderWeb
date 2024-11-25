import React from 'react';
import './PlaceOrder.css';

const PlaceOrder = () => {
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-field">
          <input type="text" name='firstName' placeholder='First name' required />
          <input type="text" name='lastName' placeholder='Last name' required />
        </div>
        <input type="email" name='email' placeholder='Email address' required />
        <input type="text" name='street' placeholder='Street' required />
        <div className="multi-field">
          <input type="text" name='city' placeholder='City' required />
          <input type="text" name='state' placeholder='State' required />
        </div>
        <div className="multi-field">
          <input type="text" name='zipcode' placeholder='Zip code' required />
          <input type="text" name='country' placeholder='Country' required />
        </div>
        <input type="text" name='phone' placeholder='Phone' required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b></div>
          </div>
          <button className='place-order-submit' type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
     
    </form>
  );
};

export default PlaceOrder;
