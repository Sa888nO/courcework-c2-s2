import React from "react";
import "./App.css";
import Button from "@components/Button";
import CartItem from "@components/CartItem";
import "@styles/_settings.scss";

function App() {
  return <CartItem title={"название товара"} count={5} price={400} />;
}

export default App;
