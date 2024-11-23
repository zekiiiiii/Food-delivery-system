import React, { useContext } from "react";
import './FoodDisplay.css'
import FoodItem from "../../Components/FoodItem/FoodItem";
import { StoreContext } from "../../Context/StoreContext";
import Title from "../Title/Title";

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <Title title={'Top dish near to you'} />
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if(category === "all" || category === item.category) {
         return <FoodItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} description={item.description}
          />
        }
        })}
      </div>
      </div>
  )
}

export default FoodDisplay