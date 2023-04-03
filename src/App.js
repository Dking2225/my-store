import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="single" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
