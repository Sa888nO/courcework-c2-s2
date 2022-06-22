import React from "react";
import "./SorterByPrice.scss";

const SorterByPrice = ({ onClick }) => {
  return (
    <button className="sort-block__element" onClick={onClick}>
      Сортировать по цене
      <div className="sort-block__img-price"></div>
    </button>
  );
};

export default SorterByPrice;
