import { Route, Routes, BrowserRouter } from "react-router-dom";
import "@styles/_settings.scss";

import Authorization from "@pages/Authorization";
import Registration from "@pages/Registration";
import MainPage from "@pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Authorization />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
