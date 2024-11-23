import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate('');
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title-left">Fill the information bellow</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" required/>
          <input type="text" placeholder="Last name" required/>
        </div>
        <div className="multi-fields">
          <input type="email" placeholder="Email address" required/>
          <input type="text" placeholder="Street" required/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required/>
        </div>
        <input type="tel" placeholder="Phone number" required/>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <p className="title-right">You're payement information</p>
          <div>
            <div>
              <p>Subtotals</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-totals-details">
              <p>Delivery fee</p>
              <p>{2}</p>
            </div>
            <div className="cart-totals-details">
              <p>Total</p>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button  >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
