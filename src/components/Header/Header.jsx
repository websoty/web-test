import { useState } from "react";
import "./Header.scss";
import Animation from "../Animation/Animation";
import Scramble from "../Animation/Scramble";

const navLinks = ["Solutions", "Technology", "About", "Careers", "Resources", "Contact"];


const Header = () => {
const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
    <div className="container">
      <div className="header__inner">
        <div className="header__logo">
          <a href="#">
          <Animation delay={0.4}>
          <img src="/logo.svg" alt="UNLEARN" />
          </Animation>
          </a>
        </div>
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <ul className="nav__list">
            {navLinks.map(item => (
              <li key={item}>
                <a 
                data-text={item}
                onMouseEnter={(e) => Scramble(e.currentTarget)}
                className="nav__link" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button 
        className={`burger ${menuOpen ? "burger-open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
       </div>
      </div>
    </header>
  );
};

export default Header;
