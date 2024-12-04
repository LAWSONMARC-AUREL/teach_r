import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableProduct from "../Molecule/TableProduct.jsx";
import Navbar from "../Layout/Navbar.jsx";
import HomePage from "../Page/HomePage.jsx";
import ProductDetailPage from "../Page/ProductDetailPage.jsx";

export default function Trouter() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`products/:id`} element={<ProductDetailPage/>} />
      </Routes>
    </Router>
  );
}
