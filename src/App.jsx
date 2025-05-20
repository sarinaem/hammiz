import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Product from "./components/Product/product";
import "./App.css";
import "./index.css";
import SelectTabel from "./components/Tabs/SelectTabel";
import MapView from "./components/Map/Mapview";

function App() {
  return (
    <div className=" font-dana max-w-[627px] w-full mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/map"
            element={
              <MapView
                mapPoint={{ lat: 35.701825570554576, lng: 51.39133193872797 }}
              />
            }
          />
          <Route path="/product" element={<Product />} />
          <Route path="/selectTabel" element={<SelectTabel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
