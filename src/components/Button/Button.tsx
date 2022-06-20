import React from "react";
import "./Button.scss";

export type ButtonProps = {
  styles: string;
  title?: string;
  onClick?: (e: React.MouseEvent) => void;
};

const Button: React.FC<ButtonProps> = ({ title, styles, onClick }) => {
  return (
    <button className={`Button ${styles}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
