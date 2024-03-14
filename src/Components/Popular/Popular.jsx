import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import data_product from "../Assets/data";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <Item />
    </div>
  );
};

export default Popular;
