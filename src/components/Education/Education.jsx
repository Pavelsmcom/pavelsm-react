import { motion, useScroll} from 'framer-motion'
import { useRef } from 'react';

function CareerList({years,companyName, description}) {
  return (
    <li  className="education__list-cell">
     <Circle />
      <div className="education__list-container">
        <h3 className ="education__list-text">{companyName}</h3>
        <div className ="education__list-year">{years}</div>
      </div>
      <p className ="education__list-head">{description}</p>
    </li>
    );
}

function Circle({reference}) {
  return (
    <figure className='education__circle'>
      <svg width="40" height="40" viewBox='0 0 80 80' fill="#F1F1F1">
        <circle cx="50" cy="50" r="16"/>
      </svg>
    </figure>
    );
}

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
    target: ref,
    offset: ['start end', 'center start']
    });

  return (
    <section  className="education">
          <p className="education__pre-header" id="education">learning path</p>
          <h2 className="education__header">Education</h2>
            <ul ref={ref} className="education__list">
              <motion.div style={{ scaleY: scrollYProgress }} className="education__line"/>
              <CareerList years ="2022 - 2023" companyName="Ya.Practicum"  description="Web developer" />
              <CareerList years ="2017" companyName="GK Milandr"  description="ARM microcontroller programming" />
              <CareerList years ="2014" companyName="Bauman Moscow State Technical University"  description="C++ programming" />
              <CareerList years ="2013" companyName="Bauman Moscow State Technical University"  description="C programming" />
              <CareerList years ="2004 - 2010" companyName="MIREA - Russian Technological University"  description="Specialist in radiophysics and electronics" />
            </ul>
        </section>
    );
}

export default Education;