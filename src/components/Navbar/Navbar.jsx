function Navbar() {
  return (
    <nav>
          <ul className="navigation">
          <li><a href="#Home" className="navigation__link">Home</a></li>
            <li><a href="#mySkills" className="navigation__link">My Skills</a></li>
            <li><a href="#portfolio" className="navigation__link">Portfolio</a></li>
            <li><a href="#workExp" className="navigation__link">Work Experiences</a></li>
            <li><a href="#contact" className="navigation__link">Contact</a></li>
          </ul>
        </nav>
      );
}

export default Navbar;