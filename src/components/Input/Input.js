import React from "react";
import "./Input.scss";

const Input = ({ onChange }) => {
  return (
    <div className="search-input-block">
      <div className="search-input-block__img"></div>
      <input
        type="text"
        className="search-input-block__input"
        placeholder="Введите название книги"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
