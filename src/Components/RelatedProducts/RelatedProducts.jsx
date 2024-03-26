import React, { useState } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";

const RelatedProducts = () => {
  const [productData, setproductData] = useState([]);

  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {productData.map((item, index) => (
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
    </div>
  );
};

export default RelatedProducts;
