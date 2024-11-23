import React from "react";
import "./ExploreMenu.css";
import Title from "../../Components/Title/Title";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setcategory }) => {

  return (
    <div className="explore" id="explore">
      <div className="explore-menu">
        <Title
          title={"Explore our menu"}
          subtitle={"Choose from a diverse menu featuring delectable array"}
        />
        <div className="explore-item-list">
          {menu_list.map((item, index) => {
            return (
              <div key={index} onClick={() => setcategory(prev => prev === item.menu_name ? "all" : item.menu_name)}>
                <img className={category === item.menu_name ? "active" : ""} src={item.menu_img}alt="xyz"/>
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};

export default ExploreMenu;
