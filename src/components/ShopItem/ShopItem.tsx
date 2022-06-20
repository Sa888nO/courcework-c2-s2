import React from "react";
import "./ShopItem.scss";
import Button from "@components/Button";

export type ShopItemProps = {
  title: string;
  price: number;
  photo: string;
};

const ShopItem: React.FC<ShopItemProps> = ({ title, price, photo }) => {
  return (
    <div className="shop-item">
      <img className="shop-item__img" src={photo} alt="not finded"></img>
      <div className="shop-item__info-block">
        <div className="shop-item__name-item">{title}</div>
        <div className="shop-item__interaction-block">
          <div className="shop-item__price">{price} руб.</div>
          <Button styles="Button_s-size" title="Купить" />
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
