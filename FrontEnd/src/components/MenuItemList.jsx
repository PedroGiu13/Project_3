import React from "react";
import MenuItem from "../components/MenuItem";

const MenuItemList = (props) => {
  return (
    <div className="item-list menu-list">
      {props.menuList?.map((item) => (
        <MenuItem
          key={item.id}
          img={item.image}
          title={item.name}
          price={item.price}
        />
        
        ))}
        {console.log(props.image)}
    </div>
  );
};

export default MenuItemList;
