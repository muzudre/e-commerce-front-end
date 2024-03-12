import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae non
          nulla iste sint et delectus sit dolorem cum obcaecati? Dolorum
          repudiandae laudantium maxime maiores quasi nam ducimus numquam rem
          laboriosam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          quae expedita dignissimos corporis officiis iste ea ratione fugiat,
          exercitationem eos veniam omnis repellat? Vitae dolores praesentium,
          cupiditate quaerat blanditiis ab.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
