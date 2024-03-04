import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            newPrice={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
