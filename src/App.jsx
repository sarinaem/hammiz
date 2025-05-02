import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import MapView from "./components/Map/Mapview";
import Product from "./components/Product/product";
import "./App.css";
import "./index.css";
import SelectTabel from "./components/Tabs/SelectTabel";

function App() {
  return (
    <div className=" font-dana max-w-[627px] w-full mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/product" element={<Product />} />
          <Route path="/selectTabel" element={<SelectTabel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
