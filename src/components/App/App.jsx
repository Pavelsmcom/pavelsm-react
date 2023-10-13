import "./App.css";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

import { AnimatePresence } from "framer-motion";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Experience from "../Experience/Experience";
import SwipeHint from "../SwipeHint/SwipeHint";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isSwipeHintVisible, setIsSwipeHintVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSwipeHintVisible(true);
    }, 1600);
  }, []);

  const minSwipeDistance = 150;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      if (location.pathname === "/") {
        isLeftSwipe ? navigate("/skills") : navigate("/workExp");
      } else if (location.pathname === "/skills") {
        isLeftSwipe ? navigate("/portfolio") : navigate("/");
      } else if (location.pathname === "/portfolio") {
        isLeftSwipe ? navigate("/workExp") : navigate("/skills");
      } else if (location.pathname === "/workExp") {
        isLeftSwipe ? navigate("/") : navigate("/portfolio");
      }
    }
  };

  return (
    <div className="App">
      <div className="page" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} key={1} />
            <Route path="/skills" element={<Skills />} key={2} />
            <Route path="/portfolio" element={<Portfolio />} key={2} />
            <Route path="/workExp" element={<Experience />} key={2} />
          </Routes>
        </AnimatePresence>
        {isSwipeHintVisible && <SwipeHint />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
