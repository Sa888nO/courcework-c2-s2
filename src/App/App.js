import "./App.scss";
import "@styles/_settings.scss";
import { useSelector } from "react-redux";

import ShopItem from "@components/ShopItem";

function App() {
  const items = useSelector((state) => state.items.items);
  return (
    <div className="wrapper">
      <div className="App">
        {items.map((item) => (
          <ShopItem title={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default App;
