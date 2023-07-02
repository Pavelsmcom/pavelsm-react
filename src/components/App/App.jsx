import { Routes, Route } from "react-router-dom";
import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
