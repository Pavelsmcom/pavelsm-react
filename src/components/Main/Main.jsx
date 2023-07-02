import React from "react";
import Hero from "../Hero/Hero";
import TransitionEffect from "../TransitionEffect/TransitionEffect";
// import Skills from "../Skills/Skills";
// import Portfolio from "../Portfolio/Portfolio";
// import Career from "../Career/Career";
// import Education from "../Education/Education";

function Main({ isFirstLoading }) {
  return (
    <main className="content">
      <TransitionEffect />
      <Hero />
      {/* <Skills/>
    <Portfolio/>
    <Career/>
    <Education/> */}
    </main>
  );
}

export default Main;

// Исправить линию в учебе на средних разрешениях!!!
