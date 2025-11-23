import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";

import MainContent from "./components/MainContent.jsx";
import Style from "./styles/appStyle.css";

const App = () => {
  return (
    <Router>
      <div className="main-wrap">
          <Sidebar/>
          <main className="main-content">
            <Header/>
            <MainContent/>
          </main>
      </div>
    </Router>
  );
};

export default App;
