import React from "react";
import style from "../css/Hero.module.css";
import hero from "../assets/hero.jpg";
import Btn from "./Buttons";

const Hero = () => {
  return (
    <div className={style.heroSection}>
      <div className={style.heroContainer1}>
        <div className={style.heroContent}>
          <div>
            <h1 className={style.heroTitle}>
              Modern living <br />
              for everyone
            </h1>
            <p className={style.heroText}>
              We provide a complete service for the sale, purchase or rental of
              real estate. We have been operating in Madrid and Barcelona more
              than 15 years.
            </p>
          </div>
          <div className={style.heroForm}>
            <select className={style.heroSelect}>
              <option value="Madrid">Madrid</option>
              <option value="Barcelona">Barcelona</option>
            </select>

            <input
              className={style.heroInput}
              type="search"
              placeholder="Search for a property"
            />

            <Btn content="Search" />
          </div>
        </div>
      </div>
      <div className={style.heroContainer}>
        <img className={style.hero} src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
