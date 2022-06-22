import Input from "@components/Input";
import ShopItem from "@components/ShopItem";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Input />
        <ShopItem title={"Name-fef"} price={400} />
      </div>
    </div>
  );
}

export default App;
