import React from "react";
import { Link } from "react-router-dom";
import style from "../css/Navigation.module.css";
import logo from "../assets/Vector.jpg";
import { MdMenu, MdClose } from "react-icons/md";


const Navigation = () => {

  const [openMenu, setOpenMenu] = React.useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.logoSmall}>
          <img className={style.logo} src={logo} alt="logo" />
        </div>
        <ul
          className={`$style.navList ${
            openMenu ? style.showMenu : "closeMenu"
          }`}
        >
          <div className={style.navLeftSection}>
            <li className={style.navItem}>
              <Link to="/">
                <img className={style.logo} src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link to="/top-offer" className={style.navLink}>
                Top Offer
              </Link>
            </li>
            <li>
              <Link to="/search" className={style.navLink}>
                Search in Offers
              </Link>
            </li>
            <li>
              <Link to="/references" className={style.navLink}>
                References
              </Link>
            </li>
            <li>
              <Link to="/about" className={style.navLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" className={style.navLink}>
                Our Team
              </Link>
            </li>
          </div>
        </ul>
        <div className={style.navRightSection}>
          <button className={style.contactButton}>Contact Us</button>
          <div className={style.menuIconContainer}>
            {openMenu ? (
              <MdClose className={style.closeIcon} onClick={handleMenu} />
            ) : (
              <MdMenu className={style.menuIcon} onClick={handleMenu} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;