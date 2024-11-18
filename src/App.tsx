import React from "react";
import "./styles/styles.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";

const App: React.FC = () => {

  return (
    <Router>
      <div className="wrapper">
        <div className="page-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:name" element={<DetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
