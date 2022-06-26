import React from "react";
import "./CartItem.scss";
import Button from "@components/Button";

const CartItem = ({ title, count, price }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <div className="cart-item__name">
          {title}
          <div className="cart-item__count">{count} шт.</div>
          <div className="cart-item__price">{price} руб.</div>
        </div>
      </div>
      <Button styles="Button_cross" />
    </div>
  );
};

export default CartItem;
