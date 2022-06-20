import React from "react";
import "./SorterByPrice.scss";

export type SorterByPriceProps = {
  onClick?: (e: React.MouseEvent) => void;
};

const SorterByPrice: React.FC<SorterByPriceProps> = ({ onClick }) => {
  return (
    <button className="sort-block__element" onClick={onClick}>
      Сортировать по цене
      <div className="sort-block__img-price"></div>
    </button>
  );
};

export default SorterByPrice;
