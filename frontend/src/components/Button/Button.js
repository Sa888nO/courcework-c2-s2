import React from "react";
import "./Button.scss";

const Button = ({ title, styles, onClick }) => {
  return (
    <button className={`Button ${styles}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
