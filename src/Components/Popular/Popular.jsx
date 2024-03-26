import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";

const Popular = () => {
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((res) => res.json())
      .then((data) => setPopularData(data));
  }, []);

  return (
    <div className="popular">
      <h1>Popular in women</h1>
      <hr />
      <div className="popular-item">
        {popularData.map((item, index) => (
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

export default Popular;
