import "./App.css";

import { useNavigate, useRoutes, useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";

import { AnimatePresence } from "framer-motion";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Experience from "../Experience/Experience";

function App() {
  const navigate = useNavigate();

  const location = useLocation();

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 250;

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

  const element = useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/workExp",
      element: <Experience />,
    },
  ]);

  return (
    <div className="App">
      <div className="page" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <Header />
        <AnimatePresence mode="wait">{React.cloneElement(element, { key: location.pathname })}</AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;
