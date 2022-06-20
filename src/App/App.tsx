import React from "react";
import "./App.css";
import Button from "@components/Button";
import CartItem from "@components/CartItem";
import ShopItem from "@components/ShopItem";
import "@styles/_settings.scss";
import Input from "@components/Input";
import SorterByPrice from "@components/SorterByPrice";
const book = require("./../sources/Book.png");

function App() {
  return (
    <>
      <SorterByPrice />
      <Input></Input>
      <CartItem title={"название товара"} count={5} price={400} />
      <ShopItem title={"item"} price={800} photo={book} />
    </>
  );
}

export default App;
