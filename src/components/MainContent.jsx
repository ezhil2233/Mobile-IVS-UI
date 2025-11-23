
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard.jsx"
import Itmes from "../pages/Items.jsx"


const  MainContent = () => {
  return (
     <div className="content-section">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/item" element={<Itmes />} />
            </Routes>
     </div>
  );
}

export default MainContent;