import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./component/Nav";
import Home from "./component/Home";
import Weblist from "./component/Weblist";
import Footer from "./component/Footer";
import "./Slide1.css";
import Fetchdata from "./component/Fetchdata";

const App = () => {
  return (
    // Add basename here
    <BrowserRouter basename="/web_series">
      <div className="app-container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fetch" element={<Fetchdata />} />
            <Route path="/weblist" element={<Weblist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
