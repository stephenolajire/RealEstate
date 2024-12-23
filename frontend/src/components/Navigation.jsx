import React from "react";
import { Link } from 'react-router-dom';
import style from "../css/Navigation.module.css";
import logo from "../assets/Vector.jpg";
import Btn from './Buttons'

const Navigation = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <div className={style.navLeftSection}>
            <li>
              <Link to="/">
                <img className={style.logo} src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/top-offer" className={style.navLink}>Top Offer</Link>
            </li>
            <li>
              <Link to="/search" className={style.navLink}>Search in Offers</Link>
            </li>
            <li>
              <Link to="/references" className={style.navLink}>References</Link>
            </li>
            <li>
              <Link to="/about" className={style.navLink}>About Us</Link>
            </li>
            <li>
              <Link to="/team" className={style.navLink}>Our Team</Link>
            </li>
          </div>
          <div className={style.navRightSection}>
            <li>
              <Btn content="Contact Us" />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
