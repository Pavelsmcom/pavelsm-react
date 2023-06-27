import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link navigation__link_active" : ""}`
            }
          >
            Home
            <span className="navigation__span" data-content="Link Hover" aria-hidden="true"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skill"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link navigation__link_active" : ""}`
            }
          >
            My Skills
            <span className="navigation__span" data-content="Link Hover" aria-hidden="true"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link navigation__link_active" : ""}`
            }
          >
            Portfolio
            <span className="navigation__span" data-content="Link Hover" aria-hidden="true"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/workExp"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link navigation__link_active" : ""}`
            }
          >
            Work Experiences
            <span className="navigation__span" data-content="Link Hover" aria-hidden="true"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link navigation__link_active" : ""}`
            }
          >
            Contact
            <span className="navigation__span" data-content="Link Hover" aria-hidden="true"></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

{
  /* <NavLink
  onClick={closeBurgerMenu}
  to="/"
  className={({ isActive }) =>
    `navigation-films__link ${isActive ? "navigation-films__link navigation-films__link_active" : ""}`
  }
>
  Главная
</NavLink>; */
}
