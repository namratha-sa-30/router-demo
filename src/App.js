import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Item from "./components/Item";
import ItemDetails from "./components/ItemDetails";
import Shop from "./components/Shop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Router Demo</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/item" element={<Item />} />
          <Route path="/item/:id" element={<ItemDetails />}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
