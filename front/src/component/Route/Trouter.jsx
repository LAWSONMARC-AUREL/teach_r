import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableProduct from "../Molecule/TableProduct.jsx";

export default function Trouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableProduct />} />
      </Routes>
    </Router>
  );
}
