import React from "react";
import "./SorterByCategory.scss";

const SorterByCategory = ({ onClick }) => {
  let cat = undefined;

  const changeCategory = (category) => {};

  const categoryes = {
    type: "Мясо",
    type1: "Крупы",
    type2: "Фрукты",
    type3: "Вина",
  };
  return (
    <div className="sort-block">
      <nav>
        <ul>
          <li>
            <button className="sort-block__element">
              {cat === undefined ? <div>Категория</div> : <div>{cat}</div>}
              <div className="sort-block__img-category"></div>
            </button>
            <ul>
              {Object.values(categoryes).map((category) => (
                <li>
                  <button>{category}</button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SorterByCategory;
