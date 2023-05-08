import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
    </>

  );
}

export default App;
