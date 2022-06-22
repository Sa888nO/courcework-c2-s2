import "./App.scss";
import "@styles/_settings.scss";
import SorterByCategory from "@components/SorterByCategory";
import SorterByPrice from "@components/SorterByPrice";

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <div>
          <SorterByCategory />
          <div>rfrfrfrferwfer</div>
        </div>
        <SorterByPrice />
      </div>
    </div>
  );
}

export default App;
