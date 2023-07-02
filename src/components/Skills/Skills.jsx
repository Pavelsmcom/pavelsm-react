import TransitionEffect from "../TransitionEffect/TransitionEffect";

import "./Skills.css";

import html from "../../images/skills/html.png";
import css from "../../images/skills/css.png";
import bem from "../../images/skills/BEM.png";
import js from "../../images/skills/JS.png";
import ts from "../../images/skills/TS.png";
import react from "../../images/skills/react.png";
import wp from "../../images/skills/webpack.png";
import node from "../../images/skills/Nodejs.png";
import c from "../../images/skills/c++.png";
import asm from "../../images/skills/asm.png";

function Skills() {
  return (
    <>
      <TransitionEffect />
      <section className="skills">
        <p className="skills__pre-header" id="mySkills">
          my experience
        </p>
        <h2 className="skills__header">My Skills</h2>
        <ul className="skills__collections">
          <li className="skills__item">
            <figure className="skills__figure">
              <img className="skills__image " src={html} alt="html" />
              <figcaption className="skills__title">HTML</figcaption>
            </figure>
          </li>
          <li className="skills__item">
            <figure className="skills__figure">
              <img className="skills__image" src={css} alt="CSS" />
              <figcaption className="skills__title">CSS</figcaption>
            </figure>
          </li>
          <li className="skills__item">
            <figure className="skills__figure">
              <img className="skills__image" src={bem} alt="BEM" />
              <figcaption className="skills__title">BEM Methodology</figcaption>
            </figure>
          </li>
          <li className="skills__item">
            <figure className="skills__figure">
              <img className="skills__image" src={js} alt="JavaScript" />
              <figcaption className="skills__title">JavaScript</figcaption>
            </figure>
          </li>
          <li className="skills__item">
            <figure className="skills__figure">
              <img className="skills__image" src={ts} alt="TypeScript" />
              <figcaption className="skills__title">TypeScript</figcaption>
            </figure>
          </li>
          <li className="skills__item">
            <figure className="skills__figure">
              <img className="skills__image" src={react} alt="React" />
              <figcaption className="skills__title">React.js</figcaption>
            </figure>
          </li>
          <li className="skills__item">
            <figure className="skills__figure">
              <img className="skills__image" src={wp} alt="WebPack" />
              <figcaption className="skills__title">WebPack</figcaption>
            </figure>
          </li>
          <li className="skills__item">
            <figure className="skills__figure">
              <img className="skills__image" src={node} alt="Node.js" />
              <figcaption className="skills__title">Node.js</figcaption>
            </figure>
          </li>
          <li className="skills__item">
            <figure className="skills__figure">
              <img className="skills__image" src={c} alt="C++" />
              <figcaption className="skills__title">C++/C</figcaption>
            </figure>
          </li>
          <li className="skills__item">
            <figure className="skills__figure">
              <img className="skills__image" src={asm} alt="asm" />
              <figcaption className="skills__title">asm</figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Skills;
