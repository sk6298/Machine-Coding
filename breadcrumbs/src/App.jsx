import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Breadcrumb from "./components/Breadcrumb";

function App() {

  return (
    <BrowserRouter>
    <Breadcrumb></Breadcrumb>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
