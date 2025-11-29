
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard.jsx"
import Itmes from "../pages/Items.jsx"
import Supplier from "../pages/Supplier.jsx"
import Category from "../pages/Category.jsx"
import Selling from "../pages/Selling.jsx"


const  MainContent = () => {
  return (
     <div className="content-section">
            <Routes>
              <Route path="/" element={<Itmes />} />
              <Route path="/supplier" element={<Supplier />} />
              <Route path="/category" element={<Category />} />
              <Route path="/selling" element={<Selling />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
     </div>
  );
}

export default MainContent;