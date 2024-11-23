import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const isItemInCart = cartItems[id] > 0;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-img"
          src={image}
          srcSet={`${image} 500w, ${image} 1000w, ${image} 1500w`}
          alt=""
        />
        <div className="add-quantity-minus">
          <button className="add-to-cart" onClick={() => addToCart(id)}>
            Add to cart
          </button>
          {isItemInCart && (
            <>
              <h3>{cartItems[id]}</h3>
              <button className="remove-cart" onClick={() => removeFromCart(id)}>
                <img src={assets.minus} alt="" />
              </button>
            </>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_img} alt="" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
        
      </div>
    </div>
  );
};

export default FoodItem;