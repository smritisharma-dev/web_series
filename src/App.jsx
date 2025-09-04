import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./component/Nav";
import Home from "./component/Home";

import Footer from "./component/Footer";
import "./Slide1.css";
import Fetchdata from "./component/Fetchdata";

const App = () => {
  return (
    // Add basename here
    <BrowserRouter basename="/web-series">
      <div className="app-container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fetch" element={<Fetchdata />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
