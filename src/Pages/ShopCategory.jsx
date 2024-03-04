import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <ArrowDropDownOutlinedIcon />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                newPrice={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-load-more">Explore more</div>
    </div>
  );
};

export default ShopCategory;
